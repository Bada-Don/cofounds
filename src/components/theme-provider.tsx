"use client";

import * as React from "react";

type Theme = "dark" | "light";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  triggerRipple: (x: number, y: number) => void;
}

interface RippleState {
  isActive: boolean;
  x: number;
  y: number;
  key: number;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "cofounds-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [ripple, setRipple] = React.useState<RippleState>({
    isActive: false,
    x: 0,
    y: 0,
    key: 0
  });

  // Initialize theme from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored === "light" || stored === "dark") {
        setThemeState(stored);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(stored);
      } else {
        document.documentElement.classList.add(defaultTheme);
      }
    } catch {
      document.documentElement.classList.add(defaultTheme);
    }
  }, [defaultTheme, storageKey]);

  // Apply theme to document root when it changes
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const triggerRipple = React.useCallback((x: number, y: number) => {
    setRipple({ isActive: true, x, y, key: Date.now() });
    // Reset ripple after animation
    setTimeout(() => {
      setRipple(prev => ({ ...prev, isActive: false }));
    }, 900);
  }, []);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore localStorage errors
      }
      setThemeState(newTheme);
    },
    [storageKey]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, triggerRipple }}>
      {children}
      {/* Theme Ripple Effect Overlay */}
      {ripple.isActive && (
        <div
          key={ripple.key}
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        >
          <div
            className="absolute rounded-full theme-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
