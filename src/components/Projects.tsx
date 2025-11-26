import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img40 from "../assets/800.jpg";
import img41 from "../assets/131.jpeg";
import img42 from "../assets/177.jpg";

const projects = [
  { title: "E-Commerce Platform", description: "Modern online store with advanced filtering and checkout system", tags: ["React", "Node.js", "Stripe", "MongoDB"], image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop", link: "https://ruehaya.com/?pb=0" },
 {
  title: "Fashion",
  description: "we helping in design only",
  tags: [ "Figma"],
  image: img41,
  link: "https://sevenegy.com/"
},

  { title: "Real Estate Website", description: "Property listing platform with virtual tours and search", tags: ["React", "Firebase", "Maps API", "CSS3"], image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", link: "https://leadsshubbb.netlify.app/" },
  { title: "Digital Agency Site", description: "Analytics and reporting dashboard for business intelligence", tags: ["Vue.js", "Express", "Chart.js", "MySQL"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", link: "https://maketaa.netlify.app/" },
  { title: "Educational Platform", description: "Online learning management system with video courses", tags: ["Next.js", "Prisma", "AWS", "TypeScript"], image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", link: "https://etqankit.com/ar" },
{
  title: "The Circle of Forgotten Knowledge.",
  description: "Workout tracking and nutrition planning mobile application",
  tags: ["React Native", "Node.js", "MongoDB", "Redux"],
  image:img42,
  link: "https://per-hours.netlify.app/"
},

  { title: "Travel Booking Site", description: "Comprehensive travel platform with booking and reviews", tags: ["React", "Python", "Django", "PostgreSQL"], image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop", link: "https://www.egyptsunny.com/en" },
  { title: "Social Media Platform", description: "Community-driven platform with real-time messaging", tags: ["Next.js", "Socket.io", "Redis", "MongoDB"],  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop", link: "https://bareq-landing-page.netlify.app/" },
{
  title: "Financial Dashboard",
  description: "Investment tracking and portfolio management system",
  tags: ["React", "Python", "FastAPI", "PostgreSQL"],
  image: img40,
  link: "https://chillhousetattoo.com/"
},

  { title: " Online Retail Store", description: "Complete event planning and ticketing solution", tags: ["Vue.js", "Node.js", "Stripe", "MySQL"],  image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop", link: "https://shmso.myshopify.com/" },
  { title: "Video Streaming Platform", description: "Netflix-style streaming service with subscriptions", tags: ["React", "AWS", "Node.js", "MongoDB"], image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop", link: "https://cinema-base-1.vercel.app/" },
   { title: "Restaurant Website", description: "Online menu and reservation system with delivery integration", tags: ["React", "Node.js", "MongoDB", "Stripe"], image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", link: "https://silverlightfood.netlify.app/" }, 
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Projects</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across industries. Here are some of our recent works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-2 h-full">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <ExternalLink className="text-primary h-6 w-6" />
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
