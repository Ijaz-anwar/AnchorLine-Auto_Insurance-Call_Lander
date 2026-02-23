import { Phone, Clock } from "lucide-react";

const FinalCTA = () => {
    const handleCallClick = () => {
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
            (window as any).fbq("track", "Contact", { content_name: "Final CTA Button" });
        }
    };

    return (
        <section className="py-8 px-4">
            <div className="max-w-md mx-auto text-center space-y-4">
                <p className="text-foreground font-bold text-lg">
                    Ready to start saving?
                </p>
                <p className="text-muted-foreground text-sm">
                    Speak with a licensed agent now — no obligation, no pressure.
                </p>
                <a
                    href="tel:+19412496799"
                    onClick={handleCallClick}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/30 animate-subtle-shake"
                >
                    <Phone className="w-6 h-6" />
                    Call Now — (941) 249-6799
                </a>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
                    <Clock className="w-3 h-3" />
                    <span>Available Mon–Fri, 9AM – 5PM EST</span>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
