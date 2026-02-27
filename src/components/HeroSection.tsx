import { motion } from "framer-motion";
import { Github, ArrowRight, Monitor, Apple } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 liquid-mesh" />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-xs text-muted-foreground font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
            v1.1.7 · Open Source · MIT License
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 text-gradient-primary leading-[1.1]"
        >
          stdout
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-4 font-light leading-relaxed"
        >
          Your standard output for dev tools.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-muted-foreground/70 max-w-md mx-auto mb-6"
        >
          Format, convert, encode, generate — all in one place.
          <br />
          No backend. Everything runs locally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-2 text-xs text-muted-foreground/50 mb-8 font-mono"
        >
          <span className="inline-flex items-center gap-1"><Monitor className="w-3 h-3" /> Web</span>
          <span className="opacity-30">·</span>
          <span className="inline-flex items-center gap-1"><Apple className="w-3 h-3" /> macOS</span>
          <span className="opacity-30">·</span>
          <span>Windows</span>
          <span className="opacity-30">·</span>
          <span>Linux</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 sm:mb-20"
        >
          <a
            href="https://stdout-tools.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Try Online
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/cminhho/stdout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass-surface text-foreground font-medium text-sm hover:border-primary/30 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl opacity-60 pointer-events-none" />
          
          {/* Glass frame */}
          <div className="relative rounded-2xl glass-surface-strong overflow-hidden p-1.5 shadow-2xl">
            {/* Top bar mimicking macOS window */}
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(38_92%_50%/0.7)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142_71%_45%/0.7)]" />
            </div>
            <img
              src="/images/stdout-screenshot.png"
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
