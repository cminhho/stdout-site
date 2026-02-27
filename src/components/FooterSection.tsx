import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const linkClass =
  "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-1";

const quickNavLinks = [
  { type: "link" as const, to: "/", label: "Home" },
  { type: "anchor" as const, href: "#tools", label: "Tools" },
  { type: "anchor" as const, href: "#get-started", label: "Get Started" },
  { type: "external" as const, href: "https://stdout-tools.web.app/", label: "App" },
  { type: "external" as const, href: "https://github.com/cminhho/stdout", label: "GitHub" },
];

const FooterSection = () => {
  return (
    <footer
      className="border-t border-border/50 pt-16 pb-10 px-4 sm:px-6 bg-gradient-to-r from-background via-background to-muted/20 dark:to-muted/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="container max-w-5xl mx-auto text-center"
      >
        {/* Quick Nav */}
        <nav className="mb-10" aria-label="Quick navigation">
          <h3 className="text-sm font-semibold text-foreground/90 tracking-tight mb-4">
            Quick Nav
          </h3>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            {quickNavLinks.map((item) => (
              <li key={item.label}>
                {item.type === "link" && (
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                )}
                {item.type === "anchor" && (
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                )}
                {item.type === "external" && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    aria-label={item.label === "App" ? "Open stdout app" : "View on GitHub"}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright — no opacity so contrast ≥4.5:1 in light mode */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          © {new Date().getFullYear()} stdout. Local-first dev tools · MIT License.
        </p>

        {/* Tagline — local-first, catchy */}
        <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Runs in your browser. Your data never leaves your device — no backend, no sign-up.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
