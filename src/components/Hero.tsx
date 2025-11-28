import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-primary font-medium text-lg">Hi, I am</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ashajyothi <span className="text-gradient">Velpula</span>
              </h1>
              <div className="flex items-center space-x-2 text-xl md:text-2xl text-muted-foreground">
                <span>I am a</span>
                <span className="text-primary font-semibold">Full Stack Developer</span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A motivated and versatile software developer with expertise in AI/ML and full-stack development. 
              I build production-ready applications that solve real-world problems with cutting-edge technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Code2 className="h-3 w-3 mr-1" />
                Full-stack Developer
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                AI & ML
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Cloud & DevOps
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:glow-primary group"
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4 mr-2" />
                Check Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="mailto:ashajyothi@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 rounded-full gradient-primary p-1"
              >
                <div className="w-full h-full rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face" 
                    alt="Ashajyothi Velpula"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute inset-0 rounded-full glow-primary opacity-30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;