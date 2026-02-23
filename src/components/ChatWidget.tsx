import { useState, useEffect, useCallback, useRef } from "react";
import { Phone, MessageCircle, Shield } from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user" | "system";
  text: string;
  buttons?: { label: string; value: string }[];
};

const AGENT_AVATAR = "/assets/agent (1).gif";

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : [];
  });
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<number>(() => {
    const saved = localStorage.getItem("chat_step");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [closed, setClosed] = useState<boolean>(() => {
    const saved = localStorage.getItem("chat_closed");
    return saved === "true";
  });
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const resetChat = useCallback(() => {
    localStorage.removeItem("chat_messages");
    localStorage.removeItem("chat_step");
    localStorage.removeItem("chat_closed");
    setMessages([]);
    setStep(0);
    setClosed(false);
  }, []);

  // Persistence
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    localStorage.setItem("chat_step", step.toString());
    localStorage.setItem("chat_closed", closed.toString());
  }, [messages, step, closed]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const addBotMessage = useCallback((text: string, buttons?: Message["buttons"]) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "bot", text, buttons },
      ]);
    }, 1200);
  }, []);

  // Initial flow - only if no messages exist
  useEffect(() => {
    if (step === 0 && messages.length === 0) {
      addBotMessage("Hi! I'm Emily, your personal car insurance assistant. Let's see what you qualify for");
      setTimeout(() => {
        addBotMessage(
          "You might qualify for better Auto Insurance pricing",
          [{ label: "Get Started", value: "start" }]
        );
        setStep(1);
      }, 2000);
    }
  }, [step, addBotMessage, messages.length]);

  const handleButton = (value: string) => {
    if (closed && value !== "no") return;

    if (value === "start") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "user", text: "Get Started" },
      ]);
      setTimeout(() => {
        addBotMessage(
          "Great! Do you currently have any Auto Insurance Coverage?",
          [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]
        );
        setStep(2);
      }, 500);
    } else if (value === "yes") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "user", text: "Yes" },
      ]);
      setTimeout(() => {
        addBotMessage(
          "How much are you currently paying for your auto insurance?",
          [
            { label: "Under $100", value: "under_100" },
            { label: "Over $100", value: "over_100" },
          ]
        );
      }, 500);
    } else if (value === "under_100" || value === "over_100") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "user", text: value === "under_100" ? "Under $100" : "Over $100" },
      ]);

      // Step 1: "Awesome!"
      setTimeout(() => {
        addBotMessage("I’ll help you review different car insurance choices so you can find coverage that fits your needs and budget");
      }, 500);
      // Step 2: Coverage comparison
      setTimeout(() => {
        addBotMessage("Just one quick step left 🚗 Connect with a licensed agent to review your potential savings in minutes.");
      }, 3000);
      // Step 3: Call instructions
      setTimeout(() => {
        addBotMessage("Awesome! You're almost done—just tap the number below to speak with a specialist.");
      }, 5500);
      // Step 4: Phone CTA + agent availability + timer
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: "bot",
            text: "CALL_CTA",
          },
        ]);
        setStep(3);
      }, 8000);
    } else if (value === "no") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "user", text: "No" },
      ]);
      setTimeout(() => {
        addBotMessage(
          "Unfortunately, we're currently only able to assist drivers who have existing coverage. Thank you for your interest!"
        );
        setTimeout(() => setClosed(true), 2000);
      }, 500);
    }
  };

  return (
    <section id="quote-chat" className="pb-4 px-4 scroll-mt-20">
      <div className="max-w-md mx-auto bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={AGENT_AVATAR} alt="Emily" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <p className="text-primary-foreground font-semibold text-sm">Emily</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-primary-foreground/80 text-xs">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetChat}
              className="text-primary-foreground/60 hover:text-primary-foreground text-[10px] border border-primary-foreground/20 px-2 py-0.5 rounded transition-colors"
            >
              Reset
            </button>
            <div className="flex items-center gap-1 text-primary-foreground/80 text-xs">
              <MessageCircle className="w-3 h-3" />
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="p-4 space-y-3 min-h-[300px] max-h-[400px] overflow-y-auto">
          {messages.map((msg) => {
            if (msg.text === "CALL_CTA") {
              return (
                <div key={msg.id} className="flex flex-col items-start gap-3 w-full">
                  <a
                    href="tel:+19412496799"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-[1.02] animate-pulse-scale"
                  >
                    <Phone className="w-5 h-5" />
                    Call (941) 249-6799
                  </a>
                  <div className="text-xs text-primary font-semibold px-2">
                    We currently have 3 agents available. We are available from 9:00AM to 5PM EST
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {msg.sender === "bot" && (
                    <img src={AGENT_AVATAR} alt="Emily" className="w-7 h-7 rounded-full self-end" />
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.buttons && !closed && (
                  <div className="flex gap-2 mt-2 ml-9">
                    {msg.buttons.map((btn) => (
                      <button
                        key={btn.value}
                        onClick={() => handleButton(btn.value)}
                        className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40 rounded-full text-sm font-medium transition-colors"
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}


          {typing && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <img src={AGENT_AVATAR} alt="Emily" className="w-7 h-7 rounded-full" />
              <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Trust Markers */}
        <div className="px-4 py-3 bg-card border-t border-border flex flex-wrap items-center justify-center gap-4 text-muted-foreground/60 text-[10px] font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">★ ★ ★ ★ ★</span>
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>Real-time Rates</span>
          </div>
        </div>

        {closed && (
          <div className="px-4 py-3 bg-secondary/50 text-center text-muted-foreground text-xs border-t border-border">
            This chat session has ended.
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatWidget;
