'use server';

/**
 * @fileOverview This flow extracts key information from a resume document.
 *
 * - extractResumeInformation - Extracts information from resume text.
 */

import {ai} from '@/ai/genkit';
import {
  ResumeInformationInputSchema,
  ResumeInformationOutputSchema,
  type ResumeInformationInput,
  type ResumeInformationOutput,
} from './resume-information-extraction.types';

export async function extractResumeInformation(
  input: ResumeInformationInput
): Promise<ResumeInformationOutput> {
  return extractResumeInformationFlow(input);
}

const resumeInformationExtractionPrompt = ai.definePrompt({
  name: 'resumeInformationExtractionPrompt',
  input: {schema: ResumeInformationInputSchema},
  output: {schema: ResumeInformationOutputSchema},
  prompt: `You are an expert resume parser. Extract the work experience, education history, and skills from the following resume text.

Resume Text: {{{resumeText}}}

Return the extracted information in a structured JSON format.
`,
});

const extractResumeInformationFlow = ai.defineFlow(
  {
    name: 'extractResumeInformationFlow',
    inputSchema: ResumeInformationInputSchema,
    outputSchema: ResumeInformationOutputSchema,
  },
  async input => {
    const {output} = await resumeInformationExtractionPrompt(input);
    return output!;
  }
);
