import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, FileCode, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Basic Website",
      description: "A professionally built website that's ready to launch and tailored to your brand",
      price: "Get Started",
      period: "Today",
      features: [
        "Pages: 1–3 (Home, About, Services, Contact)",
        "Template-based responsive design",
        "Mobile Friendly",
        "Domain: 1-year registration included",
        "Hosting: 10-year setup",
        "Technical Support: 5 months included"
      ],
      link: "https://wa.link/7s1649",
      featured: false,
      idealFor: "Small businesses, startups, and freelancers looking for an affordable online presence",
      deliverables: [
        "Fully functional 1-3 page website",
        "Mobile-responsive design",
        "1-year domain registration",
        "10-year hosting setup",
        "5 months technical support",
        "Basic SEO optimization"
      ]
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "Custom Static Website",
      description: "Bespoke websites built with modern technologies and optimized for performance",
      price: "Based on",
      period: "Your Project",
      features: [
        "Pages: 1–3 (Home, About, Services, Contact)",
        "Custom static website design",
        "Template-free, fully responsive",
        "AI-optimizing structure",
        "Domain: 1-year registration",
        "Hosting: 10-year setup",
        "Technical Support: 6–12 months",
        "6 months free maintenance"
      ],
      link: "https://wa.link/7s1649",
      featured: false,
      idealFor: "Businesses seeking unique, high-performance websites with custom designs and advanced features",
      deliverables: [
        "Custom-designed website (1-3 pages)",
        "Fully responsive across all devices",
        "AI-optimized structure for SEO",
        "1-year domain registration",
        "10-year hosting setup",
        "6-12 months technical support",
        "6 months free maintenance",
        "Source code and documentation"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Management Solutions",
      description: "Streamline operations with integrated tools for accounting, inventory, and invoicing",
      price: "Vyapar fee",
      period: "+ Service fee",
      features: [
        "Accounting made simple",
        "Real-time Inventory management",
        "Easy Invoicing",
        "E-Invoice for GST compliance",
        "POS integration",
        "OCR technology",
        "18% GST Applicable"
      ],
      link: "https://wa.link/xg1dgw",
      featured: true,
      idealFor: "Small to medium businesses needing comprehensive management tools for daily operations",
      deliverables: [
        "Vyapar software setup and configuration",
        "Custom workflow integration",
        "Staff training sessions",
        "GST compliance setup",
        "POS system integration",
        "OCR setup for document scanning",
        "Ongoing technical support",
        "Documentation and guides"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "White-Label Website Plan",
      description: "All-in-one solution for agencies. Fully white-labeled and ready to deliver",
      price: "₹22,000",
      period: "per project",
      features: [
        "Custom UI/UX Design",
        "5-page Static Website",
        "Content Integration",
        "Domain Setup",
        "Hosting with SSL",
        "UI Enhancements",
        "Testing & Deployment",
        "1 Month Post-Launch Support"
      ],
      link: "https://wa.link/59d8d4",
      featured: true,
      note: "Agencies should ensure minimum 8 clients/month for cost efficiency",
      idealFor: "Digital agencies, freelancers, and resellers who want to offer web services under their own brand",
      deliverables: [
        "5-page fully designed website",
        "Custom UI/UX tailored to end-client",
        "Complete white-label branding",
        "Domain registration and setup",
        "SSL-secured hosting",
        "Full testing and quality assurance",
        "Deployment to production",
        "1 month post-launch support",
        "Complete project handover"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Android Mobile App Development",
      description: "Custom Android applications built with modern technologies for optimal performance",
      price: "Based on",
      period: "Your Requirements",
      features: [
        "Native Android Development",
        "Custom UI/UX Design",
        "API Integration",
        "Google Play Store Deployment",
        "Performance Optimization",
        "Security Implementation",
        "3 months Post-Launch Support",
        "App Maintenance Available"
      ],
      link: "https://wa.link/7s1649",
      featured: false,
      idealFor: "Businesses wanting to reach customers through mobile platforms with custom Android applications",
      deliverables: [
        "Fully functional Android app",
        "Custom UI/UX design",
        "Backend API integration",
        "Google Play Store listing",
        "App optimization for performance",
        "Security features implementation",
        "3 months technical support",
        "Source code and documentation",
        "App maintenance package options"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Website Care Kit",
      description: "Comprehensive maintenance and support package to keep your website running smoothly",
      price: "₹5,000",
      period: "per month",
      features: [
        "Regular Security Updates",
        "Content Updates (up to 5 per month)",
        "Performance Monitoring",
        "Backup & Recovery",
        "Technical Support",
        "Bug Fixes & Troubleshooting",
        "Uptime Monitoring",
        "Monthly Reports"
      ],
      link: "https://wa.link/7s1649",
      featured: false,
      idealFor: "Website owners who want peace of mind with ongoing maintenance and support",
      deliverables: [
        "Monthly security patches",
        "Up to 5 content updates per month",
        "24/7 uptime monitoring",
        "Weekly automated backups",
        "Priority technical support",
        "Bug fixes within 24 hours",
        "Performance optimization reports",
        "Monthly analytics report",
        "Emergency support access"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Premium Solutions Tailored for Your Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 space-y-6 hover:scale-105 transition-transform duration-300 ${
                service.featured ? "border-primary border-2 bg-card/70" : "bg-card/50"
              } backdrop-blur`}
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="text-3xl font-bold">
                {service.price} <span className="text-base text-muted-foreground">/ {service.period}</span>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.note && (
                <p className="text-xs text-destructive">{service.note}</p>
              )}

              <div className="flex gap-2">
                <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {service.icon}
                        </div>
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {service.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3">Ideal For</h4>
                        <p className="text-sm text-muted-foreground">{service.idealFor}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3">Process Overview</h4>
                        <div className="space-y-3">
                          {["Discovery", "Wireframing", "Design Draft", "Development", "Testing", "Launch", "Post-launch support"].map((step, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                                {idx + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-2xl font-bold mb-4">
                          {service.price} <span className="text-base text-muted-foreground font-normal">/ {service.period}</span>
                        </div>
                        <Button className="w-full" asChild>
                          <a href={service.link} target="_blank" rel="noopener noreferrer">
                            Get Started Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  className="flex-1"
                  variant={service.featured ? "default" : "outline"}
                  asChild
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
