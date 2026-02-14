import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hotel Website",
    category: "UI Design & Development",
    description: "A clean, modern hotel website design focusing on user experience and beautiful layouts.",
    tags: ["UI Design", "Responsive", "Modern Layout"],
    initial: "H",
  },
  {
    title: "Portfolio V1",
    category: "Personal Project",
    description: "My first portfolio website exploring minimal design patterns and smooth animations.",
    tags: ["React", "CSS", "Animation"],
    initial: "P",
  },
  {
    title: "Landing Page",
    category: "Client Work",
    description: "A conversion-focused landing page with modern aesthetics and fast performance.",
    tags: ["Figma", "HTML/CSS", "JavaScript"],
    initial: "L",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up text-sm tracking-widest uppercase">
            Portfolio
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground animate-fade-up delay-100">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card rounded-3xl overflow-hidden glow-border hover:-translate-y-3 hover:shadow-[var(--glow-primary)] transition-all duration-500 animate-fade-up delay-${(index + 2) * 100}`}
            >
              {/* Preview area */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="font-heading font-bold text-3xl text-gradient">{project.initial}</span>
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="font-body text-xs text-primary mb-1 uppercase tracking-wider">{project.category}</p>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 border border-primary/10 text-xs font-body rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
