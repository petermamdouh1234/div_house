import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    brandType: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in your services 👋\nHere are my details:\n\n` +  // 🔹 Welcome message (Option A)
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Category: ${formData.category}\n` +
    `Brand Type: ${formData.brandType}\n` +
    `Message: ${formData.message}`
  );

  window.open(`https://wa.me/201202307815?text=${whatsappMessage}`, '_blank');

  toast({
    title: "Redirecting to WhatsApp!",
    description: "Your message details will be sent.",
  });

  setFormData({ name: "", email: "", phone: "", category: "", brandType: "", message: "" });
};


  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-slide-in-left">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Ready to start your project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div 
            ref={formRef}
            className={`space-y-8 transition-all duration-700 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="bg-card border-border hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    
                    >
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Select Website Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="e-commerce">E-Commerce</SelectItem>
                        <SelectItem value="corporate">Corporate Website</SelectItem>
                        <SelectItem value="portfolio">Portfolio</SelectItem>
                        <SelectItem value="blog">Blog</SelectItem>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <div className="relative">
                      <Input
                        placeholder="Your Brand Type (e.g., Fashion, Food, Tech...)"
                        value={formData.brandType}
                        onChange={(e) => setFormData({ ...formData, brandType: e.target.value })}
                        
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground pl-4 pr-4 py-6 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                        {["🎨", "🍔", "💼", "🏠", "⚡"].map((emoji, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              const types = ["Fashion", "Food", "Business", "Real Estate", "Tech"];
                              setFormData({ ...formData, brandType: types[idx] });
                            }}
                            className="text-xl hover:scale-125 transition-transform"
                            title={["Fashion", "Food", "Business", "Real Estate", "Tech"][idx]}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     
                      rows={6}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div 
            ref={cardsRef}
            className={`space-y-6 transition-all duration-700 ${
              cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-1">
  <CardContent className="p-6 flex items-start space-x-4">
    <div className="p-3 bg-primary/10 rounded-lg">
      <Mail className="h-6 w-6 text-primary" />
    </div>

    <div>
      <h3 className="font-semibold text-foreground mb-1">Email</h3>

      <a
        href="mailto:minafarouk786@gmail.com"
        className="flex items-center space-x-2 text-muted-foreground hover:underline mb-1"
      >
        <Mail className="h-4 w-4 text-primary" />
        <span>minafarouk786@gmail.com</span>
      </a>

      <a
        href="mailto:fady32556@gmail.com"
        className="flex items-center space-x-2 text-muted-foreground hover:underline"
      >
        <Mail className="h-4 w-4 text-primary" />
        <span>fady32556@gmail.com</span>
      </a>
    </div>
  </CardContent>
</Card>

            <br />
            
            

           <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-1">
  <CardContent className="p-6 flex items-start space-x-4">
    <div className="p-3 bg-primary/10 rounded-lg">
      <Phone className="h-6 w-6 text-primary" />
    </div>

    <div>
      <h3 className="font-semibold text-foreground mb-2">Phone</h3>

      <a
        href="tel:01281044087"
        className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.295a1.125 1.125 0 00-.852-1.09l-4.548-1.137a1.125 1.125 0 00-1.17.417l-.97 1.293a.75.75 0 01-.78.261 12.035 12.035 0 01-7.013-7.013.75.75 0 01.261-.78l1.293-.97c.347-.261.497-.703.417-1.17L6.385 3.353A1.125 1.125 0 005.294 2.5H3a.75.75 0 00-.75.75v3.5z"
          />
        </svg>
        01281044087
      </a>

      <a
        href="tel:01285772682"
        className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.295a1.125 1.125 0 00-.852-1.09l-4.548-1.137a1.125 1.125 0 00-1.17.417l-.97 1.293a.75.75 0 01-.78.261 12.035 12.035 0 01-7.013-7.013.75.75 0 01.261-.78l1.293-.97c.347-.261.497-.703.417-1.17L6.385 3.353A1.125 1.125 0 005.294 2.5H3a.75.75 0 00-.75.75v3.5z"
          />
        </svg>
        01285772682
      </a>
    </div>
  </CardContent>
</Card>


           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
