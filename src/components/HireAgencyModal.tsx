import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { z } from "zod";
import { Briefcase } from "lucide-react";

const hireAgencySchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  agency: z.string().trim().min(1, { message: "Agency/Brand name is required" }).max(200),
  requirements: z.string().trim().min(1, { message: "Project requirements are required" }).max(2000),
  budget: z.string().trim().min(1, { message: "Budget range is required" }).max(100),
});

export const HireAgencyModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    requirements: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      hireAgencySchema.parse(formData);

      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AAgency: ${formData.agency}%0AProject Requirements: ${formData.requirements}%0ABudget Range: ${formData.budget}`;
      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        agency: "",
        requirements: "",
        budget: "",
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
          <Briefcase className="h-5 w-5" />
          Hire Our Agency
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Hire Our Agency</DialogTitle>
          <DialogDescription>
            Outsource your client projects to us. We deliver quality work on time, every time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="hire-name">Full Name</Label>
            <Input
              id="hire-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="hire-email">Email</Label>
            <Input
              id="hire-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="hire-phone">Phone Number</Label>
            <Input
              id="hire-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div>
            <Label htmlFor="hire-agency">Agency / Brand Name</Label>
            <Input
              id="hire-agency"
              value={formData.agency}
              onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
              placeholder="Your agency or brand name"
              required
            />
          </div>

          <div>
            <Label htmlFor="hire-requirements">Project Requirements</Label>
            <Textarea
              id="hire-requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Describe your project requirements in detail..."
              rows={5}
              required
            />
          </div>

          <div>
            <Label htmlFor="hire-budget">Budget Range</Label>
            <Input
              id="hire-budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="e.g., ₹50,000 - ₹1,00,000"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
