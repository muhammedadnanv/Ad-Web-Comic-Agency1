import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hey, I am ${formData.name}, my email is ${formData.email}, I am interested in the service: ${formData.service}. Here are the project details: ${formData.details}`;
    const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp...");
    
    setFormData({ name: "", email: "", service: "", details: "" });
  };

  const contactInfo = [
    { icon: <Phone className="h-6 w-6" />, title: "Phone", value: "+91 9656778508" },
    { icon: <Mail className="h-6 w-6" />, title: "Email", value: "adwebcomicagency@gmail.com" },
    { icon: <Clock className="h-6 w-6" />, title: "Response Time", value: "Within 24 Hours" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Ready to Transform Your Digital Presence?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
