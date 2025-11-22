'use server';

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {genkitEval, GenkitMetric} from '@genkit-ai/evaluator';
import {dotprompt} from '@genkit-ai/dotprompt';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
    genkitEval({
      judge: 'googleai/gemini-1.5-flash',
      metrics: [GenkitMetric.Faithfulness, GenkitMetric.AnswerRelevancy],
      embedder: 'googleai/text-embedding-004',
    }),
    dotprompt(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
