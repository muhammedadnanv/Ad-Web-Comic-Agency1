import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of web development services including Basic Websites, Custom Static Websites, Business Management Solutions, White-Label Website Plans, Android Mobile App Development, and Website Care Kit maintenance packages. Each service is tailored to meet specific business needs and budgets."
    },
    {
      question: "How much does a website cost?",
      answer: "Our pricing varies based on your requirements. Basic websites start at ₹37,281 for a lifetime solution with 1-3 pages, domain, and hosting. Custom static websites are priced based on your project complexity. We also offer White-Label solutions at ₹22,000 per project for agencies, and monthly Website Care Kit packages at ₹5,000."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on project complexity. A basic website typically takes 1-2 weeks, while custom static websites may take 2-4 weeks. Android mobile apps can take 4-8 weeks depending on features. We provide a detailed timeline during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing technical support?",
      answer: "Yes! All our packages include technical support. Basic websites include 5 months of support, Custom websites come with 6-12 months, and White-Label projects include 1 month post-launch support. We also offer our Website Care Kit package for ongoing maintenance, updates, and 24/7 technical support."
    },
    {
      question: "What is included in the Website Care Kit?",
      answer: "Our Website Care Kit (₹5,000/month) includes regular security updates, up to 5 content updates per month, performance monitoring, backup & recovery, technical support, bug fixes, uptime monitoring, and monthly performance reports. It's designed to keep your website secure, updated, and running smoothly."
    },
    {
      question: "Do I own the website after completion?",
      answer: "Absolutely! Once the project is completed and payment is made, you have complete ownership of your website, including all source code, content, and assets. We believe in transparency and full ownership rights for our clients."
    },
    {
      question: "Can you help with domain and hosting?",
      answer: "Yes! Most of our packages include domain registration (1 year) and hosting setup (10 years for Basic and Custom websites). We handle all technical aspects including SSL certificates, DNS configuration, and server setup so you don't have to worry about the technical details."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "Yes, we offer Android-only mobile app development. Our apps are built using modern technologies with custom UI/UX design, API integration, and full Google Play Store deployment support. Pricing is based on your specific requirements and features needed."
    },
    {
      question: "What makes your services different?",
      answer: "We offer one-time payment solutions with lifetime ownership and no recurring fees (except optional maintenance). As a solo-run agency, you work directly with the founder, ensuring personalized attention, clear communication, and faster decision-making. We focus on quality, transparency, and long-term client relationships."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply click on 'Get Started' for any service, or contact us via WhatsApp, email, or our contact form. We'll schedule a free consultation to understand your needs, provide a detailed quote, and outline the project timeline. We respond within 24 hours to all inquiries."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
