import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
