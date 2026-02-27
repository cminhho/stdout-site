import { Github, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-foreground">stdout</span>
          <span className="text-muted-foreground text-xs">· MIT License</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://stdout-tools.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            App
          </a>
          <a
            href="https://github.com/cminhho/stdout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
