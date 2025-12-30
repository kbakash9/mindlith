const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Design Tools", items: ["Figma", "Canva"] },
];

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-4 py-2 bg-background border border-border rounded-full font-body text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default">
    {skill}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up">
            MY SKILLS
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground animate-fade-up delay-100">
            Tools & Technologies
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`animate-fade-up delay-${(index + 2) * 100}`}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillGroup.items.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
