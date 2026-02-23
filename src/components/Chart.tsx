import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ComposedChart
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { BENCHMARKS, MODELS, DATA_POINTS } from '../data';

interface ChartProps {
  selectedBenchmarks: string[];
  isNormalized: boolean;
}

export const Chart: React.FC<ChartProps> = ({ selectedBenchmarks, isNormalized }) => {
  const chartData = useMemo(() => {
    const sortedModels = [...MODELS].sort((a, b) => 
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
    );

    const firstReasoningTimestamps: Record<string, number> = {};
    const saturationTimestamps: Record<string, number> = {};
    
    BENCHMARKS.forEach(benchmark => {
      for (const model of sortedModels) {
        const dp = DATA_POINTS.find(d => d.benchmarkId === benchmark.id && d.modelId === model.id);
        if (dp) {
          if (dp.score >= 75 && !saturationTimestamps[benchmark.id]) {
            saturationTimestamps[benchmark.id] = new Date(model.releaseDate).getTime();
          }
          if (model.isReasoning && !firstReasoningTimestamps[benchmark.id]) {
            firstReasoningTimestamps[benchmark.id] = new Date(model.releaseDate).getTime();
          }
        }
      }
    });

    const benchmarkStats: Record<string, { min: number, max: number }> = {};
    BENCHMARKS.forEach(benchmark => {
      let validPoints: number[] = [];
      const firstReasoningTime = firstReasoningTimestamps[benchmark.id];
      
      for (const model of sortedModels) {
        const dp = DATA_POINTS.find(d => d.benchmarkId === benchmark.id && d.modelId === model.id);
        if (dp) {
          const timestamp = new Date(model.releaseDate).getTime();
          if (firstReasoningTime && timestamp > firstReasoningTime && !model.isReasoning) {
            continue;
          }
          validPoints.push(dp.score);
        }
      }
      
      if (validPoints.length > 0) {
        const min = validPoints[0];
        // Find the first point >= 75, or the max if none exists
        let max = validPoints.find(p => p >= 75);
        if (max === undefined) {
            max = validPoints[validPoints.length - 1];
        }
        if (max === min) max = min + 1;
        benchmarkStats[benchmark.id] = { min, max };
      }
    });

    return sortedModels.map(model => {
      const timestamp = new Date(model.releaseDate).getTime();
      const dataPoint: any = {
        name: model.name,
        date: model.releaseDate,
        timestamp,
        isReasoning: model.isReasoning,
        company: model.company,
      };

      BENCHMARKS.forEach(benchmark => {
        const dp = DATA_POINTS.find(d => d.benchmarkId === benchmark.id && d.modelId === model.id);
        if (dp) {
          const firstReasoningTime = firstReasoningTimestamps[benchmark.id];
          const satTime = saturationTimestamps[benchmark.id];
          
          // Skip non-reasoning models after the first reasoning model is tested
          if (firstReasoningTime && timestamp > firstReasoningTime && !model.isReasoning) {
            return;
          }
          
          let score = dp.score;
          if (isNormalized && benchmarkStats[benchmark.id]) {
            const { min, max } = benchmarkStats[benchmark.id];
            score = ((score - min) / (max - min)) * 100;
            if (score > 100) score = 100; // Cap normalized score at 100
          }
          
          if (!satTime || timestamp <= satTime) {
            dataPoint[benchmark.id] = score;
          }
          if (satTime && timestamp >= satTime) {
            dataPoint[`${benchmark.id}_saturated`] = score;
          }
          dataPoint[`${benchmark.id}_raw`] = dp.score; // Keep raw score for tooltip
        }
      });

      return dataPoint;
    });
  }, [isNormalized]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      // Filter out duplicate benchmark entries if both saturated and unsaturated lines have a point here
      const uniquePayload = payload.filter((entry: any, index: number, self: any[]) => 
        index === self.findIndex((e: any) => 
          e.dataKey.replace('_saturated', '') === entry.dataKey.replace('_saturated', '')
        )
      );

      return (
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-xl text-sm">
          <div className="font-semibold text-zinc-100 mb-1 flex items-center gap-2">
            {data.name}
            {data.isReasoning && (
              <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                Reasoning
              </span>
            )}
          </div>
          <div className="text-zinc-400 text-xs mb-3">
            {format(parseISO(data.date), 'MMM d, yyyy')} • {data.company}
          </div>
          <div className="space-y-1.5">
            {uniquePayload.map((entry: any) => {
              const baseKey = entry.dataKey.replace('_saturated', '');
              const isSaturated = entry.dataKey.endsWith('_saturated') || entry.value >= 75;
              const benchmark = BENCHMARKS.find(b => b.id === baseKey);
              const rawScore = data[`${baseKey}_raw`];
              
              const displayValue = entry.value;
              
              return (
                <div key={baseKey} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: benchmark?.color, opacity: isSaturated ? 0.4 : 1 }}
                    />
                    <span className="text-zinc-300">
                      {benchmark?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isNormalized && rawScore !== undefined && (
                      <span className="text-zinc-500 text-xs">
                        ({rawScore.toFixed(1)})
                      </span>
                    )}
                    <span className="font-mono text-zinc-100">
                      {isNormalized ? `${displayValue.toFixed(0)}%` : `${displayValue.toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 40, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis 
            dataKey="timestamp" 
            type="number"
            domain={['dataMin - 2592000000', 'dataMax + 2592000000']} // +/- 1 month padding
            tickFormatter={(tick) => format(new Date(tick), 'MMM yy')}
            stroke="#52525b"
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis 
            domain={[0, 100]}
            stroke="#52525b"
            tick={{ fill: '#a1a1aa', fontSize: 12, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => `${val}%`}
            dx={-10}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3f3f46', strokeWidth: 1, strokeDasharray: '4 4' }} />
          
          <ReferenceDot y={isNormalized ? 100 : 75} r={0} stroke="none" />
          
          {BENCHMARKS.filter(b => selectedBenchmarks.includes(b.id)).map(benchmark => (
            <React.Fragment key={benchmark.id}>
              {/* Unsaturated Line */}
              <Line
                type="monotone"
                dataKey={benchmark.id}
                stroke={benchmark.color}
                strokeWidth={3}
                dot={(props: any) => {
                  const { cx, cy, payload } = props;
                  if (!cx || !cy) return null;
                  
                  const isReasoning = payload.isReasoning;
                  
                  return (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={isReasoning ? 6 : 4} 
                      fill={isReasoning ? 'rgba(255, 255, 255, 0.4)' : benchmark.color}
                      stroke={benchmark.color}
                      strokeWidth={isReasoning ? 2 : 0}
                      key={`dot-${payload.name}-${benchmark.id}`}
                    />
                  );
                }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                connectNulls={true}
              />
              {/* Saturated Line */}
              <Line
                type="monotone"
                dataKey={`${benchmark.id}_saturated`}
                stroke={benchmark.color}
                strokeWidth={3}
                strokeOpacity={0.1}
                dot={false}
                activeDot={false}
                connectNulls={true}
              />
            </React.Fragment>
          ))}
        </ComposedChart>
      </ResponsiveContainer>
      
      <div className="mt-4 text-center text-xs text-zinc-500">
        Note: Once a benchmark tests a reasoning model, subsequent non-reasoning models are excluded to highlight the reasoning frontier.
      </div>
    </div>
  );
};
