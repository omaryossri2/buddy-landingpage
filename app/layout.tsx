import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Buddy — Your time, money, and tasks in one quiet place.',
  description:
    'Buddy is a calm personal AI that plans your week, watches your spending, and answers in plain English. No streaks. No ads. No noise.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
