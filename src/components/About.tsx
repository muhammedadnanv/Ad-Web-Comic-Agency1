import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import InstagramEmbed from "./InstagramEmbed";
const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "4+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  const techStack = [
    "HTML5", 
    "CSS3", 
    "JavaScript", 
    "React", 
    "Next.js", 
    "TypeScript", 
    "Vue.js", 
    "Tailwind CSS", 
    "Node.js", 
    "Vite", 
    "Lovable", 
    "Rocket", 
    "Bolt"
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-base sm:text-xl text-muted-foreground px-2">Pioneering the Future of Web Development</p>
          <InstagramEmbed />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Innovation Meets Excellence</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ad Web Comic Agency is a solo-run Web & PWA development agency, fully operated by Muhammed Adnan.
              Every project is personally handled from start to finish, ensuring that your vision gets the attention it deserves.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Being solo means you work directly with the founder, without any middlemen, for a hands-on, focused approach.
              We create websites, custom web solutions, and Progressive Web Apps (PWAs) tailored to your brand and business goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 sm:p-6 text-center bg-card/50 backdrop-blur">
                  <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                To empower businesses and creators with high-quality, future-ready web solutions that deliver maximum value, full ownership, and no recurring fees.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Mission</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                At Ad Web Comic Agency, we make digital solutions simple, effective, and affordable through one-time investments, custom web experiences, and end-to-end support.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
