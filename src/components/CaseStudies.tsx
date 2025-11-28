import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Zap, Target, Lightbulb, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Realtime Chat Application",
      type: "Full-stack • Real-time Messaging",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
      problem: "Needed a scalable chat application with real-time messaging, typing indicators, and online status tracking for seamless user communication.",
      solution: {
        overview: "Built a full-stack solution using React.js for the frontend and Node.js/Express.js for the backend, with Socket.io enabling bidirectional real-time communication.",
        tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "REST API"],
        architecture: "Implemented a microservices architecture with separate frontend and backend services, using WebSockets for instant message delivery and REST APIs for user authentication and data persistence."
      },
      highlights: [
        "Real-time message delivery with <200ms latency",
        "Typing indicators and online status tracking",
        "Persistent chat history with MongoDB integration",
        "Secure authentication with JWT tokens",
        "Deployed on Vercel (Frontend) + Render (Backend)"
      ],
      outcome: "Successfully handles concurrent users with instant message delivery, providing a seamless chat experience with 99.9% uptime and sub-second response times."
    },
    {
      id: 2,
      title: "AI Chatbot using React",
      type: "Frontend • AI Integration • NLP",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      problem: "Required an intelligent chatbot interface with natural language understanding, context awareness, and modern conversational UI for enhanced user engagement.",
      solution: {
        overview: "Developed a React-based chatbot with NLP capabilities, featuring real-time message streaming, context management, and a polished conversational interface.",
        tech: ["React.js", "TypeScript", "NLP API", "Context API", "Framer Motion"],
        architecture: "Component-based architecture with state management for conversation history, API integration for NLP processing, and animated UI components for smooth interactions."
      },
      highlights: [
        "Context-aware conversations with message history",
        "Real-time typing indicators and message streaming",
        "90% user satisfaction with natural responses",
        "Responsive design optimized for all devices",
        "Smooth animations and micro-interactions"
      ],
      outcome: "Achieved 90% user satisfaction rate with natural, context-aware responses and an intuitive interface that significantly improved user engagement metrics."
    },
    {
      id: 3,
      title: "Human Action Recognition System",
      type: "AI/ML • Computer Vision • Deep Learning",
      icon: "🎯",
      gradient: "from-green-500 to-emerald-500",
      problem: "Needed an AI system to accurately recognize human actions from depth maps and postural cues for surveillance and healthcare applications with real-time performance.",
      solution: {
        overview: "Integrated a pre-trained ResNet-34 deep learning model converted to ONNX format, processing video frames with OpenCV for real-time action classification.",
        tech: ["Python", "ResNet-34", "ONNX", "OpenCV", "TensorFlow", "NumPy"],
        architecture: "Pipeline architecture: Video frame extraction → Depth map processing → ResNet-34 inference → Action classification → Real-time annotation overlay."
      },
      highlights: [
        "95% classification accuracy across multiple action categories",
        "Sub-200ms inference latency for real-time performance",
        "ONNX optimization for efficient model deployment",
        "Dynamic video annotation with action labels",
        "Applicable to surveillance and healthcare domains"
      ],
      outcome: "Deployed a production-ready system with 95% accuracy and <200ms latency, enabling real-time action recognition for security and healthcare monitoring applications."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into selected projects showcasing problem-solving, technical decisions, and measurable outcomes
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-shadow bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center text-2xl shrink-0`}>
                        {study.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{study.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{study.type}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {expandedId === study.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {expandedId === study.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="space-y-6 pt-6 border-t border-border/50">
                        {/* Problem */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Target className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold text-primary">Problem / Context</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold text-primary">Solution</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {study.solution.overview}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.solution.tech.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-primary/50 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              <span className="font-semibold text-foreground">Architecture: </span>
                              {study.solution.architecture}
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold text-primary">Key Highlights</h4>
                          </div>
                          <ul className="space-y-2">
                            {study.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcome */}
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <h4 className="font-semibold text-primary">Outcome</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.outcome}
                          </p>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
