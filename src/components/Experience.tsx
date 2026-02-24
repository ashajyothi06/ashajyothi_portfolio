import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Sklassics Technologies Pvt Ltd",
      position: "Software Developer (Intern)",
      location: "Hyderabad, India",
      duration: "May 2025 - Dec 2025",
      type: "Internship",
      responsibilities: [
        "Developed and maintained React-based car rental applications, enhancing user experience with dynamic UI components and responsive designs",
        "Collaborated with cross-functional teams to integrate RESTful APIs (Node.js/Express) for real-time booking, vehicle inventory, and payment processing",
        "Enhanced UI/UX and mobile responsiveness for production web applications",
        "Worked on frontend + AI-integrated workflows by integrating API outputs from ML/LLM-driven services into UI features",
        "Collaborated cross-functionally to align delivery with backend APIs, performance, and scalability needs"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "RESTful APIs", "JavaScript", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
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
            <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full gradient-primary transform -translate-x-1/2 glow-primary z-10" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'}`}>
                <Card className="glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  {/* Gradient top border */}
                  <div className="h-1 gradient-primary" />
                  
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                          <Briefcase className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">{exp.position}</h3>
                          <p className="text-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-primary mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs border-primary/30 text-foreground hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;