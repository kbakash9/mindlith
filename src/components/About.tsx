import { GraduationCap, Code, Palette } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up text-sm tracking-widest uppercase">
            About Me
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground animate-fade-up delay-100">
            Designing Solutions,
            <br />
            <span className="text-gradient">Not Just Visuals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image */}
          <div className="animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl overflow-hidden glow-border">
                <img
                  src={profileImage}
                  alt="Akashraj"
                  className="w-full h-80 md:h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="animate-fade-up delay-300">
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a passionate Frontend UI Developer and Website Designer with a
              keen eye for creating clean, modern, and user-friendly digital
              experiences. I believe in the power of thoughtful design and clean
              code to solve real problems.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Currently pursuing Computer Science, I spend my time building
              beautiful websites and learning new technologies to stay at the
              forefront of web development.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Frontend Development", desc: "Building responsive, performant websites with modern technologies", color: "primary" },
            { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive interfaces that users love to interact with", color: "accent" },
            { icon: GraduationCap, title: "Student", desc: "Computer Science at Sanjay Gandhi Polytechnic (Graduating 2026)", color: "primary" },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 glass-card rounded-2xl glow-border hover:-translate-y-2 transition-all duration-500 animate-fade-up delay-${(index + 4) * 100}`}
            >
              <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${item.color}/20 group-hover:shadow-[var(--glow-${item.color === 'primary' ? 'primary' : 'accent'})] transition-all duration-300`}>
                <item.icon className={`text-${item.color}`} size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
