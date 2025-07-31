import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hi, I am</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Ashajyothi <span className="text-gradient">Velpula</span>
              </h1>
              <div className="flex items-center space-x-2 text-xl md:text-2xl text-muted-foreground">
                <span>I am a</span>
                <span className="text-primary font-semibold">Full Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am a motivated and versatile individual, always eager to take on new challenges. 
              With a passion for learning and expertise in AI/ML and full-stack development, 
              I am dedicated to delivering high-quality results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground hover:glow-primary">
                <Download className="h-4 w-4 mr-2" />
                Check Resume
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:ashajyothi@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full gradient-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face" 
                    alt="Ashajyothi Velpula"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full glow-primary opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;