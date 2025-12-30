import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 md:pt-20"
    >
      <div className="container-max w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-1 animate-scale-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-profile">
                <img
                  src={profileImage}
                  alt="Akashraj - Frontend UI Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-float delay-500" />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2 text-center md:text-left">
            <p className="font-body text-muted-foreground text-lg mb-4 animate-fade-up">
              Hi, I'm Akashraj,
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up delay-100">
              <span className="text-primary">Frontend UI</span>
              <br />
              <span className="text-foreground">Developer</span>
              <br />
              <span className="text-accent">&</span>{" "}
              <span className="text-foreground">Website Designer</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mb-8 animate-fade-up delay-200">
              I design and build clean, modern websites with a human touch.
              Crafting digital experiences that feel natural and look stunning.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up delay-300"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
