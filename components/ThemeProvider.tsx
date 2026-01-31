"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const ThemeContext = createContext<{
  theme: "dark" | "light";
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage or current data-theme attribute
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
    
    // Priority: localStorage > current data-theme > default dark
    const initialTheme = savedTheme || currentTheme || "dark";
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
