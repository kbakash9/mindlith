const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-heading font-bold text-lg text-foreground">
          Akashraj<span className="text-primary">.</span>
        </a>

        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akashraj. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
