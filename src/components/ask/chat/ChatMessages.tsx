
import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Message } from "@/types/expert";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import CtaForm from "./CtaForm";
import ThankYouMessage from "./ThankYouMessage";

interface ChatMessagesProps {
  messages: Message[];
  expertName: string;
  expertAvatar: string;
  isTyping: boolean;
  showCta: boolean;
  submitted: boolean;
  ctaMessage: string;
  onSubmitCta: () => void;
}

const ChatMessages = ({ 
  messages, 
  expertName, 
  expertAvatar, 
  isTyping, 
  showCta, 
  submitted, 
  ctaMessage,
  onSubmitCta 
}: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Improved scroll behavior
  useEffect(() => {
    if (messagesEndRef.current) {
      // More aggressive scrolling to ensure visibility
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        
        // Double check scroll position after initial scroll
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 300);
      }, 100);
    }
  }, [messages, isTyping, showCta, submitted]);

  return (
    <ScrollArea className="h-[450px] flex-grow">
      <div className="p-6 flex flex-col space-y-6">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <ChatMessage 
              key={`message-${message.id}`} 
              message={message} 
              expertName={expertName} 
              expertAvatar={expertAvatar} 
            />
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <TypingIndicator expertName={expertName} expertAvatar={expertAvatar} />
          )}

          {/* CTA message */}
          {showCta && !submitted && (
            <CtaForm 
              expertName={expertName} 
              ctaMessage={ctaMessage} 
              onSubmit={onSubmitCta}
            />
          )}

          {/* Thank you message after CTA submission */}
          {submitted && <ThankYouMessage />}
        </AnimatePresence>
        <div ref={messagesEndRef} className="h-1" />
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
