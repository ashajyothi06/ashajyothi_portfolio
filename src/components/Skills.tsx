import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Brain, 
  Database,
  Cloud,
  Zap,
  Shield,
  Layers
} from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }
    }
  };

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "Java"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      title: "Gen AI",
      icon: Zap,
      skills: ["Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Embeddings", "AI Agents", "AI Workflow Design"],
      gradient: "from-pink-500 via-rose-500 to-red-500"
    },
    {
      title: "Python Libraries",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Python", "Node.js", "REST APIs", "System Integration", "MySQL"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      title: "Frontend",
      icon: Layers,
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
      gradient: "from-emerald-500 via-green-500 to-teal-500"
    },
    {
      title: "Systems & Tools",
      icon: Cloud,
      skills: ["Git", "GitHub", "Postman", "Jupyter Notebook"],
      gradient: "from-indigo-500 via-blue-500 to-sky-500"
    }
  ];

  const highlights = [
    { icon: Zap, label: "Fast Learner", description: "Quick to adapt" },
    { icon: Shield, label: "Security First", description: "Best practices" },
    { icon: Code2, label: "Clean Code", description: "Maintainable" },
    { icon: Brain, label: "Problem Solver", description: "Creative solutions" }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="orb orb-primary w-[500px] h-[500px] -top-20 -left-20 opacity-30" />
      <div className="orb orb-accent w-[400px] h-[400px] -bottom-20 -right-20 opacity-25" />

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
              <Code2 className="w-4 h-4 mr-2 text-primary" />
              Technical Expertise
            </Badge>
          </motion.div>
          <h2 className="section-title">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="section-subtitle mt-4">
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
              <Card className="h-full premium-card group">
                <div className={`h-1 bg-gradient-to-r ${category.gradient} rounded-t-2xl`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="px-3 py-1.5 text-sm glass-effect border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl glass-effect border-border/30 hover:border-primary/30 text-center group transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
