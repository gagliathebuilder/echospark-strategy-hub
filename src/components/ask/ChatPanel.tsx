
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expert, Message } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SendHorizonal, User } from "lucide-react";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

interface ChatPanelProps {
  expert: Expert;
}

const ChatPanel = ({ expert }: ChatPanelProps) => {
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
    <section className="py-16 bg-gradient-to-b from-echo-dark/90 to-echo-dark/95">
      <div className="echo-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card-dark overflow-hidden"
        >
          {/* Chat header */}
          <div className="p-4 border-b border-echo-muted/20 flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
              <p className="text-sm text-echo-secondary">{expert.role}</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-4 h-[400px] overflow-y-auto flex flex-col space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.sender === "user"
                        ? "bg-echo-primary text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
                        : "bg-echo-muted/30 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
                    } p-4`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {message.sender === "expert" ? (
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-echo-muted/30 flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <span className="text-sm font-medium">
                        {message.sender === "user" ? "You" : expert.name}
                      </span>
                    </div>
                    {/* Format message with line breaks */}
                    <div className="whitespace-pre-line">{message.text}</div>
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
                  <div className="bg-echo-muted/30 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl p-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
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
                  <Card className="max-w-[80%] bg-echo-muted/10 border border-echo-secondary/30 p-4 space-y-3">
                    <h4 className="text-white font-semibold">{expert.cta}</h4>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-echo-muted/20 text-white border-echo-muted/30"
                      />
                      <Button onClick={handleSubmitEmail} className="bg-echo-secondary text-echo-dark hover:bg-echo-secondary/90">
                        Send
                      </Button>
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
                  <div className="max-w-[80%] bg-echo-secondary/20 text-white rounded-2xl p-4 border border-echo-secondary/30">
                    <p>Thanks for your interest! A member of the EchoSpark team will be in touch soon.</p>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </AnimatePresence>
          </div>

          {/* Chat input */}
          <div className="p-4 border-t border-echo-muted/20">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping || submitted}
                className="bg-echo-muted/20 text-white border-echo-muted/30"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping || submitted}
                className="bg-echo-primary text-white hover:bg-echo-primary/90"
              >
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatPanel;
