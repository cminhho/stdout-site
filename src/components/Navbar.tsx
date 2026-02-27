import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface-strong">
      <div className="container max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-sm tracking-tight">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="stdout logo" className="w-5 h-5" />
          <span className="text-foreground">stdout</span>
        </Link>

        <div className="flex items-center gap-5">
          <a href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Tools
          </a>
          <a href="#get-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Get Started
          </a>
          <a
            href="https://github.com/cminhho/stdout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
