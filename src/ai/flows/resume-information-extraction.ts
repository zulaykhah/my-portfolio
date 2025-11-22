'use server';

/**
 * @fileOverview This flow extracts key information from a resume document.
 *
 * - extractResumeInformation - Extracts information from resume text.
 * - ResumeInformationInput - The input type for the extractResumeInformation function.
 * - ResumeInformationOutput - The return type for the extractResumeInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeInformationInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be processed.'),
});
export type ResumeInformationInput = z.infer<typeof ResumeInformationInputSchema>;

const ResumeInformationOutputSchema = z.object({
  experience: z
    .array(z.string())
    .describe('Work experience extracted from the resume.'),
  education: z
    .array(z.string())
    .describe('Education history extracted from the resume.'),
  skills: z.array(z.string()).describe('Skills extracted from the resume.'),
});
export type ResumeInformationOutput = z.infer<typeof ResumeInformationOutputSchema>;

export async function extractResumeInformation(input: ResumeInformationInput): Promise<ResumeInformationOutput> {
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
