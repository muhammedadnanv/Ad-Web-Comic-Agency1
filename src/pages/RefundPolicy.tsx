import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Payment & Refund Policy - Ad Web Comic Agency"
        description="Understand Ad Web Comic Agency's payment structure and refund policy. Milestone-based payments with 30-30-40 structure."
        canonical="https://adwebcomicagency.vercel.app/refund-policy"
      />
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Payment & Refund Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-sm">Last Updated: September 26, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Advance Payment: 30%</h2>
              <p>
                To initiate a project and secure your dedicated slot in our production schedule, a non-refundable 
                30% advance payment is required. This confirms your commitment and allows us to allocate the necessary 
                resources, including designers, developers, and project managers, exclusively for your project. This 
                initial step ensures a smooth and timely start.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Stage 2 Payment: 30%</h2>
              <p>
                An installment of 30% of the total project cost is due within 5 business days after the project 
                officially commences. This payment covers the initial design mockups, wireframing, and foundational 
                development work. It ensures that the project maintains momentum as we move from the planning phase 
                to active creation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Final Balance: 40%</h2>
              <p>
                The remaining 40% balance is due upon final project delivery, just before the official handover. This 
                includes the transfer of all project files, source code, administrative credentials, and the "go-live" 
                deployment to your hosting environment. We will provide a complete project demonstration to ensure your 
                full satisfaction before this final payment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Additional Notes</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Payment Methods:</h3>
                  <p>We accept payments via UPI, Direct Bank Transfer, and Razorpay for international clients.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Late Payments:</h3>
                  <p>
                    Timely payments are crucial for keeping the project on schedule. Delays in payments may result 
                    in a corresponding delay in project timelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cancellation Policy:</h3>
                  <p>
                    Once a project has commenced, the 30% advance payment is strictly non-refundable as it covers 
                    initial resource allocation and administrative costs.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Refund Policy Summary</h2>
              <p>Refunds may be considered under the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Non-Delivery:</strong> If we fail to deliver any work within the agreed-upon timeframe.</li>
                <li><strong>Failure to Meet Milestones:</strong> If we are unable to complete key project milestones after payments have been made.</li>
              </ul>
              <p className="mt-4">
                To request a refund, please submit a detailed email to <a href="mailto:adwebcomicagency@gmail.com" className="text-primary hover:underline">adwebcomicagency@gmail.com</a>. 
                Each request is evaluated on a case-by-case basis.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Why This Structure Protects Both Parties</h2>
              <p>
                This milestone-based payment structure is designed for mutual protection. It ensures that you, the client, 
                only pay for completed stages of work, providing transparency and accountability. For us as an agency, it 
                guarantees fair compensation for the work delivered at each phase. This fosters trust, professionalism, 
                and a healthy partnership.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact for Payment & Refund Queries</h2>
              <p>Have questions about our policy or want to discuss a new project? We're here to help.</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:adwebcomicagency@gmail.com" className="text-primary hover:underline">adwebcomicagency@gmail.com</a></li>
                <li><strong>Phone:</strong> +91 9656778508</li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.link/7s1649" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Click to Chat</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
