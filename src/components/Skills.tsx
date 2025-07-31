import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Django", level: 80 },
        { name: "RESTful APIs", level: 88 },
        { name: "MongoDB", level: 83 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 82 },
      ],
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 88 },
        { name: "OpenCV", level: 82 },
        { name: "PyTorch", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my skills on which I have been working on for the past years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-shadow transition-smooth hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-center text-primary gradient-primary bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {skill.name}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full gradient-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"].map((lang) => (
              <Badge key={lang} variant="outline" className="px-6 py-2 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                {lang}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;