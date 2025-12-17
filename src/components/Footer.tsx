import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ashajyothi06", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashajyothi-velpula/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ashajyothivelpula0506@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-secondary/30" />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg"
              >
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </motion.div>
              <span className="text-2xl font-bold text-gradient">Ashajyothi Velpula</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              with AI/ML and modern web technologies. Open to internships, freelance, 
              and full-time opportunities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:ashajyothivelpula0506@gmail.com" className="hover:text-primary transition-colors">
                  ashajyothivelpula0506@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-foreground">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-primary/30 hover:border-primary hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Scroll to top */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="rounded-xl border-primary/30 hover:border-primary hover:bg-primary/20 hover:glow-primary transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/30 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              © 2024 Ashajyothi Velpula. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.span>{" "}
              and React.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full glass-effect border border-border/30">
                Available for opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;