import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 md:pt-20 relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        {/* Orbiting particles */}
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full animate-orbit opacity-60" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-orbit opacity-40" style={{ animationDuration: '15s', animationDelay: '5s' }} />
      </div>

      <div className="container-max w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-body text-sm text-muted-foreground font-medium">Available for freelance</span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6 animate-fade-up delay-100">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="text-gradient">Akashraj</span>
            </h1>

            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mb-10 animate-fade-up delay-200 leading-relaxed">
              Frontend Developer & UI Designer crafting immersive digital
              experiences with clean code and bold design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-300">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:shadow-[var(--glow-primary)] hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card text-foreground font-heading font-semibold rounded-full hover:border-primary/50 hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                About Me
              </a>
            </div>

            {/* Tech stack */}
            <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 animate-fade-up delay-400">
              <span className="font-body text-sm text-muted-foreground">Tech I use:</span>
              {["React", "JavaScript", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 glass-card text-sm font-body rounded-lg text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-scale-in">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-700" />

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[var(--shadow-profile)] group-hover:ring-primary/60 transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Akashraj - Frontend UI Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating elements */}
              <div className="absolute -right-4 top-10 glass-card rounded-2xl px-4 py-3 animate-float glow-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-primary text-lg">✦</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground leading-none">5+</p>
                    <p className="font-body text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-6 glass-card rounded-2xl px-4 py-3 animate-float glow-border" style={{ animationDelay: '1.5s' }}>
                <p className="font-heading font-bold text-sm text-primary">Frontend Dev</p>
                <p className="font-body text-xs text-muted-foreground">& Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
