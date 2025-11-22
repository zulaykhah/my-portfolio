
import {z} from 'genkit';

export const ResumeInformationInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be processed.'),
});
export type ResumeInformationInput = z.infer<
  typeof ResumeInformationInputSchema
>;

export const ResumeInformationOutputSchema = z.object({
  experience: z
    .array(z.string())
    .describe('Work experience extracted from the resume.'),
  education: z
    .array(z.string())
    .describe('Education history extracted from the resume.'),
  skills: z.array(z.string()).describe('Skills extracted from the resume.'),
});
export type ResumeInformationOutput = z.infer<
  typeof ResumeInformationOutputSchema
>;
