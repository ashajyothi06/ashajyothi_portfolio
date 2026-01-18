import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const portfolioContext = `
You are an AI assistant for Ashajyothi Velpula's portfolio website. You help visitors learn about Ashajyothi.

ABOUT ASHAJYOTHI:
- Full-Stack Developer and AI Engineer
- Based in Hyderabad, India
- Currently available for internships, freelance, and full-time positions
- Contact: ashajyothivelpula0506@gmail.com, +91 9347350343

SKILLS:
- Programming: C, C++, Python, Java, JavaScript
- Frontend: React.js, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, Spring Boot
- Databases: MySQL, PostgreSQL, MongoDB
- AI/ML: TensorFlow, Keras, Scikit-learn, OpenCV, Edge ML, NLP
- DevOps: Docker, Kubernetes, AWS EKS, Git, CI/CD, Render

PROJECTS:
1. Smart Elderly Monitoring System - AI-powered fall detection with MediaPipe and edge computing
2. AI Pose Estimation Action Recognition - Real-time human action recognition using OpenCV
3. AI-Powered Chatbot - Conversational AI with NLP and machine learning
4. Real-Time Chat Application - Full-stack chat with React and Node.js
5. Consulting Website - Modern business website with responsive design
6. Portfolio Website - This website showcasing skills and projects

Keep responses friendly, concise, and helpful. If asked about hiring or collaboration, encourage them to reach out via the contact form or email.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages?.length || 0, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: portfolioContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Failed to get AI response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response back to client");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
