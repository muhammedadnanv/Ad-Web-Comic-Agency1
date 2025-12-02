import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { z } from "zod";
import { Rocket } from "lucide-react";

const freelancerOSSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  portfolio: z.string().trim().url({ message: "Please enter a valid URL" }).max(500),
  skill: z.string().min(1, { message: "Please select a skill category" }),
  experience: z.string().trim().min(1, { message: "Experience is required" }).max(2),
  services: z.string().trim().min(1, { message: "Services are required" }).max(500),
  why: z.string().trim().min(1, { message: "This field is required" }).max(1000),
  unique: z.string().trim().min(1, { message: "This field is required" }).max(1000),
  earning: z.string().trim().min(1, { message: "Earning goal is required" }).max(100),
  filelink: z.string().trim().url({ message: "Please enter a valid URL for sample work" }).max(500),
});

export const FreelancerOSModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    skill: "",
    experience: "",
    services: "",
    why: "",
    unique: "",
    earning: "",
    filelink: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      freelancerOSSchema.parse(formData);

      const whatsappMessage = `New Freelancer OS Application%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APortfolio: ${formData.portfolio}%0ASkill Category: ${formData.skill}%0AExperience: ${formData.experience} years%0AServices: ${formData.services}%0AWhy Join OS: ${formData.why}%0AWhat Makes You Different: ${formData.unique}%0AEarning Goal: ${formData.earning}%0ASample Work Link: ${formData.filelink}`;
      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        skill: "",
        experience: "",
        services: "",
        why: "",
        unique: "",
        earning: "",
        filelink: "",
      });
      setOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Rocket className="h-5 w-5" />
          Join Freelancer OS
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Freelancer OS</DialogTitle>
          <DialogDescription>
            AD Web Comic Agency's premium freelancer growth system
          </DialogDescription>
        </DialogHeader>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-4">
          <p className="text-foreground font-semibold mb-2 text-sm">
            Freelancer OS is a premium freelancer growth system priced at ₹999/month.
          </p>
          <p className="text-muted-foreground text-sm mb-3">
            Join using the payment link below:
          </p>
          <a
            href="https://rzp.io/rzp/AhswP9RX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            Pay ₹999/month via Razorpay
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="os-name">Full Name</Label>
              <Input
                id="os-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="os-email">Email</Label>
              <Input
                id="os-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="os-phone">Phone Number</Label>
              <Input
                id="os-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                required
              />
            </div>

            <div>
              <Label htmlFor="os-portfolio">Portfolio Link</Label>
              <Input
                id="os-portfolio"
                type="url"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://yourportfolio.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="os-skill">Skill Category</Label>
              <Select value={formData.skill} onValueChange={(value) => setFormData({ ...formData, skill: value })}>
                <SelectTrigger id="os-skill">
                  <SelectValue placeholder="Select your skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                  <SelectItem value="content-writing">Content Writing</SelectItem>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                  <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="os-experience">Years of Experience</Label>
              <Input
                id="os-experience"
                type="number"
                min="0"
                max="50"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g., 3"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="os-services">What services do you offer?</Label>
            <Textarea
              id="os-services"
              value={formData.services}
              onChange={(e) => setFormData({ ...formData, services: e.target.value })}
              placeholder="List the services you provide..."
              rows={2}
              required
            />
          </div>

          <div>
            <Label htmlFor="os-why">Why do you want to join Freelancer OS?</Label>
            <Textarea
              id="os-why"
              value={formData.why}
              onChange={(e) => setFormData({ ...formData, why: e.target.value })}
              placeholder="Tell us your motivation..."
              rows={2}
              required
            />
          </div>

          <div>
            <Label htmlFor="os-unique">What makes you different?</Label>
            <Textarea
              id="os-unique"
              value={formData.unique}
              onChange={(e) => setFormData({ ...formData, unique: e.target.value })}
              placeholder="What sets you apart from others?"
              rows={2}
              required
            />
          </div>

          <div>
            <Label htmlFor="os-earning">Expected Monthly Earning Goal</Label>
            <Input
              id="os-earning"
              value={formData.earning}
              onChange={(e) => setFormData({ ...formData, earning: e.target.value })}
              placeholder="e.g., ₹50,000"
              required
            />
          </div>

          <div>
            <Label htmlFor="os-filelink">Attach Sample Work (Upload Link)</Label>
            <Input
              id="os-filelink"
              type="url"
              value={formData.filelink}
              onChange={(e) => setFormData({ ...formData, filelink: e.target.value })}
              placeholder="https://drive.google.com/... or https://dropbox.com/..."
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Upload your sample work to Google Drive, Dropbox, or similar and paste the link here
            </p>
          </div>

          <Button type="submit" className="w-full">
            Submit Application via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
