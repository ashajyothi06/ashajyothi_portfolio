import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Brain, 
  Wrench,
  Globe,
  Layers,
  Cpu,
  Database
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
    hidden: { opacity: 0, y: 20 },
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
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "WebSockets", level: "Intermediate" },
        { name: "Socket.io", level: "Intermediate" }
      ]
    },
    {
      title: "AI / ML",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Keras", level: "Intermediate" },
        { name: "OpenCV", level: "Intermediate" },
        { name: "Deep Learning", level: "Intermediate" },
        { name: "Computer Vision", level: "Intermediate" },
        { name: "NLP", level: "Beginner" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "Vercel", level: "Intermediate" },
        { name: "Render", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build production-ready applications
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-shadow transition-smooth hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 h-full group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: skill.level === "Advanced" ? "90%" : 
                                     skill.level === "Intermediate" ? "70%" : "50%" 
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Globe, label: "Web APIs" },
              { icon: Layers, label: "Microservices" },
              { icon: Cpu, label: "Edge Computing" },
              { icon: Database, label: "SQL & NoSQL" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;