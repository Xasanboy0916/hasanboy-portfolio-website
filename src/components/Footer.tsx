import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hasanboy Mukhtorov. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Xasanboy0916" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/hasanboy-mukhtor0v-8604043b3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a>
          <a href="https://t.me/XasanboyDew" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Telegram</a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
