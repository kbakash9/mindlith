import { GraduationCap, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up">
            ABOUT ME
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground animate-fade-up delay-100">
            Designing Solutions,
            <br />
            <span className="text-muted-foreground">Not Just Visuals</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-lg text-center leading-relaxed mb-12 animate-fade-up delay-200">
            I'm a passionate Frontend UI Developer and Website Designer with a
            keen eye for creating clean, modern, and user-friendly digital
            experiences. I believe in the power of thoughtful design and clean
            code to solve real problems.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-2xl border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-up delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Frontend Development
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Building responsive, performant websites with modern
                technologies
              </p>
            </div>

            <div className="p-6 bg-background rounded-2xl border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-up delay-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Palette className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                UI/UX Design
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Creating intuitive interfaces that users love to interact with
              </p>
            </div>

            <div className="p-6 bg-background rounded-2xl border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-up delay-400">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Student
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Computer Science at Sanjay Gandhi Polytechnic (Graduating 2026)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
