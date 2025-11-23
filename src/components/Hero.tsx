import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      
      <div className="absolute top-1/4 left-5 md:left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-5 md:right-10 w-48 h-48 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up px-2">
            Building Digital{" "}
            <span className="text-primary animate-gradient-shift bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            We craft exceptional websites for marketing agencies and their clients. 
            Professional, scalable, and pixel-perfect solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
