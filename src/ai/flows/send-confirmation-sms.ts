'use server';

/**
 * @fileOverview A flow for sending appointment confirmation SMS messages via Twilio.
 *
 * - sendConfirmationSms - A function that sends an SMS.
 * - SendConfirmationSmsInput - The input type for the sendConfirmationSms function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Twilio } from 'twilio';

const SendConfirmationSmsInputSchema = z.object({
  to: z.string().describe("The recipient's phone number."),
  body: z.string().describe('The content of the SMS message.'),
});
export type SendConfirmationSmsInput = z.infer<
  typeof SendConfirmationSmsInputSchema
>;


async function doSendConfirmationSms(input: SendConfirmationSmsInput) {
  const { to, body } = input;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !from) {
    const errorMsg =
      'Twilio credentials are not configured in .env.local. Skipping SMS.';
    console.warn(errorMsg);
    // We don't want to block the user flow if SMS fails, so we just log a warning.
    return { success: false, message: errorMsg };
  }

  const client = new Twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body,
      from,
      to,
    });
    console.log(`SMS sent successfully. SID: ${message.sid}`);
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('Failed to send SMS:', error);
    // We don't want to block the user flow if SMS fails.
    return { success: false, message: (error as Error).message };
  }
}

// This is not a real flow, but a wrapper around the Twilio client for now.
// It's defined as a flow to keep the architecture consistent.
export const sendConfirmationSms = ai.defineFlow(
  {
    name: 'sendConfirmationSms',
    inputSchema: SendConfirmationSmsInputSchema,
    outputSchema: z.any(),
  },
  async (input) => doSendConfirmationSms(input)
);
