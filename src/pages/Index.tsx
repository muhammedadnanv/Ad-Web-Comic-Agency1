import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadCaptureWidget from "@/components/LeadCaptureWidget";
import AIChatWidget from "@/components/AIChatWidget";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Career />
      <FAQ />
      <Contact />
      <Footer />
      
      
    </div>;
};
export default Index;