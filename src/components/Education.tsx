import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const courses = [
    "Data Structures",
    "Analysis Of Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "System Software"
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

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
            <span className="text-gradient">Education</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation for my technical journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-effect border-border/30 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
            {/* Gradient top border */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* University Logo/Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-xl group-hover:glow-primary transition-all duration-300">
                    <GraduationCap className="h-12 w-12 text-primary-foreground" />
                  </div>
                </motion.div>

                {/* Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      CMR Technical Campus
                    </h3>
                    <p className="text-lg text-primary font-semibold mt-1">
                      Bachelor of Technology – Computer Science and Engineering
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Hyderabad, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Nov 2022 – June 2026</span>
                    </div>
                  </div>

                  {/* GPA Badge */}
                  <div className="flex items-center gap-3">
                    <Badge className="px-4 py-2 text-lg gradient-primary text-primary-foreground font-bold">
                      GPA: 8.9
                    </Badge>
                  </div>

                  {/* Courses */}
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {courses.map((course, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="px-3 py-1.5 border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                          >
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;