import { Phone, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-4 px-4 text-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/assets/anchor_life_logo-removebg-preview-DE8-uPpR.png"
            alt="Anchor Life"
            className="h-20 w-auto object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight cursor-default select-none">
          Don't Overpay for Auto Insurance —{" "}
          <span className="text-primary">Get Your Free Quote Now!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Compare rates from top carriers in minutes. Our licensed agents are standing by to help you save.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+19412496799"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/30 animate-pulse-scale"
          >
            <Phone className="w-6 h-6" />
            (941) 249-6799
          </a>

        </div>



        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          {/* <img
            src="/assets/agent (1).gif"
            alt="Emily avatar"
            className="w-8 h-8 rounded-full border-2 border-primary object-cover"
          /> */}
          <span>Licensed Agents Available Now</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
