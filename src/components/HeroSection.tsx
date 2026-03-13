import { motion } from "framer-motion";
import { ArrowDown, FileDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm mb-4 tracking-wider">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Hasanboy Mukhtorov</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Front-End Developer
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg">
            I create modern, fast and responsive web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#projects">
              View Projects <ArrowDown size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="#contact">
              Contact Me <Send size={16} />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
