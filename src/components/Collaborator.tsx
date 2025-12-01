import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const collaboratorSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  skill: z.string().trim().min(1, { message: "Skill/Service is required" }).max(200),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

const Collaborator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skill: "",
    message: "",
  });

  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      collaboratorSchema.parse(formData);

      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASkill/Service: ${formData.skill}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        skill: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <section id="collaborator" className="py-20 bg-background">
      <div
        ref={ref as any}
        className={`container transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Become a Collaborator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our network of talented professionals. Share your skills and collaborate on exciting projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="collab-name">Full Name</Label>
              <Input
                id="collab-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="collab-email">Email</Label>
              <Input
                id="collab-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="collab-phone">Phone Number</Label>
              <Input
                id="collab-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                required
              />
            </div>

            <div>
              <Label htmlFor="collab-skill">Skill / Service Offered</Label>
              <Input
                id="collab-skill"
                value={formData.skill}
                onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                placeholder="e.g., Web Design, Content Writing, Video Editing"
                required
              />
            </div>

            <div>
              <Label htmlFor="collab-message">Short Message</Label>
              <Textarea
                id="collab-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about yourself and why you want to collaborate..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Collaborator;
