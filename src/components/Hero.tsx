import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import aboutImage from "@/assets/about.jpeg";

const Hero = () => {
  const roles = ["Full-Stack Developer", "AI Engineer", "Problem Solver"];
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
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={slideInUp}>
              <Badge 
                className="px-4 py-2 text-sm font-medium glass-effect border-primary/20 text-foreground"
              >
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                Available for opportunities
              </Badge>
            </motion.div>

            <motion.div variants={slideInLeft} className="space-y-2">
              <p className="text-primary font-medium text-lg tracking-wide">Hi, I am</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ashajyothi{" "}
                <span className="text-gradient relative">
                  Velpula
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 rounded-full gradient-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={slideInUp}
              className="flex items-center gap-3 text-xl md:text-2xl h-12"
            >
              <span className="text-muted-foreground">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="text-primary font-bold cursor-blink"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={slideInUp}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              A motivated and versatile software developer with expertise in
              AI/ML and full-stack development. I build{" "}
              <span className="text-foreground font-medium">production-ready applications</span>{" "}
              that solve real-world problems.
            </motion.p>

            <motion.div variants={slideInUp} className="flex flex-wrap gap-3">
              {["Full-stack Developer", "AI & ML", "Cloud & DevOps"].map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm glass-effect border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={slideInUp} className="flex flex-wrap gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="btn-premium text-primary-foreground px-8 py-6 text-base font-medium rounded-xl"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-medium rounded-xl border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1bhYeCkTwaCGoP3WFA3K4nQ6TIa5wTi1j/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Check Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInUp} className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/ashajyothi06", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ashajyothi-velpula/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ashajyothivelpula0506@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass-effect border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -inset-16 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
              </motion.div>

              <div className="absolute inset-0 rounded-full blur-3xl opacity-40 gradient-primary scale-110" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-effect-strong p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={aboutImage}
                      alt="Ashajyothi Velpula"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg"
                />
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl glass-effect border-primary/30 flex items-center justify-center shadow-elevated"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
