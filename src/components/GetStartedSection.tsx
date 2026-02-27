import { motion } from "framer-motion";
import { Copy, Check, Globe, Terminal, ArrowRight, Zap, Shield, HardDrive } from "lucide-react";
import { useState } from "react";

const GetStartedSection = () => {
  const [copied, setCopied] = useState(false);
  const command = "brew install --cask cminhho/tap/stdout";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="relative py-24 sm:py-32 px-4 sm:px-6 border-t border-border/50">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Get Started
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Choose how you want to use stdout. Both options are free and open source.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Option 1: Try Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl glass-card p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Try Online</h3>
                <p className="text-xs text-muted-foreground">No install required</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Use stdout directly in your browser. All tools run client-side — no data leaves your machine.
            </p>

            <div className="flex flex-col gap-2 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary/70" /> Instant access, zero setup
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary/70" /> 100% client-side processing
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary/70" /> Works on any OS with a browser
              </span>
            </div>

            <div className="mt-auto">
              <a
                href="https://stdout-tools.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Open in Browser
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Option 2: Install macOS App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl glass-card p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Install macOS App</h3>
                <p className="text-xs text-muted-foreground">Via Homebrew</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Install the native macOS app for a faster, integrated experience with system-level features.
            </p>

            <div className="flex flex-col gap-2 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-primary/70" /> Native macOS performance
              </span>
              <span className="inline-flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-primary/70" /> One-line Homebrew install
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-primary/70" /> Offline support
              </span>
            </div>

            <div className="mt-auto">
              <div className="rounded-xl glass-surface overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
                  <span className="text-xs text-muted-foreground font-mono">Terminal</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="p-4 font-mono text-xs sm:text-sm text-left">
                  <span className="text-muted-foreground">$</span>{" "}
                  <span className="text-foreground">{command}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
