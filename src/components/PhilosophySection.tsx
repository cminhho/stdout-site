import { motion } from "framer-motion";
import { Shield, Zap, Puzzle, Scale } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "No server, no tracking, no data leaves your browser. Your code stays yours.",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description: "Minimal dependencies. Fast loading. Instant results.",
  },
  {
    icon: Puzzle,
    title: "Modular",
    description: "Each tool is isolated and independently extendable.",
  },
  {
    icon: Scale,
    title: "Open Source",
    description: "MIT licensed. Free to use, modify, and distribute.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="relative py-24 px-6 border-t border-border/50">
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Built for trust
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Privacy, performance, and extensibility — by design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-card"
            >
              <div className="w-10 h-10 rounded-xl glass-surface flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
