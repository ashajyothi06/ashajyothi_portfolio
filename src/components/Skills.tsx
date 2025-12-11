import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Brain, 
  Database,
  Cloud,
  Wrench,
  Zap,
  Shield
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
      title: "Programming",
      icon: Code2,
      skills: ["C", "C++", "Python", "Java", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React.js", "HTML5", "CSS3", "Responsive UI Development", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST API Integration", "Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "Computer Vision (OpenCV)", "Edge ML", "NLP"],
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS EKS", "Git", "CI/CD Pipelines", "Render"],
      color: "from-yellow-500 to-orange-500"
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
              <Card className="h-full glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${category.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
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