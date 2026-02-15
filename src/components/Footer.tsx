import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  
  { icon: Instagram, href: "https://www.instagram.com/_.akxsh_____", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="flex flex-col items-center gap-8">
          <a href="#home" className="font-heading font-bold text-2xl text-foreground">
            Akashraj<span className="text-primary">.</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:shadow-[var(--glow-primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="font-body text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Akashraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
