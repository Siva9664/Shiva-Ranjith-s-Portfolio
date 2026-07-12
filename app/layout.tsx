import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/cursor/CustomCursor';
import { ThemeProvider, ThemeInitScript } from '@/components/providers/ThemeProvider';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

export const viewport: Viewport = {
  themeColor: '#050816',
};

export const metadata: Metadata = {
  title: 'NeuralOS · Siva Ranjith — AI Engineer',
  description:
    'Siva Ranjith — AI Engineer specializing in Agentic AI, Multi-Agent Systems, Computer Vision, Robotics, LLM & RAG, and Backend Engineering. An intelligent digital experience.',
  keywords: [
    'AI Engineer', 'Agentic AI', 'Multi-Agent Systems', 'Computer Vision',
    'Robotics', 'LLM', 'RAG', 'Backend Engineer', 'Full Stack Developer',
    'NeuralOS', 'Siva Ranjith', 'Machine Learning', 'Deep Learning'
  ],
  authors: [{ name: 'Siva Ranjith' }],
  openGraph: {
    title: 'NeuralOS · Siva Ranjith — AI Engineer',
    description: 'An intelligent AI operating system portfolio by Siva Ranjith',
    type: 'website',
    siteName: 'NeuralOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralOS · Siva Ranjith — AI Engineer',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
            <ThemeSwitcher />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
