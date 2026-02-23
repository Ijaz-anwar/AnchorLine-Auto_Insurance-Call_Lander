import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-muted-foreground text-xs leading-relaxed cursor-default select-none">
          <span className="font-medium">Advertorial Disclaimer:</span> This website is an advertisement and not a news article or consumer protection update. The information provided is for general informational purposes only, and results may vary. Anchor Line Insurance is an independent insurance referral service and does not provide insurance directly. We connect consumers with licensed insurance agents who may offer quotes from multiple insurance carriers. Coverage availability and rates vary by state and individual circumstances.
        </p>

        <p className="text-muted-foreground text-xs leading-relaxed">
          This website is not affiliated with or endorsed by any government agency. The owner of this website may receive compensation when users request quotes or connect with insurance providers through this site.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs">
          <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
          <span className="text-border">|</span>
          <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
        </div>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} AnchorLine Insurance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
