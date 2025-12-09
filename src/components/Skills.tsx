import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Brain, 
  Wrench,
  Database,
  Shield,
  Zap,
  Cloud
} from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "WebSockets", "Microservices"]
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["Python", "NLP", "Computer Vision", "TensorFlow", "Model Deployment", "Deep Learning"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "Render", "Vercel", "Git", "GitHub", "CI/CD"]
    },
    {
      title: "Other Skills",
      icon: Shield,
      skills: ["API Integration", "JWT Auth", "System Design", "MQTT", "Socket.io"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build production-ready applications
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="px-3 py-1.5 text-sm border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Zap, label: "Fast Learner" },
            { icon: Shield, label: "Security Focused" },
            { icon: Code2, label: "Clean Code" },
            { icon: Brain, label: "Problem Solver" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full glass-effect border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;