'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('neuralos-theme') as Theme | null;
    if (saved) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add transition class slightly after mount to prevent transition on initial load
    const timeout = setTimeout(() => {
      root.classList.add('theme-transition');
    }, 50);

    const applyTheme = (targetTheme: 'dark' | 'light') => {
      root.setAttribute('data-theme', targetTheme);
      setResolvedTheme(targetTheme);
    };

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(systemTheme);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => applyTheme(e.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', listener);
      
      return () => {
        mediaQuery.removeEventListener('change', listener);
        clearTimeout(timeout);
      };
    } else {
      applyTheme(theme);
    }

    return () => clearTimeout(timeout);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('neuralos-theme', newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Blocking script to prevent FOUC (Flash of Unstyled Content)
export const ThemeInitScript = () => (
  <script
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: `
        try {
          const savedTheme = localStorage.getItem('neuralos-theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (savedTheme === 'light' || (savedTheme === 'system' && !prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'light');
          } else {
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        } catch (e) {}
      `,
    }}
  />
);
