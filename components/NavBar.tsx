
"use client";
import Link from "next/link";
import { Github, Linkedin, FileText, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Publications", href: "/publications" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-bg/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-heading text-xl font-bold tracking-tighter text-accent">
            EGO
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-2 transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-text-2 hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-2 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-2 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <Link
            href="/resume.pdf"
            className="hidden sm:flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
          >
            <FileText size={16} />
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
