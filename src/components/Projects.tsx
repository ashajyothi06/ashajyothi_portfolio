import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Bot,
  Brain,
  MessageCircle,
  User,
  Globe,
  Activity,
  FileSearch,
  Cloud,
  PenTool,
} from "lucide-react";

import fallDetectionImg from "@/assets/fall-detection.jpg";
import actionRecognitionImg from "@/assets/action-recognition.jpg";
import chatAppImg from "@/assets/chat-app.jpg";
import chatbotImg from "@/assets/chatbot.jpg";
import portfolioImg from "@/assets/portfolio-project.jpg";
import consultingImg from "@/assets/consulting-website.jpg";
import smartMonitoringImg from "@/assets/smart-monitoring.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection using ML",
      description:
        "Machine learning model using NLP and TF-IDF to detect misinformation with high accuracy.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      icon: FileSearch,
      technologies: [
        "Python",
        "NLP",
        "TF-IDF",
        "Logistic Regression",
        "Random Forest",
        "Scikit-learn",
      ],
      features: [
        "NLP-based text analysis and feature extraction",
        "TF-IDF vectorization for text representation",
        "Logistic Regression & Random Forest classifiers",
        "High accuracy in detecting misinformation",
        "Comprehensive dataset preprocessing pipeline",
      ],
      github: "https://github.com/ashajyothi06/Fake_News",
      demo: "https://github.com/ashajyothi06/Fake_News",
      category: "AI/ML",
    },
    {
      title: "Kubernetes E2E Deployment on AWS EKS",
      description:
        "Complete CI/CD pipeline with Dockerized microservices, autoscaling, and AWS infrastructure.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      icon: Cloud,
      technologies: [
        "Kubernetes",
        "AWS EKS",
        "Docker",
        "CI/CD",
        "IAM",
        "ECR",
        "Load Balancer",
      ],
      features: [
        "Complete CI/CD pipeline automation",
        "Dockerized microservices architecture",
        "AWS EKS cluster setup and management",
        "Autoscaling and load balancing configuration",
        "IAM and ECR integration for security",
      ],
      github: "https://github.com/ashajyothi06/Kubernates-2048",
      demo: "https://github.com/ashajyothi06/Kubernates-2048",
      category: "DevOps",
    },
    {
      title: "Blogging Website",
      description:
        "Full-stack CRUD blog application with authentication, categories, and responsive UI.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      icon: PenTool,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      features: [
        "Full CRUD operations for blog posts",
        "User authentication with JWT tokens",
        "Categories and tags for organization",
        "Comments and interactions system",
        "Fully responsive modern UI design",
      ],
      github: "https://github.com/ashajyothi06/classic-scribe-nexus",
      demo: "https://myblog-murex-three.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Smart Monitoring Platform",
      description:
        "Real-time dashboard for IoT/AI-based monitoring systems with live analytics and role-based access control.",
      image: smartMonitoringImg,
      icon: Activity,
      technologies: ["React", "WebSockets", "Spring Boot", "PostgreSQL", "MQTT"],
      features: [
        "Real-time analytics dashboard with live data visualization",
        "IoT device integration via MQTT protocol",
        "Role-based access control and user management",
        "Alert system with customizable thresholds",
        "API integration for external data sources",
      ],
      github: "https://github.com/ashajyothi06/patch-fix-now",
      demo: "https://smart-monitoring-opal.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Consulting Website",
      description:
        "Professional consulting website for client onboarding, service showcasing, and appointment scheduling.",
      image: consultingImg,
      icon: Globe,
      technologies: ["React", "Node.js", "REST APIs", "Tailwind CSS", "Email Integration"],
      features: [
        "SEO-ready pages with optimized performance",
        "Automated email workflows for client communication",
        "Custom CMS for easy content updates",
        "Appointment scheduling integration",
        "Responsive design for all devices",
      ],
      github: "https://github.com/ashajyothi06/midasis-repo",
      demo: "https://midasis-repo.vercel.app/",
      category: "Frontend",
    },
    {
      title: "AI-Based Fall Detection",
      description:
        "Deep transfer learning model using VGG16 to detect falls from RGB images with edge computing integration.",
      image: fallDetectionImg,
      icon: Brain,
      technologies: ["Python", "Keras", "VGG16", "OpenCV", "Sockets", "Tkinter"],
      features: [
        "Deep transfer learning with VGG16 architecture",
        "Edge computing with local model inference",
        "Socket-based cloud communication",
        "Real-time image processing",
        "GUI for data upload and monitoring",
      ],
      github: "https://github.com/ashajyothi06/IOMP-MiniProject",
      demo: "https://github.com/ashajyothi06/IOMP-MiniProject",
      category: "AI/ML",
    },
    {
      title: "Human Action Recognition",
      description:
        "Pre-trained ResNet-34 model for recognizing human actions from depth maps with 95% accuracy.",
      image: actionRecognitionImg,
      icon: Brain,
      technologies: ["Python", "OpenCV", "ONNX", "ResNet-34", "Computer Vision"],
      features: [
        "ResNet-34 model converted to ONNX format",
        "Real-time action recognition from depth maps",
        "95% classification accuracy",
        "Sub-200ms inference latency",
        "Applications in surveillance and healthcare",
      ],
      github: "https://github.com/ashajyothi06/Real-time-MinProject",
      demo: "https://github.com/ashajyothi06/Real-time-MinProject",
      category: "AI/ML",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack real-time chat with React frontend and Node.js backend featuring instant messaging.",
      image: chatAppImg,
      icon: MessageCircle,
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Firebase"],
      features: [
        "Real-time messaging with Socket.io",
        "Secure authentication and middleware",
        "MongoDB/Firebase for message persistence",
        "Responsive React.js frontend",
        "Deployed on Vercel + Render",
      ],
      github: "https://github.com/ashajyothi06/realtime-chat-Application",
      demo: "https://realtime-chat-app-one-topaz.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "AI Chatbot using React",
      description:
        "Intelligent chatbot interface with NLP capabilities and modern conversational UI.",
      image: chatbotImg,
      icon: Bot,
      technologies: ["React.js", "TypeScript", "NLP", "REST API", "CSS3"],
      features: [
        "Natural language processing integration",
        "Real-time message handling",
        "Modern conversational UI",
        "Typing indicators and animations",
        "Context-aware conversations",
      ],
      github: "https://github.com/ashajyothi06/Chatbot",
      demo: "https://github.com/ashajyothi06/Chatbot",
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio with beautiful animations and interactive project showcases.",
      image: portfolioImg,
      icon: User,
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Smooth animations with Framer Motion",
        "Component-based architecture",
        "Custom design system",
        "SEO optimized",
        "Performance focused",
      ],
      github: "#",
      demo: "#",
      category: "Frontend",
    },
  ];

  const categories = ["All", "AI/ML", "Full Stack", "Frontend", "DevOps"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const isValidLink = (url?: string) => !!url && url !== "#";

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />
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
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing my skills in AI/ML, full-stack development, and modern web technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "gradient-primary text-primary-foreground glow-primary"
                    : "border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
                }
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const codeEnabled = isValidLink(project.github);
              const demoEnabled = isValidLink(project.demo);

              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full glass-effect border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

                      {/* Icon badge */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center glow-primary">
                          <project.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 backdrop-blur-sm text-primary border-primary/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs border-primary/30 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* ✅ Actions (WORKING LINKS) */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
                          asChild
                          disabled={!codeEnabled}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-disabled={!codeEnabled}
                            onClick={(e) => {
                              if (!codeEnabled) e.preventDefault();
                            }}
                          >
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>

                        <Button
                          size="sm"
                          className="flex-1 gradient-primary text-primary-foreground hover:glow-primary"
                          asChild
                          disabled={!demoEnabled}
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-disabled={!demoEnabled}
                            onClick={(e) => {
                              if (!demoEnabled) e.preventDefault();
                            }}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
