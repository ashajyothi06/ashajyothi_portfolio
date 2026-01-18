import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ashajyothivelpula0506@gmail.com",
      href: "mailto:ashajyothivelpula0506@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9347350343",
      href: "tel:+919347350343",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      href: null,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ashajyothi06" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashajyothi-velpula/" },
    { icon: Mail, label: "Email", href: "mailto:ashajyothivelpula0506@gmail.com" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="orb orb-primary w-[600px] h-[600px] top-1/4 -right-40 opacity-20" />
      <div className="orb orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-6 px-4 py-2 glass-effect border-primary/20 text-foreground">
              <MessageCircle className="w-4 h-4 mr-2 text-primary" />
              Get In Touch
            </Badge>
          </motion.div>
          <h2 className="section-title">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <p className="section-subtitle mt-4">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Here's how you can reach me:
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="premium-card">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors line-hover"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                      {info.href && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl glass-effect border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl glass-effect border-green-500/30 bg-green-500/5"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-medium text-foreground">Available for new opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Currently open to internships, freelance, and full-time positions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="premium-card overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gradient-static">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      placeholder="Project Collaboration" 
                      className="rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or idea..." 
                      className="min-h-[140px] rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors resize-none" 
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button className="w-full btn-premium text-primary-foreground rounded-xl py-6 text-base font-medium">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
