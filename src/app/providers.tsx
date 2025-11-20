'use client';

import { FirebaseClientProvider } from '@/firebase/client-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      {children}
    </FirebaseClientProvider>
  );
}
