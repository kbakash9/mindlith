const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Figma", level: 80 },
  { name: "Canva", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up text-sm tracking-widest uppercase">
            My Skills
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground animate-fade-up delay-100">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card rounded-2xl p-6 glow-border animate-fade-up delay-${(index + 2) * 100}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-semibold text-foreground">{skill.name}</span>
                <span className="font-body text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 shadow-[var(--glow-primary)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pill badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-up delay-700">
          {["Responsive Design", "Git", "VS Code", "UI/UX", "Web Performance", "SEO Basics"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 glass-card text-sm font-body rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
