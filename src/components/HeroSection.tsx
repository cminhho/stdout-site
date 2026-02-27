import { motion } from "framer-motion";
import { Github, ArrowRight, Monitor, Apple, Terminal } from "lucide-react";

import heroScreenshot from "@/assets/images/stdout-screenshot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[10.5rem] pb-16 sm:pt-[12.5rem] sm:pb-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 liquid-mesh" />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-surface text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-muted-foreground">v1.1.7</span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">Open Source</span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">MIT License</span>
          </div>
        </motion.div>

        {/* Headline — brand play on "standard output"; two-line for punch */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95]">
            <span className="text-gradient-primary">Your standard output</span>
            <br />
            <span className="text-foreground">for dev tools.</span>
          </h1>
        </motion.div>

        {/* Subtitle — value + proof (README: format, convert, encode, generate) */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-4 font-light leading-relaxed"
        >
          60+ tools for formatting, converting, encoding &amp; generating.
        </motion.p>

        {/* Supporting — benefits: no backend, no sign-up, local (content-creator: clear value) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground max-w-md mx-auto mb-8"
        >
          No backend. No sign-up. Everything runs locally in your browser.
        </motion.p>

        {/* Platform pills — Web, macOS, Windows, Linux (README parity) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {[
            { icon: <Monitor className="w-3.5 h-3.5" />, label: "Web" },
            { icon: <Apple className="w-3.5 h-3.5" />, label: "macOS" },
            { icon: <Terminal className="w-3.5 h-3.5" />, label: "Windows" },
            { icon: <Terminal className="w-3.5 h-3.5" />, label: "Linux" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-surface text-xs text-muted-foreground font-mono"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="https://stdout-tools.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            Try Online
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/cminhho/stdout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl glass-surface font-semibold text-sm text-foreground hover:border-primary/30 transition-all"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Glow */}
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-b from-primary/12 via-primary/5 to-transparent blur-3xl opacity-60 pointer-events-none" />

          {/* Glass frame */}
          <div className="relative rounded-2xl glass-surface-strong overflow-hidden p-1.5 shadow-2xl">
            {/* macOS traffic lights */}
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(38_92%_50%/0.7)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_71%_45%/0.7)]" />
            </div>
            <img
              src={heroScreenshot}
              alt="Stdout app overview — developer toolkit hub with sidebar and tools grid"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
