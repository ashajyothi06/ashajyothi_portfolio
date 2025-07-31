import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Brain, MessageCircle, User, Globe } from "lucide-react";
import fallDetectionImg from "@/assets/fall-detection.jpg";
import actionRecognitionImg from "@/assets/action-recognition.jpg";
import chatAppImg from "@/assets/chat-app.jpg";
import chatbotImg from "@/assets/chatbot.jpg";
import portfolioImg from "@/assets/portfolio-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Fall Detection using Deep Transfer Learning",
      description: "Implemented a deep transfer learning model based on VGG16 to detect falls from RGB images in home environments with edge computing integration.",
      image: fallDetectionImg,
      icon: Brain,
      technologies: ["Python", "Keras", "VGG16", "OpenCV", "Sockets", "Tkinter"],
      features: [
        "Deep transfer learning model based on VGG16 architecture",
        "Edge computing with local model inference",
        "Socket-based communication for cloud server transmission",
        "Bounding box regression and classification for fall detection",
        "Real-time image processing with high prediction accuracy",
        "GUI using Tkinter for data upload and result monitoring"
      ],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "AI-Powered Human Action Recognition",
      description: "Integrated a pre-trained ResNet-34 deep learning model to recognize human actions from depth maps and postural cues with 95% accuracy.",
      image: actionRecognitionImg,
      icon: Brain,
      technologies: ["Python", "OpenCV", "ONNX", "ResNet-34", "Computer Vision"],
      features: [
        "Pre-trained ResNet-34 model converted to ONNX format",
        "Real-time action recognition from depth maps",
        "OpenCV integration for video frame processing",
        "95% classification accuracy with sub-200ms latency",
        "Dynamic AI-driven video annotation",
        "Application in surveillance and healthcare domains"
      ],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a full-stack real-time chat application with React.js frontend and Node.js backend, featuring instant messaging and secure authentication.",
      image: chatAppImg,
      icon: MessageCircle,
      technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Firebase"],
      features: [
        "Responsive React.js frontend with modern UI/UX",
        "Secure Node.js & Express.js backend architecture",
        "Real-time messaging using Web Sockets (Socket.io)",
        "RESTful API with authentication and middleware",
        "MongoDB/Firebase integration for message persistence",
        "Deployed on Vercel (Frontend) + Render/Heroku (Backend)"
      ],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "AI Chatbot using React",
      description: "Built an intelligent chatbot interface using React with natural language processing capabilities and modern conversational UI.",
      image: chatbotImg,
      icon: Bot,
      technologies: ["React.js", "TypeScript", "NLP", "REST API", "CSS3"],
      features: [
        "Interactive chatbot interface with React components",
        "Natural language processing integration",
        "Real-time message handling and responses",
        "Modern conversational UI with typing indicators",
        "Responsive design for all device types",
        "Context-aware conversation management"
      ],
      github: "#",
      demo: "#",
      category: "Frontend"
    },
    {
      title: "Portfolio Website using React",
      description: "Designed and developed a modern, responsive portfolio website showcasing projects and skills with beautiful animations and interactions.",
      image: portfolioImg,
      icon: User,
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Modern and responsive design with smooth animations",
        "Component-based architecture using React",
        "Tailwind CSS for styling with custom design system",
        "Interactive project showcases and skill visualizations",
        "Contact form with email integration",
        "SEO optimized and performance focused"
      ],
      github: "#",
      demo: "#",
      category: "Frontend"
    }
  ];

  const categories = ["All", "AI/ML", "Full Stack", "Frontend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI/ML, full-stack development, and modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "gradient-primary text-primary-foreground" 
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-shadow transition-smooth hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/50 text-primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary text-primary-foreground hover:glow-primary">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;