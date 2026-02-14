import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["about", "skills", "experience", "projects", "achievements", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3' 
          : 'py-5'
      }`}
    >
      {/* Background with glass effect */}
      <motion.div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect-strong shadow-elevated' 
            : 'bg-transparent'
        }`}
        initial={false}
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group"
          >
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:glow-soft transition-all duration-300"
            >
              <Code2 className="text-primary-foreground h-5 w-5" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                Ashajyothi
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 p-1.5 rounded-2xl glass-effect border-border/30">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl gradient-primary"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* GitHub Button - Desktop */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-xl glass-effect border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Hire Me Button - Desktop */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -1 }} 
              whileTap={{ scale: 0.98 }}
              className="hidden lg:block"
            >
              <Button 
                className="btn-premium text-primary-foreground rounded-xl px-5"
                asChild
              >
                <a href="#contact">
                  Let's Talk
                </a>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileTap={{ scale: 0.95 }} className="lg:hidden">
              <Button
                variant="default"
                size="icon"
                className="gradient-primary text-primary-foreground rounded-xl shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-background/60 backdrop-blur-md z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.nav
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="absolute top-full left-4 right-4 mt-4 lg:hidden glass-effect-strong rounded-2xl shadow-elevated z-50 overflow-hidden"
              >
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                          isActive 
                            ? 'gradient-primary text-primary-foreground' 
                            : 'text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </motion.a>
                    );
                  })}
                  
                  <div className="pt-4 border-t border-border/30 flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-xl border-primary/30"
                      asChild
                    >
                      <a href="https://github.com/ashajyothi06" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      className="flex-1 gradient-primary text-primary-foreground rounded-xl"
                      asChild
                    >
                      <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                        Let's Talk
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;