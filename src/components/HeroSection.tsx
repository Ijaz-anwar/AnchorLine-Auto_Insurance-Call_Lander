import { Phone, Shield } from "lucide-react";

const HeroSection = () => {
  const handleCallClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Contact", { content_name: "Hero Call Button" });
    }
  };

  return (
    <section className="relative bg-background pt-2 pb-4 px-4 text-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/assets/anchor_life_logo-removebg-preview-DE8-uPpR.png"
            alt="Anchor Life"
            className="h-16 w-auto object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2 leading-tight cursor-default select-none">
          Don't Overpay for Auto Insurance —{" "}
          <span className="text-foreground">Get Your Free Quote Now!</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
          Compare rates from top carriers in minutes. Our licensed agents are standing by to help you save.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <a
            href="tel:+19412496799"
            onClick={handleCallClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/30 animate-subtle-shake"
          >
            <Phone className="w-6 h-6" />
            (941) 249-6799
          </a>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Licensed Agents Available Now</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
