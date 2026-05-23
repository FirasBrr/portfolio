export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © 2026 Firas Bouraoui 
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/FirasBrr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/firas-bouraoui77"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:fbouraoui77@gmail.com"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
