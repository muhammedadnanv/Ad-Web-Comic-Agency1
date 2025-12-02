import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold">
            Ad Web Comic <span className="text-primary">Agency</span>
          </div>
          <p className="text-muted-foreground">
            Transforming Ideas into Digital Reality
          </p>
          <div className="flex justify-center gap-6 my-4">
            <a 
              href="https://www.instagram.com/_adwebcomicagency._/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adwebcomicagency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:adwebcomicagency@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-4 text-xs sm:text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <a href="https://forms.gle/Yzirg3dPYVqnnyLK7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              White Label Partner
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ad Web Comic Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
