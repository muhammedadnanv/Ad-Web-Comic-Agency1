import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, FileCode, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Basic Website",
      description: "A professionally built website that's ready to launch and tailored to your brand",
      price: "₹37,281",
      period: "Lifetime",
      features: [
        "Pages: 1–3 (Home, About, Services, Contact)",
        "Template-based responsive design",
        "Mobile Friendly",
        "Domain: 1-year registration included",
        "Hosting: 10-year setup",
        "Technical Support: 5 months included"
      ],
      link: "https://wa.link/7s1649",
      featured: false
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
      featured: false
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
      featured: true
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
      note: "Agencies should ensure minimum 8 clients/month for cost efficiency"
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
      featured: false
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
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
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

              <Button
                className="w-full"
                variant={service.featured ? "default" : "outline"}
                asChild
              >
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
