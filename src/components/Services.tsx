import { Monitor, Smartphone, Layout } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description:
      "Creating beautiful, modern websites that capture your brand's essence and engage your audience.",
  },
  {
    icon: Layout,
    title: "Modern UI",
    description:
      "Building clean, intuitive user interfaces with a focus on aesthetics and usability.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description:
      "Ensuring your website looks and works perfectly on all devices, from mobile to desktop.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="font-body text-primary font-medium mb-2 animate-fade-up">
            SERVICES
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground animate-fade-up delay-100">
            What I Can Do For You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center animate-fade-up delay-${
                (index + 2) * 100
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  size={28}
                />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
