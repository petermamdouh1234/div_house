import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 🔥 Correct image paths (go up one folder)
import img1 from "../assets/8.png";
import img2 from "../assets/7.jpg";
import img3 from "../assets/6.jpg";
import img4 from "../assets/5.jpg";
import img5 from "../assets/4.jpg";
import img6 from "../assets/3.jpg";
import img7 from "../assets/18.png";

const team = [
  {
    name: "Peter Mamdouh",
    role: "Founder & CEO",
    image: img7,
    bio: "Full-stack expert specializing in React, Node.js, and modern web technologies, Ecommerce websites",
  },
  {
    name: "Nour Yasser",
    role: "Developer",
    image: img2,
    bio: "Frontend specialist with expertise in building scalable web applications",
  },
  {
    name: "Fahd Ali",
    role: "Developer",
    image: img6,
    bio: "Full-stack, mobile app specializing in scalable architectures, modern frameworks, and smooth cross-platform user experiences.",
  },
  {
    name: "Fady George",
    role: "Sales Manager",
    image: img4,
    bio: "Dedicated to driving sales and building client relationships",
  },
  {
    name: "Mina Farouk",
    role: "Account Manager",
    image: img5,
    bio: "Dedicated to connecting clients with perfect digital solutions",
  },
  {
    name: "Zein Fawzy",
    role: "Senior Graphic Designer",
    image: img3,
    bio: "Creative designer with expertise in visual storytelling and branding",
  },
];
const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

      <div className="w-full">

  {/* Desktop Infinite Runner */}
  <div className="hidden md:block overflow-hidden w-full">
    <div className="flex gap-8 animate-infinite-runner">

      {/* Original list */}
      {team.map((member, index) => (
        <div key={index} className="flex-shrink-0 w-72">
          <Card className="bg-background border-border overflow-hidden h-full">
            <div className="relative aspect-square">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        </div>
      ))}

      {/* Duplicate list for looping */}
      {team.map((member, index) => (
        <div key={"dup-" + index} className="flex-shrink-0 w-72">
          <Card className="bg-background border-border overflow-hidden h-full">
            <div className="relative aspect-square">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        </div>
      ))}

    </div>
  </div>

  {/* Mobile Carousel */}
  <div className="md:hidden w-full overflow-x-auto flex gap-4 px-4 snap-x snap-mandatory scrollbar-none">
    {team.map((member, index) => (
      <div key={index} className="flex-shrink-0 w-64 snap-center">
        <Card className="bg-background border-border overflow-hidden h-full">
          <div className="relative aspect-square">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-4 text-center">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-primary font-medium text-sm">{member.role}</p>
            <p className="text-xs text-muted-foreground">{member.bio}</p>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>

</div>



      </div>
    </section>
  );
};

export default Team;
