
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText } from "lucide-react";
import { Expert } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FloatingChatButtonProps {
  expert: Expert;
  onClick: () => void;
}

const FloatingChatButton = ({ expert, onClick }: FloatingChatButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const chatPanel = document.getElementById("chat-panel");
      if (!chatPanel) return;
      
      const rect = chatPanel.getBoundingClientRect();
      // Show button when chat is not visible in viewport
      setIsVisible(rect.top > window.innerHeight || rect.bottom < 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleClick = () => {
    // Scroll to chat panel with smooth behavior
    const chatPanel = document.getElementById("chat-panel");
    if (chatPanel) {
      chatPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClick();
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 bg-echo-primary shadow-lg rounded-full p-3 flex items-center space-x-2 z-50 hover:bg-echo-primary/90 transition-colors"
        >
          <Avatar className="h-8 w-8 border border-white/20">
            <AvatarImage src={expert.avatar} alt={expert.name} />
            <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-white font-medium pr-2">Continue chat with {expert.name}</span>
          <MessageSquareText className="h-5 w-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatButton;
