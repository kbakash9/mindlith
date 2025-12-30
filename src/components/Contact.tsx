import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center animate-fade-up">
            <Mail className="text-primary" size={28} />
          </div>

          <p className="font-body text-primary font-medium mb-2 animate-fade-up delay-100">
            GET IN TOUCH
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 animate-fade-up delay-200">
            Got a Project? Let's Talk
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 animate-fade-up delay-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <a
            href="mailto:akashraj7899860@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up delay-400"
          >
            <span>akashraj7899860@gmail.com</span>
            <ArrowRight size={18} />
          </a>

          <p className="font-body text-muted-foreground text-sm mt-8 animate-fade-up delay-500">
            Looking forward to creating something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
