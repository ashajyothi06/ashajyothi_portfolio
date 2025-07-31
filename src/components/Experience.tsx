import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Sklassics Technologies Pvt Ltd",
      position: "Software Developer (Intern)",
      location: "Hyderabad, India",
      duration: "May 2025 - Present",
      type: "Internship",
      responsibilities: [
        "Developed and maintained React-based car rental applications, enhancing user experience with dynamic UI components and responsive designs",
        "Collaborated with cross-functional teams to integrate RESTful APIs (Node.js/Express) for real-time booking, vehicle inventory, and payment processing",
        "Implemented modern UI/UX patterns and best practices to improve application performance and user satisfaction",
        "Worked with database systems to manage vehicle data and user information efficiently"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "RESTful APIs", "JavaScript", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow transition-smooth hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                      <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;