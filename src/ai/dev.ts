import { config } from 'dotenv';
config({ path: '.env.local' });

import '@/ai/flows/send-confirmation-sms.ts';
