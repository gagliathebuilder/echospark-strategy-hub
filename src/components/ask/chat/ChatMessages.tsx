
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

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showCta, submitted]);

  return (
    <ScrollArea className="h-[450px] flex-grow">
      <div className="p-6 flex flex-col space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
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
          
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
