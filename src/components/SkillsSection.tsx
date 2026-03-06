import { motion } from "framer-motion";
import { Code, Palette, GitBranch, Database, Terminal, Layout } from "lucide-react";

const frontendSkills = [
  { name: "HTML", level: 90, icon: <Layout size={18} /> },
  { name: "CSS", level: 85, icon: <Palette size={18} /> },
  { name: "JavaScript", level: 80, icon: <Terminal size={18} /> },
  { name: "React", level: 75, icon: <Code size={18} /> },
  { name: "TailwindCSS", level: 85, icon: <Palette size={18} /> },
];

const tools = [
  { name: "Git", icon: <GitBranch size={28} /> },
  { name: "GitHub", icon: <Code size={28} /> },
  { name: "Supabase", icon: <Database size={28} /> },
  { name: "VS Code", icon: <Terminal size={28} /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-accent">{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <motion.div
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 cursor-default hover:shadow-lg transition-shadow"
                >
                  <span className="text-accent">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
