import HeroSection from "@/components/HeroSection";
import ChatWidget from "@/components/ChatWidget";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ChatWidget />
      <ReviewsCarousel />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
