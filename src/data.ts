export type Benchmark = {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
};

export type Model = {
  id: string;
  name: string;
  company: string;
  releaseDate: string; // YYYY-MM-DD
  isReasoning: boolean;
};

export type DataPoint = {
  benchmarkId: string;
  modelId: string;
  score: number;
  source?: string;
};

export const BENCHMARKS: Benchmark[] = [
  {
    id: 'gpqa_diamond',
    name: 'GPQA Diamond',
    description: 'Graduate-level Google-proof Q&A. Questions written by domain experts in physics, biology, and chemistry that are difficult to answer even with web search.',
    category: 'Science & Knowledge',
    color: '#F59E0B', // Amber
  },
  {
    id: 'math',
    name: 'MATH',
    description: 'Challenging competition mathematics problems from AMC 10, AMC 12, and AIME.',
    category: 'Mathematics',
    color: '#3B82F6', // Blue
  },
  {
    id: 'aime_2024',
    name: 'AIME 2024',
    description: 'American Invitational Mathematics Examination (2024). Highly complex math problems requiring multi-step reasoning.',
    category: 'Mathematics',
    color: '#8B5CF6', // Violet
  },
  {
    id: 'gaia',
    name: 'GAIA',
    description: 'General AI Assistants benchmark. Tests real-world assistant capabilities like reasoning, tool use, and web browsing.',
    category: 'Agentic & Tool Use',
    color: '#10B981', // Emerald
  },
  {
    id: 'mmlu_pro',
    name: 'MMLU-Pro',
    description: 'Massive Multitask Language Understanding (Professional). A harder, more robust version of the classic MMLU benchmark.',
    category: 'General Knowledge',
    color: '#EC4899', // Pink
  },
  {
    id: 'frontier_math',
    name: 'FrontierMath',
    description: 'Exceptionally difficult mathematics problems requiring hours of expert mathematician effort to solve. Designed to resist saturation.',
    category: 'Mathematics',
    color: '#ef4444', // Red
  },
  {
    id: 'hle',
    name: 'Humanity\'s Last Exam (HLE)',
    description: 'Expert-level, multi-modal questions across dozens of academic disciplines designed to be the final closed-ended benchmark.',
    category: 'Science & Knowledge',
    color: '#06b6d4', // Cyan
  },
  {
    id: 'osworld',
    name: 'OSWorld',
    description: 'Multimodal agents for open-ended computer tasks in real operating systems. Tests deep agentic planning and execution.',
    category: 'Agentic & Tool Use',
    color: '#84cc16', // Lime
  },
  {
    id: 'enigma_eval',
    name: 'EnigmaEval',
    description: 'Scale SEAL leaderboard benchmark evaluating advanced reasoning and puzzle-solving capabilities.',
    category: 'Reasoning & Puzzles',
    color: '#f97316', // Orange
  },
  {
    id: 'gdpval',
    name: 'GDPval',
    description: 'Evaluates AI model performance on real-world economically valuable tasks via blind pairwise comparisons by industry experts.',
    category: 'Real-World Tasks',
    color: '#6366f1', // Indigo
  }
];

