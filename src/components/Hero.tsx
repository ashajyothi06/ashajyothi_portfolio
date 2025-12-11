import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import developerIllustration from "@/assets/developer-illustration.png";

const Hero = () => {
  const roles = ["Full-Stack Engineer", "AI Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl float-animation" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Enhanced Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Secondary finer grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '15px 15px'
      }} />
      
      {/* Radial fade for grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={slideInLeft} className="space-y-2">
              <p className="text-primary font-medium text-lg tracking-wide">Hi, I am</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Ashajyothi{" "}
                <span className="text-gradient">Velpula</span>
              </h1>
            </motion.div>

            <motion.div 
              variants={slideInUp}
              className="flex items-center space-x-2 text-xl md:text-2xl text-muted-foreground h-10"
            >
              <span>I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary font-bold glow-text"
                  style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={slideInUp} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A motivated and versatile software developer with expertise in AI/ML and full-stack development. 
              I build production-ready applications that solve real-world problems with cutting-edge technology.
            </motion.p>

            <motion.div variants={slideInUp} className="flex flex-wrap gap-3">
              {["Full-stack Developer", "AI & ML", "Cloud & DevOps"].map((tag, index) => (
                <Badge 
                  key={tag}
                  variant="secondary" 
                  className="text-sm px-4 py-2 neon-border bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={slideInUp} className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:glow-primary group transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary neon-border hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                <Download className="h-4 w-4 mr-2" />
                Check Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={slideInUp} className="flex items-center space-x-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/ashajyothi06", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ashajyothi@example.com", label: "Email" }
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:text-primary hover:bg-primary/10 transition-all duration-300" 
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Illustration with themed background */}
          <motion.div 
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md lg:max-w-lg">
              {/* Themed circular background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl animate-pulse" />
              </div>
              
              {/* Inner glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full border border-primary/30 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
              </div>
              
              {/* Grid pattern behind character */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="w-[400px] h-[400px] rounded-full opacity-30" style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                  maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                }} />
              </div>
              
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img 
                  src={developerIllustration} 
                  alt="Developer Illustration"
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                />
              </motion.div>
              
              {/* Neon accent lines */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-sm opacity-60" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center neon-border"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;