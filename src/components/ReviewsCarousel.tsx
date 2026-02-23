import { Star } from "lucide-react";

const reviews = [
  { name: "James T.", text: "I saved over $600 a year by switching! The process was so easy and quick." },
  { name: "Maria S.", text: "Emily was incredibly helpful and found me a much better rate than what I was paying." },
  { name: "David R.", text: "Polina was fantastic to work with. She explained everything in a way that made sense and didn’t rush me through the process. I ended up with coverage that fits my needs perfectly. I’m really happy I made the switch to Anchor Line" },
  { name: "Sarah M.", text: "I never thought I’d say this, but dealing with insurance was actually a pleasant experience, thanks to Christian. He took the time to really understand what I needed and found a policy that was perfect for me. Plus, he saved me some money in the process. Really impressed!" },
  { name: "Robert M.", text: "Best experience I've had shopping for auto insurance. Will definitely refer friends." },
  { name: "Emily P.", text: "Joel made my experience with Anchor Line so much better than I expected. He was patient with all my questions and helped me feel confident about my coverage. I left feeling like I was in good hands" },
];

const ReviewCard = ({ name, text }: { name: string; text: string }) => (
  <div className="flex-shrink-0 w-80 bg-card border border-border rounded-xl p-6 mx-3">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-foreground text-sm mb-4 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-3">
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a2332&color=fff&size=40&rounded=true`}
        alt={name}
        className="w-9 h-9 rounded-full"
      />
      <span className="text-muted-foreground text-sm font-medium">{name}</span>
    </div>
  </div>
);

const ReviewsCarousel = () => {
  return (
    <section className="py-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
        What Our Clients Say
      </h2>
      <div className="flex animate-scroll-left w-max">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} name={review.name} text={review.text} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsCarousel;
