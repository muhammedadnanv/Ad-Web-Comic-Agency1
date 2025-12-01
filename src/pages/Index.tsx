import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Collaborator from "@/components/Collaborator";
import HireAgency from "@/components/HireAgency";
import FreelancerOS from "@/components/FreelancerOS";
import Career from "@/components/Career";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ad Web Comic Agency",
    "image": "https://adwebcomicagency.vercel.app/img.png",
    "url": "https://adwebcomicagency.vercel.app/",
    "telephone": "+919656778508",
    "email": "adwebcomicagency@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "description": "Ad Web Comic Agency builds futuristic web solutions including static e-commerce sites, automation tools, and AI integrations. Based in Kozhikode, Kerala.",
    "priceRange": "₹₹",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.2588",
      "longitude": "75.7804"
    },
    "sameAs": [
      "https://wa.link/7s1649"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Website",
        "price": "37281",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Custom Static Website",
        "description": "Bespoke websites built with modern technologies"
      },
      {
        "@type": "Offer",
        "name": "Business Management Solutions"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Ad Web Comic Agency - Futuristic Web Solutions in Kozhikode, Kerala"
        description="Ad Web Comic Agency builds futuristic web solutions including static e-commerce sites, automation tools, and AI integrations. Based in Kozhikode, Kerala. Expert web design and development services."
        keywords="Web Design Kozhikode, Static E-commerce Kerala, AI Websites India, Ad Web Comic Agency, Website Development Kerala, React Development, Next.js Kerala"
        canonical="https://adwebcomicagency.vercel.app/"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Collaborator />
      <HireAgency />
      <FreelancerOS />
      <Career />
      <FAQ />
      <Contact />
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;