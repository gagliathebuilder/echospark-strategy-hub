
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Video, Phone } from "lucide-react";
import { Expert } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FloatingChatButtonProps {
  expert: Expert;
  onClick: () => void;
}

const FloatingChatButton = ({ expert, onClick }: FloatingChatButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  
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

  const toggleVideoMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoMode(!isVideoMode);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Video call overlay when in video mode */}
          {isVideoMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center"
              onClick={toggleVideoMode}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-2xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Expert video */}
                <div className="absolute inset-0 bg-echo-dark/50">
                  <img 
                    src={expert.avatar} 
                    alt={expert.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video call interface elements */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white font-medium">{expert.name}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <MessageSquareText className="h-5 w-5 text-white" />
                        </button>
                        <button className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <Video className="h-5 w-5 text-white" />
                        </button>
                        <button className="h-10 w-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                          <Phone className="h-5 w-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Your video (small overlay) */}
                  <div className="absolute bottom-20 right-4 h-32 w-24 bg-echo-dark rounded-lg overflow-hidden border-2 border-echo-secondary">
                    <div className="h-full w-full bg-echo-dark/80 flex items-center justify-center text-white/50">
                      <span className="text-xs">Your Camera</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                Click anywhere to exit video call mode
              </div>
            </motion.div>
          )}
          
          {/* Main floating button */}
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
            
            {/* Video call toggle button */}
            <button 
              onClick={toggleVideoMode}
              className="ml-2 bg-echo-secondary rounded-full p-1.5 text-echo-dark hover:bg-echo-secondary/90 transition-colors"
            >
              <Video className="h-4 w-4" />
            </button>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatButton;
