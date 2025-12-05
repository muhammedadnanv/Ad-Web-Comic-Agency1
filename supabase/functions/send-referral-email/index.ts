import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const WEBSITE_URL = "https://adwebcomicagency.vercel.app/";

interface EmailRequest {
  type: "welcome_referrer" | "referral_used" | "welcome_referred" | "marketing";
  to: string;
  data: {
    name?: string;
    referralCode?: string;
    referralLink?: string;
    discountPercentage?: number;
    referrerName?: string;
    subject?: string;
    content?: string;
  };
}

const getEmailTemplate = (type: string, data: EmailRequest["data"]) => {
  const baseStyles = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
  `;

  const buttonStyle = `
    display: inline-block;
    background-color: #f59e0b;
    color: #000000;
    padding: 14px 28px;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    margin: 20px 0;
  `;

  switch (type) {
    case "welcome_referrer":
      return {
        subject: "🎉 Welcome to Ad Web Comic Agency Referral Program!",
        html: `
          <div style="${baseStyles}">
            <h1 style="color: #f59e0b; text-align: center;">Welcome to Our Referral Program!</h1>
            <p>Hi ${data.name},</p>
            <p>Thank you for joining our B2B referral program! You're now part of an exclusive network of partners helping businesses grow through creative digital solutions.</p>
            
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px; margin: 20px 0;">
              <h2 style="margin: 0 0 10px 0; color: #92400e;">Your Unique Referral Code</h2>
              <p style="font-size: 24px; font-weight: bold; color: #d97706; margin: 0;">${data.referralCode}</p>
            </div>
            
            <p><strong>Your Referral Link:</strong></p>
            <p style="word-break: break-all; background: #f3f4f6; padding: 12px; border-radius: 8px;">
              <a href="${data.referralLink}" style="color: #f59e0b;">${data.referralLink}</a>
            </p>
            
            <h3>How It Works:</h3>
            <ul>
              <li>Share your unique referral link with other businesses</li>
              <li>When they sign up, they get <strong>${data.discountPercentage}% off</strong> their first project</li>
              <li>You receive <strong>${data.discountPercentage}% commission</strong> on successful referrals</li>
            </ul>
            
            <a href="${WEBSITE_URL}" style="${buttonStyle}">Visit Our Website</a>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Questions? Reply to this email or visit ${WEBSITE_URL}
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="text-align: center; color: #9ca3af; font-size: 12px;">
              Ad Web Comic Agency | Creative Digital Solutions<br>
              <a href="${WEBSITE_URL}" style="color: #f59e0b;">${WEBSITE_URL}</a>
            </p>
          </div>
        `,
      };

    case "referral_used":
      return {
        subject: "🎊 Someone Used Your Referral Code!",
        html: `
          <div style="${baseStyles}">
            <h1 style="color: #10b981; text-align: center;">Great News!</h1>
            <p>Hi ${data.name},</p>
            <p>Someone just used your referral code <strong>${data.referralCode}</strong> to inquire about our services!</p>
            
            <div style="background: linear-gradient(135deg, #d1fae5, #a7f3d0); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
              <h2 style="margin: 0; color: #065f46;">Referral Pending</h2>
              <p style="margin: 10px 0 0 0; color: #047857;">We'll notify you once the deal is confirmed!</p>
            </div>
            
            <p>Keep sharing your referral link to earn more rewards:</p>
            <p style="word-break: break-all; background: #f3f4f6; padding: 12px; border-radius: 8px;">
              <a href="${data.referralLink}" style="color: #f59e0b;">${data.referralLink}</a>
            </p>
            
            <a href="${WEBSITE_URL}" style="${buttonStyle}">Visit Our Website</a>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="text-align: center; color: #9ca3af; font-size: 12px;">
              Ad Web Comic Agency | Creative Digital Solutions<br>
              <a href="${WEBSITE_URL}" style="color: #f59e0b;">${WEBSITE_URL}</a>
            </p>
          </div>
        `,
      };

    case "welcome_referred":
      return {
        subject: `🎁 ${data.discountPercentage}% Discount Awaits You at Ad Web Comic Agency!`,
        html: `
          <div style="${baseStyles}">
            <h1 style="color: #f59e0b; text-align: center;">Welcome!</h1>
            <p>Hi ${data.name},</p>
            <p>You've been referred by <strong>${data.referrerName}</strong> to Ad Web Comic Agency - your partner for creative digital solutions!</p>
            
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
              <h2 style="margin: 0; color: #92400e;">Your Exclusive Discount</h2>
              <p style="font-size: 36px; font-weight: bold; color: #d97706; margin: 10px 0;">${data.discountPercentage}% OFF</p>
              <p style="margin: 0; color: #b45309;">On your first project with us!</p>
            </div>
            
            <h3>Our Services:</h3>
            <ul>
              <li>🎨 Web Design & Development</li>
              <li>📱 Social Media Management</li>
              <li>🎬 Video Editing & Production</li>
              <li>📈 Digital Marketing</li>
              <li>✏️ Content Creation</li>
            </ul>
            
            <p>Our team will reach out shortly to discuss how we can help your business grow!</p>
            
            <a href="${WEBSITE_URL}" style="${buttonStyle}">Explore Our Services</a>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="text-align: center; color: #9ca3af; font-size: 12px;">
              Ad Web Comic Agency | Creative Digital Solutions<br>
              <a href="${WEBSITE_URL}" style="color: #f59e0b;">${WEBSITE_URL}</a>
            </p>
          </div>
        `,
      };

    case "marketing":
      return {
        subject: data.subject || "Monthly Update from Ad Web Comic Agency",
        html: `
          <div style="${baseStyles}">
            <h1 style="color: #f59e0b; text-align: center;">${data.subject || "Monthly Update"}</h1>
            <p>Hi ${data.name},</p>
            
            ${data.content || `
              <p>Here's what's new at Ad Web Comic Agency this month!</p>
              <p>We're constantly improving our services to help your business thrive in the digital landscape.</p>
            `}
            
            <a href="${WEBSITE_URL}" style="${buttonStyle}">Visit Our Website</a>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="text-align: center; color: #9ca3af; font-size: 12px;">
              Ad Web Comic Agency | Creative Digital Solutions<br>
              <a href="${WEBSITE_URL}" style="color: #f59e0b;">${WEBSITE_URL}</a><br><br>
              <a href="${WEBSITE_URL}" style="color: #9ca3af;">Unsubscribe</a>
            </p>
          </div>
        `,
      };

    default:
      throw new Error(`Unknown email type: ${type}`);
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, to, data }: EmailRequest = await req.json();
    
    console.log(`Sending ${type} email to ${to}`);
    
    const template = getEmailTemplate(type, data);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ad Web Comic Agency <onboarding@resend.dev>",
        to: [to],
        subject: template.subject,
        html: template.html,
      }),
    });

    const emailResponse = await res.json();

    if (!res.ok) {
      console.error("Resend error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, ...emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
