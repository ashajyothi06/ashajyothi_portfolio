import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap } from "lucide-react";

const VolunteerExperience = () => {
  const experiences = [
    {
      icon: Heart,
      role: "Contributor",
      organization: "Hacktoberfest'23",
      description: "Contributed fixes, features, and documentation across multiple open-source projects during the month-long celebration of open source.",
      tags: ["Open Source", "Git", "Collaboration"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      role: "Mentor",
      organization: "GirlScript Summer of Code",
      description: "Reviewed pull requests, guided new contributors, and supported project development to help beginners get started with open source.",
      tags: ["Mentorship", "Code Review", "Community"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: GraduationCap,
      role: "Graduate",
      organization: "PwC Launchpad Program",
      description: "Completed comprehensive training in IT Fundamentals, RDBMS, Java OOP, SAP & Salesforce as part of the professional development program.",
      tags: ["Java", "RDBMS", "SAP", "Salesforce"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="volunteer" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
            <span className="text-gradient">Volunteer Experience</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Giving back to the developer community
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
                    >
                      <exp.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="px-3 py-1 text-xs border-primary/30 text-foreground hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerExperience;