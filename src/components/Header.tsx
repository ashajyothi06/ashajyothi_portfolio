import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold">Ashajyothi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth hover:text-gradient"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* GitHub Icon Button */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-xl border-primary/30 hover:border-primary hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="default"
            size="icon"
            className="md:hidden bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 rounded-lg p-2 z-50 shadow-md transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/30 hover:bg-primary/20"
                asChild
              >
                <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;