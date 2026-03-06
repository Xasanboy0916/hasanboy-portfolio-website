import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Python: "bg-green-500",
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Xasanboy0916/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2">My work</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card rounded-xl p-6 h-48 animate-pulse">
                <div className="h-4 bg-muted rounded w-2/3 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-4/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow group"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {repo.description || "No description provided."}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || "bg-muted-foreground"}`} />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full gap-2">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      View on GitHub <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
