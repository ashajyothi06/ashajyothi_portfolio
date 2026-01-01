import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import aboutImage from "@/assets/about.png";

const Hero = () => {
  const roles = ["Full-Stack Developer", "AI Engineer"];
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
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Light gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, hsla(280, 60%, 85%, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 30% 60%, hsla(220, 70%, 90%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 50% 100%, hsla(260, 50%, 92%, 0.5) 0%, transparent 60%),
            linear-gradient(135deg, hsl(260, 30%, 98%) 0%, hsl(260, 25%, 95%) 50%, hsl(280, 20%, 96%) 100%)
          `,
        }}
      />

      {/* Subtle orbs */}
      <div
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl float-animation"
        style={{
          background:
            "radial-gradient(circle, hsla(260, 60%, 80%, 0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl float-animation"
        style={{
          background:
            "radial-gradient(circle, hsla(200, 70%, 85%, 0.15) 0%, transparent 70%)",
          animationDelay: "-3s",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div className="space-y-6">
            <motion.div variants={slideInLeft}>
              <p className="text-primary font-medium text-lg">Hi, I am</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground whitespace-nowrap">
                Ashajyothi <span className="text-gradient">Velpula</span>
              </h1>
            </motion.div>

            <motion.div
              variants={slideInUp}
              className="flex items-center space-x-2 text-xl md:text-2xl h-10 text-foreground"
            >
              <span>I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary font-bold"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={slideInUp}
              className="text-lg text-muted-foreground max-w-lg"
            >
              A motivated and versatile software developer with expertise in
              AI/ML and full-stack development. I build production-ready
              applications that solve real-world problems.
            </motion.p>

            <motion.div variants={slideInUp} className="flex flex-wrap gap-3">
              {["Full-stack Developer", "AI & ML", "Cloud & DevOps"].map(
                (tag) => (
                  <Badge key={tag} variant="secondary" className="px-4 py-2">
                    {tag}
                  </Badge>
                )
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={slideInUp} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1bhYeCkTwaCGoP3WFA3K4nQ6TIa5wTi1j/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Check Resume
                </a>
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={slideInUp} className="flex space-x-4 pt-4">
              <a
                href="https://github.com/ashajyothi06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashajyothi-velpula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ashajyothivelpula0506@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          {/* Circular Image */}
          <motion.div variants={imageVariants} className="flex justify-center">
            <div className="relative">
              {/* Glow effect behind image */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{
                  background: "radial-gradient(circle, hsl(265, 85%, 70%) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={aboutImage}
                  alt="Ashajyothi Velpula"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