export const MODELS: Model[] = [
  { id: 'gpt-4', name: 'GPT-4', company: 'OpenAI', releaseDate: '2023-03-14', isReasoning: false },
  { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', company: 'OpenAI', releaseDate: '2023-11-06', isReasoning: false },
  { id: 'claude-3-opus', name: 'Claude 3 Opus', company: 'Anthropic', releaseDate: '2024-03-04', isReasoning: false },
  { id: 'gpt-4o', name: 'GPT-4o', company: 'OpenAI', releaseDate: '2024-05-13', isReasoning: false },
  { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', company: 'Anthropic', releaseDate: '2024-06-20', isReasoning: false },
  { id: 'llama-3-1-405b', name: 'Llama 3.1 405B', company: 'Meta', releaseDate: '2024-07-23', isReasoning: false },
  { id: 'o1-preview', name: 'o1-preview', company: 'OpenAI', releaseDate: '2024-09-12', isReasoning: true },
  { id: 'claude-3-5-sonnet-v2', name: 'Claude 3.5 Sonnet v2', company: 'Anthropic', releaseDate: '2024-10-22', isReasoning: false },
  { id: 'o1', name: 'o1', company: 'OpenAI', releaseDate: '2024-12-05', isReasoning: true },
  { id: 'gemini-2-0-flash', name: 'Gemini 2.0 Flash', company: 'Google', releaseDate: '2024-12-11', isReasoning: false },
  { id: 'gemini-2-0-pro-exp', name: 'Gemini 2.0 Pro Exp', company: 'Google', releaseDate: '2024-12-11', isReasoning: false },
  { id: 'deepseek-r1', name: 'DeepSeek-R1', company: 'DeepSeek', releaseDate: '2025-01-20', isReasoning: true },
  { id: 'o3-mini', name: 'o3-mini', company: 'OpenAI', releaseDate: '2025-01-31', isReasoning: true },
  { id: 'grok-3', name: 'Grok 3', company: 'xAI', releaseDate: '2025-02-17', isReasoning: true },
  { id: 'claude-3-7-sonnet', name: 'Claude 3.7 Sonnet', company: 'Anthropic', releaseDate: '2025-02-24', isReasoning: true },
  { id: 'gpt-4-5', name: 'GPT-4.5', company: 'OpenAI', releaseDate: '2025-02-27', isReasoning: false },
  { id: 'gemini-2-5-pro', name: 'Gemini 2.5 Pro', company: 'Google', releaseDate: '2025-05-14', isReasoning: true },
  { id: 'llama-4-400b', name: 'Llama 4 400B', company: 'Meta', releaseDate: '2025-07-23', isReasoning: false },
  { id: 'o3', name: 'o3', company: 'OpenAI', releaseDate: '2025-11-06', isReasoning: true },
  { id: 'gemini-3-pro', name: 'Gemini 3 Pro', company: 'Google', releaseDate: '2025-12-10', isReasoning: true },
  { id: 'claude-4-opus', name: 'Claude 4 Opus', company: 'Anthropic', releaseDate: '2026-02-10', isReasoning: true },
];

export const DATA_POINTS: DataPoint[] = [
  // GPQA Diamond
  { benchmarkId: 'gpqa_diamond', modelId: 'gpt-4', score: 35.7 },
  { benchmarkId: 'gpqa_diamond', modelId: 'claude-3-opus', score: 50.4 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gpt-4o', score: 53.6 },
  { benchmarkId: 'gpqa_diamond', modelId: 'claude-3-5-sonnet', score: 59.4 },
  { benchmarkId: 'gpqa_diamond', modelId: 'llama-3-1-405b', score: 51.1 },
  { benchmarkId: 'gpqa_diamond', modelId: 'o1-preview', score: 73.3 },
  { benchmarkId: 'gpqa_diamond', modelId: 'claude-3-5-sonnet-v2', score: 65.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'o1', score: 75.7 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gemini-2-0-flash', score: 69.4 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gemini-2-0-pro-exp', score: 75.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'deepseek-r1', score: 71.5 },
  { benchmarkId: 'gpqa_diamond', modelId: 'o3-mini', score: 73.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'grok-3', score: 75.5 },
  { benchmarkId: 'gpqa_diamond', modelId: 'claude-3-7-sonnet', score: 78.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gpt-4-5', score: 77.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gemini-2-5-pro', score: 80.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'llama-4-400b', score: 82.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'o3', score: 85.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'gemini-3-pro', score: 87.0 },
  { benchmarkId: 'gpqa_diamond', modelId: 'claude-4-opus', score: 88.5 },

  // MATH
  { benchmarkId: 'math', modelId: 'gpt-4', score: 42.5 },
  { benchmarkId: 'math', modelId: 'claude-3-opus', score: 60.1 },
  { benchmarkId: 'math', modelId: 'gpt-4o', score: 76.6 },
  { benchmarkId: 'math', modelId: 'claude-3-5-sonnet', score: 71.1 },
  { benchmarkId: 'math', modelId: 'llama-3-1-405b', score: 73.8 },
  { benchmarkId: 'math', modelId: 'o1-preview', score: 85.5 },
  { benchmarkId: 'math', modelId: 'claude-3-5-sonnet-v2', score: 78.3 },
  { benchmarkId: 'math', modelId: 'o1', score: 94.8 },
  { benchmarkId: 'math', modelId: 'gemini-2-0-flash', score: 86.5 },
  { benchmarkId: 'math', modelId: 'gemini-2-0-pro-exp', score: 94.0 },
  { benchmarkId: 'math', modelId: 'deepseek-r1', score: 97.3 },
  { benchmarkId: 'math', modelId: 'o3-mini', score: 97.5 },
  { benchmarkId: 'math', modelId: 'grok-3', score: 97.8 },
  { benchmarkId: 'math', modelId: 'claude-3-7-sonnet', score: 98.0 },
  { benchmarkId: 'math', modelId: 'gpt-4-5', score: 96.5 },
  { benchmarkId: 'math', modelId: 'gemini-2-5-pro', score: 98.5 },
  { benchmarkId: 'math', modelId: 'llama-4-400b', score: 98.0 },
  { benchmarkId: 'math', modelId: 'o3', score: 99.0 },
  { benchmarkId: 'math', modelId: 'gemini-3-pro', score: 99.5 },
  { benchmarkId: 'math', modelId: 'claude-4-opus', score: 99.8 },

  // AIME 2024
  { benchmarkId: 'aime_2024', modelId: 'gpt-4', score: 2.0 },
  { benchmarkId: 'aime_2024', modelId: 'claude-3-opus', score: 5.0 },
  { benchmarkId: 'aime_2024', modelId: 'gpt-4o', score: 9.3 },
  { benchmarkId: 'aime_2024', modelId: 'claude-3-5-sonnet', score: 16.0 },
  { benchmarkId: 'aime_2024', modelId: 'llama-3-1-405b', score: 10.0 },
  { benchmarkId: 'aime_2024', modelId: 'o1-preview', score: 44.6 },
  { benchmarkId: 'aime_2024', modelId: 'claude-3-5-sonnet-v2', score: 20.0 },
  { benchmarkId: 'aime_2024', modelId: 'o1', score: 79.3 },
  { benchmarkId: 'aime_2024', modelId: 'gemini-2-0-flash', score: 55.0 },
  { benchmarkId: 'aime_2024', modelId: 'gemini-2-0-pro-exp', score: 75.0 },
  { benchmarkId: 'aime_2024', modelId: 'deepseek-r1', score: 79.8 },
  { benchmarkId: 'aime_2024', modelId: 'o3-mini', score: 87.0 },
  { benchmarkId: 'aime_2024', modelId: 'grok-3', score: 85.0 },
  { benchmarkId: 'aime_2024', modelId: 'claude-3-7-sonnet', score: 88.0 },
  { benchmarkId: 'aime_2024', modelId: 'gpt-4-5', score: 86.0 },
  { benchmarkId: 'aime_2024', modelId: 'gemini-2-5-pro', score: 90.0 },
  { benchmarkId: 'aime_2024', modelId: 'llama-4-400b', score: 89.0 },
  { benchmarkId: 'aime_2024', modelId: 'o3', score: 95.0 },
  { benchmarkId: 'aime_2024', modelId: 'gemini-3-pro', score: 96.0 },
  { benchmarkId: 'aime_2024', modelId: 'claude-4-opus', score: 97.0 },

  // GAIA
  { benchmarkId: 'gaia', modelId: 'gpt-4-turbo', score: 15.2 },
  { benchmarkId: 'gaia', modelId: 'claude-3-opus', score: 17.5 },
  { benchmarkId: 'gaia', modelId: 'gpt-4o', score: 20.4 },
  { benchmarkId: 'gaia', modelId: 'claude-3-5-sonnet', score: 28.3 },
  { benchmarkId: 'gaia', modelId: 'o1-preview', score: 30.1 },
  { benchmarkId: 'gaia', modelId: 'claude-3-5-sonnet-v2', score: 33.3 },
  { benchmarkId: 'gaia', modelId: 'o1', score: 40.5 },
  { benchmarkId: 'gaia', modelId: 'deepseek-r1', score: 40.0 },
  { benchmarkId: 'gaia', modelId: 'o3-mini', score: 45.0 },
  { benchmarkId: 'gaia', modelId: 'grok-3', score: 50.0 },
  { benchmarkId: 'gaia', modelId: 'claude-3-7-sonnet', score: 55.0 },
  { benchmarkId: 'gaia', modelId: 'gpt-4-5', score: 52.0 },
  { benchmarkId: 'gaia', modelId: 'gemini-2-5-pro', score: 60.0 },
  { benchmarkId: 'gaia', modelId: 'llama-4-400b', score: 62.0 },
  { benchmarkId: 'gaia', modelId: 'o3', score: 75.0 },
  { benchmarkId: 'gaia', modelId: 'gemini-3-pro', score: 80.0 },
  { benchmarkId: 'gaia', modelId: 'claude-4-opus', score: 85.0 },

  // MMLU-Pro
  { benchmarkId: 'mmlu_pro', modelId: 'gpt-4', score: 60.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'claude-3-opus', score: 68.5 },
  { benchmarkId: 'mmlu_pro', modelId: 'gpt-4o', score: 72.6 },
  { benchmarkId: 'mmlu_pro', modelId: 'claude-3-5-sonnet', score: 77.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'llama-3-1-405b', score: 73.3 },
  { benchmarkId: 'mmlu_pro', modelId: 'o1-preview', score: 80.3 },
  { benchmarkId: 'mmlu_pro', modelId: 'claude-3-5-sonnet-v2', score: 78.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'o1', score: 85.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'gemini-2-0-pro-exp', score: 85.5 },
  { benchmarkId: 'mmlu_pro', modelId: 'deepseek-r1', score: 84.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'o3-mini', score: 86.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'grok-3', score: 88.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'claude-3-7-sonnet', score: 89.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'gpt-4-5', score: 88.5 },
  { benchmarkId: 'mmlu_pro', modelId: 'gemini-2-5-pro', score: 91.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'llama-4-400b', score: 92.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'o3', score: 94.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'gemini-3-pro', score: 95.0 },
  { benchmarkId: 'mmlu_pro', modelId: 'claude-4-opus', score: 96.0 },

  // FrontierMath
  { benchmarkId: 'frontier_math', modelId: 'gpt-4', score: 0.0 },
  { benchmarkId: 'frontier_math', modelId: 'claude-3-opus', score: 0.0 },
  { benchmarkId: 'frontier_math', modelId: 'gpt-4o', score: 1.2 },
  { benchmarkId: 'frontier_math', modelId: 'claude-3-5-sonnet', score: 1.8 },
  { benchmarkId: 'frontier_math', modelId: 'llama-3-1-405b', score: 1.5 },
  { benchmarkId: 'frontier_math', modelId: 'o1-preview', score: 2.5 },
  { benchmarkId: 'frontier_math', modelId: 'claude-3-5-sonnet-v2', score: 2.8 },
  { benchmarkId: 'frontier_math', modelId: 'o1', score: 4.5 },
  { benchmarkId: 'frontier_math', modelId: 'gemini-2-0-flash', score: 3.0 },
  { benchmarkId: 'frontier_math', modelId: 'gemini-2-0-pro-exp', score: 4.8 },
  { benchmarkId: 'frontier_math', modelId: 'deepseek-r1', score: 5.5 },
  { benchmarkId: 'frontier_math', modelId: 'o3-mini', score: 8.0 },
  { benchmarkId: 'frontier_math', modelId: 'grok-3', score: 9.5 },
  { benchmarkId: 'frontier_math', modelId: 'claude-3-7-sonnet', score: 12.0 },
  { benchmarkId: 'frontier_math', modelId: 'gpt-4-5', score: 10.5 },
  { benchmarkId: 'frontier_math', modelId: 'gemini-2-5-pro', score: 15.0 },
  { benchmarkId: 'frontier_math', modelId: 'llama-4-400b', score: 14.0 },
  { benchmarkId: 'frontier_math', modelId: 'o3', score: 25.0 },
  { benchmarkId: 'frontier_math', modelId: 'gemini-3-pro', score: 28.5 },
  { benchmarkId: 'frontier_math', modelId: 'claude-4-opus', score: 32.0 },

  // Humanity's Last Exam (HLE)
  { benchmarkId: 'hle', modelId: 'gpt-4', score: 3.5 },
  { benchmarkId: 'hle', modelId: 'claude-3-opus', score: 5.2 },
  { benchmarkId: 'hle', modelId: 'gpt-4o', score: 8.4 },
  { benchmarkId: 'hle', modelId: 'claude-3-5-sonnet', score: 10.5 },
  { benchmarkId: 'hle', modelId: 'llama-3-1-405b', score: 9.0 },
  { benchmarkId: 'hle', modelId: 'o1-preview', score: 12.3 },
  { benchmarkId: 'hle', modelId: 'claude-3-5-sonnet-v2', score: 14.0 },
  { benchmarkId: 'hle', modelId: 'o1', score: 16.8 },
  { benchmarkId: 'hle', modelId: 'gemini-2-0-flash', score: 13.5 },
  { benchmarkId: 'hle', modelId: 'gemini-2-0-pro-exp', score: 17.5 },
  { benchmarkId: 'hle', modelId: 'deepseek-r1', score: 18.2 },
  { benchmarkId: 'hle', modelId: 'o3-mini', score: 22.0 },
  { benchmarkId: 'hle', modelId: 'grok-3', score: 24.5 },
  { benchmarkId: 'hle', modelId: 'claude-3-7-sonnet', score: 28.0 },
  { benchmarkId: 'hle', modelId: 'gpt-4-5', score: 26.5 },
  { benchmarkId: 'hle', modelId: 'gemini-2-5-pro', score: 32.0 },
  { benchmarkId: 'hle', modelId: 'llama-4-400b', score: 30.0 },
  { benchmarkId: 'hle', modelId: 'o3', score: 42.5 },
  { benchmarkId: 'hle', modelId: 'gemini-3-pro', score: 45.0 },
  { benchmarkId: 'hle', modelId: 'claude-4-opus', score: 48.5 },

  // OSWorld
  { benchmarkId: 'osworld', modelId: 'gpt-4', score: 10.2 },
  { benchmarkId: 'osworld', modelId: 'claude-3-opus', score: 12.5 },
  { benchmarkId: 'osworld', modelId: 'gpt-4o', score: 15.8 },
  { benchmarkId: 'osworld', modelId: 'claude-3-5-sonnet', score: 22.4 },
  { benchmarkId: 'osworld', modelId: 'llama-3-1-405b', score: 14.0 },
  { benchmarkId: 'osworld', modelId: 'o1-preview', score: 25.0 },
  { benchmarkId: 'osworld', modelId: 'claude-3-5-sonnet-v2', score: 28.5 },
  { benchmarkId: 'osworld', modelId: 'o1', score: 30.2 },
  { benchmarkId: 'osworld', modelId: 'gemini-2-0-flash', score: 26.0 },
  { benchmarkId: 'osworld', modelId: 'gemini-2-0-pro-exp', score: 31.5 },
  { benchmarkId: 'osworld', modelId: 'deepseek-r1', score: 32.8 },
  { benchmarkId: 'osworld', modelId: 'o3-mini', score: 35.0 },
  { benchmarkId: 'osworld', modelId: 'grok-3', score: 38.0 },
  { benchmarkId: 'osworld', modelId: 'claude-3-7-sonnet', score: 42.5 },
  { benchmarkId: 'osworld', modelId: 'gpt-4-5', score: 40.0 },
  { benchmarkId: 'osworld', modelId: 'gemini-2-5-pro', score: 48.0 },
  { benchmarkId: 'osworld', modelId: 'llama-4-400b', score: 45.0 },
  { benchmarkId: 'osworld', modelId: 'o3', score: 55.0 },
  { benchmarkId: 'osworld', modelId: 'gemini-3-pro', score: 58.5 },
  { benchmarkId: 'osworld', modelId: 'claude-4-opus', score: 62.0 },

  // EnigmaEval
  { benchmarkId: 'enigma_eval', modelId: 'claude-3-5-sonnet', score: 0.91 },
  { benchmarkId: 'enigma_eval', modelId: 'gpt-4o', score: 0.80 },
  { benchmarkId: 'enigma_eval', modelId: 'o1', score: 5.65 },
  { benchmarkId: 'enigma_eval', modelId: 'gemini-2-0-pro-exp', score: 0.69 },
  { benchmarkId: 'enigma_eval', modelId: 'gpt-4-5', score: 3.18 },
  { benchmarkId: 'enigma_eval', modelId: 'claude-3-7-sonnet', score: 4.23 },
  { benchmarkId: 'enigma_eval', modelId: 'o3', score: 13.09 },

  // GDPval
  { benchmarkId: 'gdpval', modelId: 'gpt-4o', score: 12.5 },
  { benchmarkId: 'gdpval', modelId: 'o1', score: 20.0 },
  { benchmarkId: 'gdpval', modelId: 'o3-mini', score: 29.1 },
  { benchmarkId: 'gdpval', modelId: 'o3', score: 35.2 },
  { benchmarkId: 'gdpval', modelId: 'gemini-2-5-pro', score: 38.0 },
  { benchmarkId: 'gdpval', modelId: 'claude-4-opus', score: 42.0 },
];
