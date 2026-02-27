import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-1 px-1.5 py-1.5 rounded-2xl glass-surface-strong max-w-fit"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-accent/50 transition-colors"
        >
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="stdout logo" className="w-5 h-5" />
          <span className="font-bold text-sm tracking-tight text-foreground">stdout</span>
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-border/50 mx-1 hidden sm:block" />

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-0.5">
          <a
            href="#tools"
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all"
          >
            Tools
          </a>
          <a
            href="#get-started"
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-border/50 mx-1 hidden sm:block" />

        {/* Actions */}
        <div className="flex items-center gap-0.5">
          <a
            href="https://github.com/cminhho/stdout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <div className="px-1">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
