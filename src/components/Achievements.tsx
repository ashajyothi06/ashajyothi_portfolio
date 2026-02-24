import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Award, Code, GitBranch, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "CodeChef Rating: 1712",
      description: "Strong problem-solving in Data Structures & Algorithms",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "Flipkart Grid 7.0",
      description: "National Semi-Finalist in one of India's largest tech competitions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Semi-Finalist Convolve 4.0 GenAI Track",
      description: "2026 Pan-IIT Hackathon GenAI Track Semi-Finalist",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: Award,
      title: "Top 10 - Code Clash",
      description: "IEEE-TEMS VIT Vellore coding competition",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GitBranch,
      title: "Hacktoberfest 2023 Contributor",
      description: "Multiple PRs merged in open-source repositories",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Medal,
      title: "CodeKaze 2023",
      description: "Ranked 29,803 / 1.45L participants (Coding Ninjas)",
      color: "from-red-500 to-rose-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            <span className="text-gradient">Achievements</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my coding journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}
                    style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <achievement.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground mt-1">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;