import { motion } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="text-accent" size={24} />,
    title: "Clean Code",
    text: "Writing clean, maintainable code with modern best practices and attention to detail.",
  },
  {
    icon: <Sparkles className="text-accent" size={24} />,
    title: "Modern Tech",
    text: "Always learning and adopting the latest frontend technologies and frameworks.",
  },
  {
    icon: <Zap className="text-accent" size={24} />,
    title: "Performance",
    text: "Building fast, optimized applications that deliver great user experiences.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
        >
          I'm a passionate Front-End Developer who loves turning ideas into beautiful, 
          functional web experiences. I enjoy learning modern frontend technologies like 
          React and TailwindCSS, and I'm constantly building real-world projects to sharpen 
          my skills. My goal is to create applications that are not only visually appealing 
          but also performant and accessible.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
