import React, { useState } from 'react';
import { Chart } from './components/Chart';
import { BENCHMARKS, MODELS, DATA_POINTS } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Activity, BrainCircuit } from 'lucide-react';

export default function App() {
  const [selectedBenchmarks, setSelectedBenchmarks] = useState<string[]>(BENCHMARKS.map(b => b.id));
  const [isNormalized, setIsNormalized] = useState(true);
  const [showRawData, setShowRawData] = useState(false);

  const toggleBenchmark = (id: string) => {
    setSelectedBenchmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <header className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
            <Activity className="w-4 h-4" />
            <span>AI Capability Tracking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Are we seeing a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">hard takeoff</span> in non-coding capabilities?
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            This explorer tracks the performance of frontier AI models across the most challenging, 
            <strong className="text-zinc-200 font-medium"> unsaturated non-coding benchmarks</strong>. 
            By filtering out saturated tests and coding tasks, we can get a clearer picture of 
            general reasoning acceleration.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Sidebar Controls */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-zinc-400" />
                  Benchmarks
                </h3>
                <button 
                  onClick={() => setSelectedBenchmarks(selectedBenchmarks.length === BENCHMARKS.length ? [] : BENCHMARKS.map(b => b.id))}
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  {selectedBenchmarks.length === BENCHMARKS.length ? 'Deselect All' : 'Select All'}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {BENCHMARKS.map(benchmark => {
                  const isSelected = selectedBenchmarks.includes(benchmark.id);
                  return (
                    <div key={benchmark.id} className="relative group">
                      <button
                        onClick={() => toggleBenchmark(benchmark.id)}
                        className={`w-full h-full text-left p-3 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'bg-zinc-900 border-zinc-700 shadow-sm' 
                            : 'bg-zinc-950/50 border-zinc-800/50 opacity-60 hover:opacity-100 hover:bg-zinc-900/50'
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <div 
                                className={`w-3 h-3 rounded-full shrink-0 transition-transform ${isSelected ? 'scale-100' : 'scale-50'}`}
                                style={{ backgroundColor: benchmark.color }}
                              />
                              <span className="font-medium text-zinc-100 text-sm leading-tight">{benchmark.name}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Tooltip */}
                      <div className="absolute left-full top-0 ml-2 w-64 p-3 bg-zinc-800 text-xs text-zinc-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl hidden lg:block">
                        <div className="font-bold text-zinc-100 mb-1">{benchmark.name}</div>
                        {benchmark.description}
                      </div>
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-zinc-800 text-xs text-zinc-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl lg:hidden">
                        <div className="font-bold text-zinc-100 mb-1">{benchmark.name}</div>
                        {benchmark.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-zinc-100">Performance Trajectory</h2>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative group">
                  <label className="flex items-center gap-3 cursor-pointer bg-zinc-900/50 border border-zinc-800 px-4 py-2.5 rounded-xl hover:bg-zinc-800/50 hover:border-zinc-700 transition-all shadow-sm">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={isNormalized}
                        onChange={(e) => setIsNormalized(e.target.checked)}
                      />
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors border-2 ${
                        isNormalized ? 'bg-indigo-500 border-indigo-500' : 'bg-zinc-950 border-zinc-700 group-hover:border-zinc-500'
                      }`}>
                        {isNormalized && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-bold text-zinc-200">Normalize</span>
                  </label>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-zinc-800 text-xs text-zinc-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                    Scales each benchmark so its first data point is 0% and its last data point is 100%. This makes it easier to compare the relative rate of progress across different tests.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm relative">
              {selectedBenchmarks.length === 0 ? (
                <div className="h-[500px] md:h-[600px] flex flex-col items-center justify-center text-zinc-500">
                  <Activity className="w-12 h-12 mb-4 opacity-20" />
                  <p>Select at least one benchmark to view the trajectory.</p>
                </div>
              ) : (
                <Chart 
                  selectedBenchmarks={selectedBenchmarks} 
                  isNormalized={isNormalized} 
                />
              )}
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-500 px-2 gap-2">
              <p>Data compiled from technical reports and public leaderboards.</p>
              <p>Scores represent 0-shot or standard few-shot evaluations where applicable.</p>
            </div>
          </div>
        </div>

        {/* Raw Data Section (Less Obvious) */}
        <div className="mt-24 border-t border-zinc-800/50 pt-12">
          <button 
            onClick={() => setShowRawData(!showRawData)}
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors mx-auto"
          >
            {showRawData ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showRawData ? 'Hide Raw Data & Methodology' : 'View Raw Data & Methodology'}
          </button>

          <AnimatePresence>
            {showRawData && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-zinc-200 font-semibold mb-2">Methodology</h4>
                      <p className="leading-relaxed">
                        We selected benchmarks that are widely recognized as challenging and have not yet been "solved" (approaching 99% accuracy) by current models, with the exception of MATH which is nearing saturation but provides a crucial historical baseline. We've included extremely hard, unsaturated benchmarks like FrontierMath, Humanity's Last Exam (HLE), and OSWorld to track the frontier. Coding benchmarks (HumanEval, SWE-bench) were excluded to focus purely on general reasoning, knowledge retrieval, and agentic capabilities.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-zinc-200 font-semibold mb-2">Data Sources</h4>
                      <ul className="space-y-2 list-disc pl-4 marker:text-zinc-700">
                        <li>OpenAI Technical Reports (GPT-4, GPT-4o, o1, o3-mini, o3, GPT-4.5)</li>
                        <li>Anthropic Claude 3, 3.5, 3.7 & 4 Model Cards</li>
                        <li>Google Gemini 1.5, 2.0, 2.5 & 3.0 Technical Reports</li>
                        <li>Meta Llama 3.1 & 4 Research Papers</li>
                        <li>DeepSeek-R1 Technical Report</li>
                        <li>xAI Grok 3 Announcement</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 overflow-x-auto">
                    <table className="w-full text-left text-xs whitespace-nowrap">
                      <thead>
                        <tr className="border-b border-zinc-800 text-zinc-300">
                          <th className="pb-2 font-medium">Model</th>
                          <th className="pb-2 font-medium">Date</th>
                          {BENCHMARKS.map(b => (
                            <th key={b.id} className="pb-2 font-medium px-2">{b.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/50">
                        {MODELS.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).map(model => (
                          <tr key={model.id} className="hover:bg-zinc-800/30 transition-colors">
                            <td className="py-2 pr-4 font-medium text-zinc-300">{model.name}</td>
                            <td className="py-2 pr-4 text-zinc-500">{model.releaseDate.substring(0, 7)}</td>
                            {BENCHMARKS.map(b => {
                              const dp = DATA_POINTS.find(d => d.benchmarkId === b.id && d.modelId === model.id);
                              return (
                                <td key={b.id} className="py-2 px-2 font-mono text-zinc-400">
                                  {dp ? `${dp.score.toFixed(1)}%` : '-'}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
