import { CheckCircle2, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const features = [
    "Custom website development tailored to your needs",
    "Responsive design that works on all devices",
    "SEO optimization for better visibility",
    "Fast loading times and performance optimization",
    "Ongoing support and maintenance",
    "Integration with third-party services",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            ref={textRef}
            className={`space-y-4 md:space-y-6 px-2 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-primary">div house</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a specialized web development agency dedicated to creating stunning, 
              high-performance websites for marketing agencies and their clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines technical expertise with creative vision to deliver 
              web solutions that not only look beautiful but also drive results. 
              We understand the unique needs of marketing agencies and work closely 
              with you to bring your clients' visions to life.
            </p>
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a 
                href="https://drive.google.com/drive/u/1/folders/1B7VtDXw4xDVehMaUXZzb10BHauPIt0xe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" />
                  View Our Portfolio
                </Button>
              </a>
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-2xl -z-10 blur-3xl animate-glow"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
