import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Career = () => {
  const { ref, isVisible } = useScrollAnimation();
  const roles = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Designers",
      description: "Create user-centered designs that blend creativity with functionality, delivering seamless digital experiences."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Web Content Writers",
      description: "Develop compelling, SEO-friendly web content that communicates brand stories and engages audiences effectively."
    }
  ];

  return (
    <section id="career" className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Opportunities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Ad Web Comic Agency, we collaborate with professionals who share our passion for design and innovation. Explore our open roles and subscribe to work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <Card key={index} className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {role.icon}
              </div>
              
              <h3 className="text-2xl font-bold">{role.title}</h3>
              <p className="text-muted-foreground">{role.description}</p>

              <Button className="w-full" asChild>
                <a
                  href="https://razorpay.me/@adnan4402?amount=KxK8ikz%2BGFZ8lMDydVeeuA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe to Work With Us
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
