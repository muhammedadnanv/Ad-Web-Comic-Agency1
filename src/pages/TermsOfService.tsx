import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-sm">Last Updated: September 26, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p>
                By engaging with Ad Web Comic Agency, you agree to abide by the following terms regarding our services. 
                These terms govern your interaction with us and the scope of our engagement.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You agree to provide accurate business information and requirements for your website.</li>
                <li>You will provide feedback and approvals promptly to ensure project timelines are maintained.</li>
                <li>Use of our services implies acceptance of these terms.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Service Scope</h2>
              <p>
                Ad Web Comic Agency specializes in designing and delivering static websites for service-based businesses. 
                Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom static website development</li>
                <li>Responsive design optimized for all devices</li>
                <li>Branding integration (logos, color schemes, fonts)</li>
                <li>Basic content structuring and layout</li>
              </ul>
              <p className="mt-4"><strong>Limitations:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Services are delivered strictly as described in the project proposal.</li>
                <li>Additional features or functionalities outside the agreed scope will require a separate agreement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upon completion of the project and full approval, rights to the website and deliverables are transferred to the client.</li>
                <li>Any pre-existing agency assets or third-party tools used remain the property of Ad Web Comic Agency.</li>
                <li>Clients are granted the right to use the delivered website for their intended business purposes.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Confidentiality</h2>
              <p>We handle all client information with care and confidentiality:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Client data is never shared with third parties without consent.</li>
                <li>Sensitive project details are managed securely.</li>
                <li>Both agency and client agree to maintain confidentiality throughout and after the project.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our liability is limited strictly to the services provided as part of the static website project.</li>
                <li>We are not responsible for indirect, incidental, or consequential damages.</li>
                <li>Websites are delivered "as-is" based on agreed specifications.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Governing Law</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>These terms are governed by the laws of India.</li>
                <li>Any disputes arising from these terms will be resolved in the courts located in Kozhikode, Kerala.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Contact Information</h2>
              <p>For questions or clarifications regarding these Terms & Conditions:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> adwebcomicagency@gmail.com</li>
                <li><strong>Phone:</strong> +91 9656778508</li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.link/7s1649" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Click to Chat</a></li>
              </ul>
            </section>

            <div className="pt-6 border-t">
              <p className="text-sm">© 2025 Ad Web Comic Agency. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
