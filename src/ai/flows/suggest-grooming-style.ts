// src/ai/flows/suggest-grooming-style.ts
'use server';

/**
 * @fileOverview AI-powered grooming style suggestions based on dog breed and owner preferences.
 *
 * - suggestGroomingStyle - A function that suggests grooming styles.
 * - SuggestGroomingStyleInput - The input type for the suggestGroomingStyle function.
 * - SuggestGroomingStyleOutput - The return type for the suggestGroomingStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestGroomingStyleInputSchema = z.object({
  dogBreed: z.string().describe('The breed of the dog.'),
  ownerPreferences: z
    .string()
    .describe('The owner\u0027s preferences for the grooming style.'),
});
export type SuggestGroomingStyleInput = z.infer<typeof SuggestGroomingStyleInputSchema>;

const SuggestGroomingStyleOutputSchema = z.object({
  suggestedStyle: z
    .string()
    .describe('The AI-suggested grooming style for the dog.'),
  reasoning: z.string().describe('The AI\u0027s reasoning for the suggestion.'),
});
export type SuggestGroomingStyleOutput = z.infer<typeof SuggestGroomingStyleOutputSchema>;

export async function suggestGroomingStyle(
  input: SuggestGroomingStyleInput
): Promise<SuggestGroomingStyleOutput> {
  return suggestGroomingStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestGroomingStylePrompt',
  input: {schema: SuggestGroomingStyleInputSchema},
  output: {schema: SuggestGroomingStyleOutputSchema},
  prompt: `You are a professional dog groomer. Based on the dog breed and owner\u0027s preferences, suggest a suitable grooming style and explain your reasoning.

Dog Breed: {{{dogBreed}}}
Owner Preferences: {{{ownerPreferences}}}

Grooming Style Suggestion:`,
});

const suggestGroomingStyleFlow = ai.defineFlow(
  {
    name: 'suggestGroomingStyleFlow',
    inputSchema: SuggestGroomingStyleInputSchema,
    outputSchema: SuggestGroomingStyleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
