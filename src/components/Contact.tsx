import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const contactSchema = z.object({
  from_name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  from_email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { from_name: "", from_email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message,
      }, EMAILJS_PUBLIC_KEY);

      toast({ title: "Message sent!", description: "I'll get back to you soon!" });
      form.reset();
    } catch {
      toast({ title: "Failed to send", description: "Please try again or email me directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 glass-card rounded-2xl flex items-center justify-center animate-fade-up glow-border">
              <Mail className="text-primary" size={28} />
            </div>
            <p className="font-body text-primary font-medium mb-2 animate-fade-up delay-100 text-sm tracking-widest uppercase">
              Get In Touch
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4 animate-fade-up delay-200">
              Got a Project? <span className="text-gradient">Let's Talk</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg animate-fade-up delay-300">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 glow-border animate-fade-up delay-400">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-heading font-medium text-foreground">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-muted/30 border-border/50 focus:border-primary rounded-xl transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="from_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-heading font-medium text-foreground">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-muted/30 border-border/50 focus:border-primary rounded-xl transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading font-medium text-foreground">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="bg-muted/30 border-border/50 focus:border-primary rounded-xl transition-colors min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-6 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:shadow-[var(--glow-primary)] hover:-translate-y-1 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <p className="font-body text-muted-foreground text-sm mt-8 text-center animate-fade-up delay-500">
            Or email me directly at{" "}
            <a href="mailto:akashraj7899860@gmail.com" className="text-primary hover:underline">
              akashraj7899860@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
