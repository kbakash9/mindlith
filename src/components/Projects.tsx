import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up">
            PORTFOLIO
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground animate-fade-up delay-100">
            Featured Project
          </h2>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-up delay-200">
          <div className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-card transition-all duration-500">
            {/* Project Preview */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <span className="font-heading font-bold text-3xl text-primary">
                    H
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Hotel Website
                </h3>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                    Hotel Website
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    UI Design & Development
                  </p>
                </div>
                <button className="p-2 bg-secondary rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <ExternalLink size={18} />
                </button>
              </div>

              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                A clean, modern hotel website design focusing on user experience
                and beautiful layouts. Built with attention to responsive design
                and intuitive navigation.
              </p>

              <div className="flex flex-wrap gap-2">
                {["UI Design", "Responsive", "Modern Layout"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
