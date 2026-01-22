import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-text-2">
              © {new Date().getFullYear()} Emiliano Garcia. Built with Next.js & Tailwind.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:emiliano.gar.och@gmail.com"
              className="flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emiliano-garcia-ochoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
