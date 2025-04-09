
import { useState, RefObject, useEffect } from "react";
import { motion } from "framer-motion";
import { Expert, Message } from "@/types/expert";
import { v4 as uuidv4 } from 'uuid';
import { generateAIResponse } from "@/utils/aiService";
import { toast } from "@/components/ui/use-toast";

// Import refactored components
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";

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
  const [isTyping, setIsTyping] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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

  const handleSendMessage = async (inputValue: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Ensure chat panel is visible
    if (chatRef?.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }

    try {
      // Generate AI response
      const responseText = await generateAIResponse(expert, inputValue);
      
      const response: Message = {
        id: uuidv4(),
        sender: "expert",
        text: responseText,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, response]);
      
      // Show CTA after first answer if not already shown
      if (!showCta) {
        setTimeout(() => setShowCta(true), 1000);
      }
    } catch (error) {
      console.error("Error in chat response:", error);
      toast({
        title: "Error",
        description: "Unable to get a response. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmitCta = () => {
    setSubmitted(true);
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
          <ChatHeader expert={expert} />

          {/* Chat messages */}
          <ChatMessages 
            messages={messages}
            expertName={expert.name}
            expertAvatar={expert.avatar}
            isTyping={isTyping}
            showCta={showCta}
            submitted={submitted}
            ctaMessage={expert.cta}
            onSubmitCta={handleSubmitCta}
          />

          {/* Chat input */}
          <ChatInput 
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
            isSubmitted={submitted}
            expertRole={expert.role}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ChatPanel;
