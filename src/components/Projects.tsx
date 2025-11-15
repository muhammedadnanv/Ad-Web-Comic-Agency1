import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "GlobalBestUae",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://globalbestuae.com/"
    },
    {
      title: "ACEC Saudi",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://acecsaudi.com/"
    },
    {
      title: "Welcome Properties",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://www.welcomeproperties.in/"
    },
    {
      title: "IDC Interior Studio",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://www.idcinteriorstudio.com/"
    },
    {
      title: "Nyla Interiors",
      tech: ["HTML5", "CSS", "Javascript"],
      link: "https://www.nylainteriors.in/"
    },
    {
      title: "Welcome Mart",
      tech: ["Vue.js", "Modern CSS", "Javascript"],
      link: "https://welcomemart.shop/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing Innovation and Excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-sm font-semibold">Visit Website</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
