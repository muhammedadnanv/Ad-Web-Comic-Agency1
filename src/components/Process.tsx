import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Lightbulb, Layout, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discovery",
      description: "We understand your business goals, target audience, and project requirements through detailed consultations."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Wireframing",
      description: "Creating structural blueprints of your website to establish layout, navigation, and user flow."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design Draft",
      description: "Transforming wireframes into beautiful, branded designs that align with your vision and business identity."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Building your website with clean, modern code ensuring optimal performance and responsiveness."
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing",
      description: "Rigorous quality assurance across devices, browsers, and scenarios to ensure flawless functionality."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch",
      description: "Deploying your website to production with proper domain setup, hosting, and SSL configuration."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Post-launch Support",
      description: "Providing ongoing technical support, maintenance, and updates to keep your website running smoothly."
    }
  ];

  return (
    <section id="process" className="py-20 bg-secondary/20" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground">A proven approach to deliver exceptional results</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-lg">Step {index + 1}</span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
