import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";
import { Share2, Copy, Users, Gift, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const WEBSITE_URL = "https://adwebcomicagency.vercel.app/";

const referrerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional(),
});

const referredSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional(),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15),
  projectDetails: z.string().trim().min(10, "Please describe your project").max(1000),
});

const generateReferralCode = (name: string): string => {
  const cleanName = name.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 4);
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${cleanName}${randomStr}`;
};

export const ReferralSignupModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      referrerSchema.parse(formData);

      const referralCode = generateReferralCode(formData.name);
      const referralLink = `${WEBSITE_URL}?ref=${referralCode}`;

      const { error } = await supabase.from("referrals").insert({
        referral_code: referralCode,
        referrer_name: formData.name,
        referrer_email: formData.email,
        referrer_company: formData.company || null,
        discount_percentage: 10,
      });

      if (error) throw error;

      setGeneratedCode(referralCode);
      setGeneratedLink(referralLink);
      setSuccess(true);
      toast.success("Welcome to our referral program!");

      // Send welcome email (non-blocking)
      supabase.functions.invoke("send-referral-email", {
        body: {
          type: "welcome_referrer",
          to: formData.email,
          data: {
            name: formData.name,
            referralCode,
            referralLink,
            discountPercentage: 10,
          },
        },
      }).catch((emailError) => {
        console.log("Email notification skipped:", emailError);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", company: "" });
    setSuccess(false);
    setGeneratedCode("");
    setGeneratedLink("");
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { setOpen(isOpen); if (!isOpen) resetForm(); }}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
          <Share2 className="h-5 w-5" />
          Join Referral Program
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            B2B Referral Program
          </DialogTitle>
          <DialogDescription>
            Refer businesses to us and earn 10% commission on every successful project!
          </DialogDescription>
        </DialogHeader>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="ref-name">Full Name *</Label>
              <Input
                id="ref-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="ref-email">Email *</Label>
              <Input
                id="ref-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@company.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="ref-company">Company (Optional)</Label>
              <Input
                id="ref-company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company name"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">What you'll get:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Unique referral link to share</li>
                <li>• 10% commission on successful referrals</li>
                <li>• Your referrals get 10% off their first project</li>
              </ul>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating your link..." : "Get My Referral Link"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 mt-4">
            <div className="text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">You're all set!</h3>
              <p className="text-muted-foreground">Check your email for confirmation</p>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <Label className="text-sm font-medium">Your Referral Code</Label>
              <div className="flex gap-2 mt-1">
                <Input value={generatedCode} readOnly className="font-mono text-lg" />
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(generatedCode, "Code")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Your Referral Link</Label>
              <div className="flex gap-2 mt-1">
                <Input value={generatedLink} readOnly className="text-sm" />
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(generatedLink, "Link")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full" onClick={() => setOpen(false)}>
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

interface ReferralFormProps {
  referralCode: string;
  referrerName: string;
  discountPercentage: number;
}

export const ReferralForm = ({ referralCode, referrerName, discountPercentage }: ReferralFormProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      referredSchema.parse(formData);

      // Get referral ID
      const { data: referral, error: refError } = await supabase
        .from("referrals")
        .select("id, referrer_email, referrer_name")
        .eq("referral_code", referralCode)
        .maybeSingle();

      if (refError || !referral) throw new Error("Invalid referral code");

      // Create conversion record
      const { error: convError } = await supabase.from("referral_conversions").insert({
        referral_id: referral.id,
        referred_name: formData.name,
        referred_email: formData.email,
        referred_company: formData.company || null,
        referred_phone: formData.phone,
        project_details: formData.projectDetails,
        discount_applied: discountPercentage,
      });

      if (convError) throw convError;

      // Subscribe to marketing
      await supabase.from("marketing_subscribers").upsert({
        email: formData.email,
        name: formData.name,
        company: formData.company || null,
        source: "referral",
      }, { onConflict: "email" });

      setSuccess(true);
      toast.success("Thank you! We'll be in touch soon.");

      // Send emails (non-blocking)
      Promise.all([
        supabase.functions.invoke("send-referral-email", {
          body: {
            type: "welcome_referred",
            to: formData.email,
            data: {
              name: formData.name,
              referrerName: referral.referrer_name,
              discountPercentage,
            },
          },
        }),
        supabase.functions.invoke("send-referral-email", {
          body: {
            type: "referral_used",
            to: referral.referrer_email,
            data: {
              name: referral.referrer_name,
              referralCode,
              referralLink: `${WEBSITE_URL}?ref=${referralCode}`,
            },
          },
        }),
      ]).catch((emailError) => {
        console.log("Email notifications skipped:", emailError);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            Your {discountPercentage}% discount has been applied. Our team will contact you shortly!
          </p>
          <Button onClick={() => window.location.href = WEBSITE_URL}>
            Explore Our Services
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="bg-primary/10 text-primary text-center py-2 px-4 rounded-lg mb-4">
          <span className="text-2xl font-bold">{discountPercentage}% OFF</span>
          <p className="text-sm">Referred by {referrerName}</p>
        </div>
        <CardTitle>Get Started with Your Project</CardTitle>
        <CardDescription>
          Fill in your details and we'll reach out with your exclusive discount!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="referred-name">Full Name *</Label>
            <Input
              id="referred-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="referred-email">Email *</Label>
            <Input
              id="referred-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="referred-company">Company</Label>
            <Input
              id="referred-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
            />
          </div>

          <div>
            <Label htmlFor="referred-phone">Phone Number *</Label>
            <Input
              id="referred-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div>
            <Label htmlFor="referred-details">Project Details *</Label>
            <Textarea
              id="referred-details"
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              placeholder="Tell us about your project requirements..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Claim My Discount"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export const ReferralLandingHandler = () => {
  const [referralData, setReferralData] = useState<{
    code: string;
    referrerName: string;
    discountPercentage: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get("ref");

    if (refCode) {
      fetchReferralData(refCode);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchReferralData = async (code: string) => {
    try {
      const { data, error } = await supabase
        .from("referrals")
        .select("referral_code, referrer_name, discount_percentage")
        .eq("referral_code", code)
        .eq("is_active", true)
        .maybeSingle();

      if (data && !error) {
        setReferralData({
          code: data.referral_code,
          referrerName: data.referrer_name,
          discountPercentage: data.discount_percentage,
        });
      }
    } catch (error) {
      console.error("Error fetching referral:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;
  if (!referralData) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ReferralForm
          referralCode={referralData.code}
          referrerName={referralData.referrerName}
          discountPercentage={referralData.discountPercentage}
        />
        <Button
          variant="ghost"
          className="w-full mt-4"
          onClick={() => {
            window.history.replaceState({}, "", window.location.pathname);
            setReferralData(null);
          }}
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
};
