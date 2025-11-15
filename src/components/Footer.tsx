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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ad Web Comic Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
