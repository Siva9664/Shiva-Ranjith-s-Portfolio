import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/cursor/CustomCursor';

export const metadata: Metadata = {
  title: 'Sivaranjith S | AI Engineer & Full-Stack Developer',
  description:
    'AI/ML engineer and full-stack developer specializing in intelligent systems, neural networks, and scalable web applications. B.Tech AI & ML at SSIET.',
  keywords: ['AI Engineer', 'Machine Learning', 'Full Stack Developer', 'React', 'Python', 'Portfolio'],
  authors: [{ name: 'Sivaranjith S' }],
  openGraph: {
    title: 'Sivaranjith S | AI Neural OS Portfolio',
    description: 'An immersive AI-powered digital experience by Sivaranjith S',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
