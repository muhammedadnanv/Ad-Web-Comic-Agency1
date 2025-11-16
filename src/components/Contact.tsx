import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  service: z.string().min(1, "Please select a service"),
  details: z.string().trim().min(1, "Project details are required").max(1000, "Details must be less than 1000 characters")
});

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Create WhatsApp message with validated and encoded data
      const message = `Hey, I am ${validatedData.name}, my email is ${validatedData.email}, I am interested in the service: ${validatedData.service}. Here are the project details: ${validatedData.details}`;
      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      toast.success("Redirecting to WhatsApp...");
      
      // Reset form
      setFormData({ name: "", email: "", service: "", details: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    }
  };

  const contactInfo = [
    { icon: <Phone className="h-6 w-6" />, title: "Phone", value: "+91 9656778508" },
    { icon: <Mail className="h-6 w-6" />, title: "Email", value: "adwebcomicagency@gmail.com" },
    { icon: <Clock className="h-6 w-6" />, title: "Response Time", value: "Within 24 Hours" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30" ref={ref}>
      <div className={`container mx-auto px-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Ready to Transform Your Digital Presence?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 flex items-center gap-4 bg-card/50 backdrop-blur">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {info.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Select onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Static Website">Static Website</SelectItem>
                    <SelectItem value="Custom Website Development">Custom Website Development</SelectItem>
                    <SelectItem value="Business Management Solutions">Business Management Solutions</SelectItem>
                    <SelectItem value="Android Mobile App Development">Android Mobile App Development</SelectItem>
                    <SelectItem value="Website Care Kit">Website Care Kit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Project Details"
                  rows={5}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="w-full h-full min-h-[450px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4244761395867!2d75.78701!3d11.4492569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6636db34204c5%3A0xc2fa9d054e3a60af!2sAD%20WEB%20COMIC%20Agency!5e0!3m2!1sen!2sin!4v1763237997426!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
