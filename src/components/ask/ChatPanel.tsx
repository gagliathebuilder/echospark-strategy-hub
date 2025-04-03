
import { useState, useRef, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expert, Message } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SendHorizonal, User, AlertCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatPanelProps {
  expert: Expert;
  chatRef?: RefObject<HTMLDivElement>;
}

const ChatPanel = ({ expert, chatRef }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      sender: "expert",
      text: expert.introMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when expert changes
  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        sender: "expert",
        text: expert.introMessage,
        timestamp: new Date(),
      },
    ]);
    setShowCta(false);
    setSubmitted(false);
  }, [expert]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Ensure chat panel is visible
    if (chatRef?.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Simulate expert typing
    setTimeout(() => {
      let response: Message;
      
      // If it's the first question, use sample answer
      if (messages.length === 1) {
        response = {
          id: uuidv4(),
          sender: "expert",
          text: expert.sampleAnswer,
          timestamp: new Date(),
        };
        
        // Show CTA after first answer
        setTimeout(() => setShowCta(true), 1000);
      } else {
        // For subsequent questions, provide a fallback response
        response = {
          id: uuidv4(),
          sender: "expert",
          text: `Thanks for your follow-up question! This simulated conversation has a limited scope. For a real consultation with the EchoSpark team, please provide your email below.`,
          timestamp: new Date(),
        };
        setShowCta(true);
      }
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSubmitEmail = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Here you would normally send this to your backend
    setSubmitted(true);
    toast.success("Thanks for your interest! We'll be in touch soon.");
  };

  return (
    <section id="chat-panel" className="py-16 bg-gradient-to-b from-echo-dark/90 to-echo-dark/95">
      <div className="echo-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-xl shadow-2xl border border-echo-muted/20 bg-echo-dark/80 backdrop-blur-lg flex flex-col"
        >
          {/* Chat header */}
          <div className="p-6 border-b border-echo-muted/20 flex items-center space-x-4 bg-echo-dark/90 sticky top-0 z-10">
            <Avatar className="h-14 w-14 border-2 border-echo-secondary/30">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold text-white">{expert.name}</h3>
              <p className="text-echo-secondary">{expert.role}</p>
            </div>
          </div>

          {/* Chat messages */}
          <ScrollArea className="h-[450px] flex-grow">
            <div className="p-6 flex flex-col space-y-6">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        message.sender === "user"
                          ? "bg-echo-primary/90 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md"
                          : "bg-echo-muted/40 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md border border-echo-muted/20"
                      } p-5`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        {message.sender === "expert" ? (
                          <Avatar className="h-8 w-8 border border-echo-secondary/30">
                            <AvatarImage src={expert.avatar} alt={expert.name} />
                            <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-echo-primary/70 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <span className="text-sm font-medium">
                          {message.sender === "user" ? "You" : expert.name}
                        </span>
                      </div>
                      
                      {/* Format message with line breaks */}
                      <div className="whitespace-pre-line text-white/90 leading-relaxed">
                        {message.text}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-echo-muted/40 text-white rounded-2xl p-4 border border-echo-muted/20 shadow-md">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 border border-echo-secondary/30">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                          <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                          <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* CTA message */}
                {showCta && !submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <Card className="max-w-[85%] bg-gradient-to-br from-echo-secondary/10 to-echo-primary/10 border border-echo-secondary/30 p-5 space-y-4 rounded-xl shadow-lg">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-echo-secondary mt-0.5" />
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-2">Talk to the real EchoSpark team</h4>
                          <p className="text-white/70 text-sm mb-4">{expert.cta}</p>
                          
                          <div className="flex gap-2">
                            <Input
                              type="email"
                              placeholder="Your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-secondary/50 focus:ring-1 focus:ring-echo-secondary/50"
                            />
                            <Button 
                              onClick={handleSubmitEmail} 
                              className="bg-echo-secondary text-echo-dark hover:bg-echo-secondary/90 font-medium"
                            >
                              Send
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}

                {/* Thank you message after CTA submission */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[85%] bg-echo-secondary/20 text-white rounded-2xl p-5 border border-echo-secondary/30 shadow-md">
                      <p className="text-white/90">Thanks for your interest! A member of the EchoSpark team will be in touch soon.</p>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </AnimatePresence>
            </div>
          </ScrollArea>

          {/* Chat input */}
          <div className="p-6 border-t border-echo-muted/20 bg-echo-dark/80 sticky bottom-0">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping || submitted}
                className="bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-primary/50 focus:ring-1 focus:ring-echo-primary/50 py-6"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping || submitted}
                className="bg-echo-primary text-white hover:bg-echo-primary/90 px-6"
                size="icon"
              >
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-white/50 text-xs">This is a simulated conversation with a fictional EchoSpark expert</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatPanel;
