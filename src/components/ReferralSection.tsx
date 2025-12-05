import { ReferralSignupModal } from "./ReferralSystem";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Share2, Gift, TrendingUp, Users } from "lucide-react";

export const ReferralSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Share2,
      title: "Share Your Link",
      description: "Get a unique referral link to share with other businesses",
    },
    {
      icon: Gift,
      title: "10% Discount",
      description: "Your referrals get 10% off their first project with us",
    },
    {
      icon: TrendingUp,
      title: "Earn Commission",
      description: "Receive 10% commission on every successful referral",
    },
    {
      icon: Users,
      title: "Grow Together",
      description: "Build a network of successful business partnerships",
    },
  ];

  return (
    <section
      id="referral"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            B2B Referral Program
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive referral program and earn rewards for connecting businesses 
            with our creative digital solutions. It's a win-win for everyone!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <ReferralSignupModal />
          <p className="text-sm text-muted-foreground mt-4">
            Already a partner? Share your referral link from your welcome email.
          </p>
        </div>
      </div>
    </section>
  );
};
