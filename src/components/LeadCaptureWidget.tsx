import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const leadFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  address: z.string().trim().max(200, "Address must be less than 200 characters").optional(),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

const LeadCaptureWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    // Auto-show popup after 4 seconds if not shown before
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem("leadPopupShown");
      if (!hasShown) {
        setIsPopupOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
    localStorage.setItem("leadPopupShown", "true");
    localStorage.setItem("leadPopupShownTime", new Date().getTime().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = leadFormSchema.parse(formData);

      let leadMessage = "🎯 *New Lead Captured!*\n\n";
      leadMessage += `👤 *Name:* ${validatedData.name}\n`;
      leadMessage += `📱 *Phone:* ${validatedData.phone}\n`;

      if (validatedData.address) {
        leadMessage += `🏠 *Address:* ${validatedData.address}\n`;
      }

      if (validatedData.message) {
        leadMessage += `💬 *Message:* ${validatedData.message}\n`;
      }

      leadMessage += `\n⏰ *Time:* ${new Date().toLocaleString()}`;
      leadMessage += "\n\n_Generated via Lead Capture Widget_";

      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(leadMessage)}`;
      window.open(whatsappUrl, "_blank");

      toast.success("✅ Thank you! Your details have been sent successfully. We will contact you soon!");
      closePopup();

      // Reset form
      setFormData({ name: "", phone: "", address: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Failed to send your details. Please try again.");
      }
    }
  };

  return (
    <>
      {/* Floating Widget Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-5 right-5 z-[1000] w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        aria-label="Open contact form"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </button>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closePopup}
        >
          <div
            className="bg-background rounded-2xl p-8 max-w-[420px] w-full shadow-2xl relative animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-foreground text-center mb-2">
              Get In Touch With Us!
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Leave your details and we'll contact you soon
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />

              <Input
                type="tel"
                placeholder="Your Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12"
              />

              <Input
                type="text"
                placeholder="Your Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="h-12"
              />

              <Textarea
                placeholder="Your Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-y min-h-[80px]"
              />

              <Button type="submit" className="w-full h-12 text-base font-semibold gap-2">
                <MessageCircle className="w-5 h-5" />
                Send My Details
              </Button>
            </form>

            {/* Footer */}
            <div className="text-center mt-5 pt-5 border-t border-border">
              <a
                href="https://widgetify-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Powered by Widgetify
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadCaptureWidget;
