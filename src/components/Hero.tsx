import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 md:pt-20 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blob top right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        {/* Accent blob bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        {/* Small decorative dots */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-500" />
        
        {/* Squiggly decorative line */}
        <svg className="absolute top-32 right-20 w-24 h-24 text-primary/30 hidden lg:block animate-float" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q 25 30, 40 50 T 70 50 T 100 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        </svg>
        
        {/* Decorative circles */}
        <svg className="absolute bottom-40 right-32 w-16 h-16 text-accent/40 hidden lg:block" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="10 5"/>
        </svg>
      </div>

      <div className="container-max w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-1 animate-scale-in">
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDuration: '8s' }} />
              
              {/* Soft glow behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden ring-4 ring-card shadow-2xl group-hover:shadow-primary/30 transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Akashraj - Frontend UI Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating badge - Projects */}
              <div className="absolute -right-4 top-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground leading-none">5+</p>
                    <p className="font-body text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-2 w-10 h-10 bg-primary rounded-2xl rotate-12 animate-float shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-xl -rotate-12 animate-float shadow-lg" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/60 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2 text-center md:text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-body text-sm text-foreground font-medium">Available for freelance</span>
            </div>
            
            <p className="font-body text-muted-foreground text-lg md:text-xl mb-3 animate-fade-up delay-100">
              Hi, I'm Akashraj 👋
            </p>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 animate-fade-up delay-200">
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Frontend UI</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 6 Q 50 0, 100 6 T 200 6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              <span className="text-foreground">Developer</span>
              <br />
              <span className="text-accent">&</span>{" "}
              <span className="text-foreground">Website</span>
              <br className="md:hidden" />
              <span className="text-foreground"> Designer</span>
            </h1>
            
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mb-8 animate-fade-up delay-300 leading-relaxed">
              I design and build clean, modern websites with a human touch.
              Crafting digital experiences that feel natural and look stunning.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-400">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground font-heading font-semibold rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
            
            {/* Tech stack preview */}
            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-3 animate-fade-up delay-500">
              <span className="font-body text-sm text-muted-foreground">Tech I use:</span>
              {["React", "JavaScript", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-body rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
