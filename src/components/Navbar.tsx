import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/divhouse-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        showNav ? "top-0" : "-top-full"
      } ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src={logo} alt="div house" className="h-16 w-16 md:h-24 md:w-24 object-contain" />
            <span className="text-lg md:text-2xl font-bold text-foreground">
              div <span className="text-primary">house</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="block w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left py-2 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
