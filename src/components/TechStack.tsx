import { Code2, Database, Layers, Smartphone, Server, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    icon: Server,
    techs: ["Node.js", "Express", "Python", "PHP", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    techs: ["React Native", "Progressive Web Apps", "Responsive Design", "Mobile-First"],
  },
  {
    category: "DevOps",
    icon: Layers,
    techs: ["AWS", "Vercel", "Netlify", "Docker", "Git", "CI/CD"],
  },
  {
    category: "Design",
    icon: Palette,
    techs: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Brand Identity"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-slide-in-left">Technology Stack</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                 className={`transition-all duration-700 ${
                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                 }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-2 group h-full"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.techs.map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
