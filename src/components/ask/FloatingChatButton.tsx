
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, Video, Phone, Mic, MicOff, Camera, CameraOff } from "lucide-react";
import { Expert } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingChatButtonProps {
  expert: Expert;
  onClick: () => void;
}

const FloatingChatButton = ({ expert, onClick }: FloatingChatButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [callTime, setCallTime] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected'>('connecting');
  
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
  
  // Simulate connection and call timer
  useEffect(() => {
    if (isVideoMode) {
      // Simulate connection delay
      const connectionTimer = setTimeout(() => {
        setConnectionStatus('connected');
      }, 2000);
      
      // Call timer
      const callInterval = setInterval(() => {
        setCallTime(prev => prev + 1);
      }, 1000);
      
      return () => {
        clearTimeout(connectionTimer);
        clearInterval(callInterval);
        setCallTime(0);
        setConnectionStatus('connecting');
      };
    }
  }, [isVideoMode]);
  
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
    
    // Reset states when starting a call
    if (!isVideoMode) {
      setIsMuted(false);
      setIsCameraOn(true);
      setCallTime(0);
    }
  };
  
  const formatCallTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
              className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center backdrop-blur-sm"
              onClick={toggleVideoMode}
            >
              {/* Connection overlay */}
              {connectionStatus === 'connecting' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black/60"
                >
                  <Avatar className="h-24 w-24 mb-4 animate-pulse">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-white font-medium text-xl mb-2">Connecting with {expert.name}...</h3>
                  <div className="flex space-x-2 mt-2">
                    <div className="h-2 w-2 bg-echo-secondary rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-echo-secondary rounded-full animate-pulse delay-100"></div>
                    <div className="h-2 w-2 bg-echo-secondary rounded-full animate-pulse delay-200"></div>
                  </div>
                </motion.div>
              )}
              
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
                    className={cn(
                      "w-full h-full object-cover",
                      connectionStatus === 'connected' ? "animate-none" : "opacity-70"
                    )}
                  />
                  
                  {/* Video call interface elements */}
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 to-transparent p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {connectionStatus === 'connected' && (
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        )}
                        <span className="text-white font-medium">
                          {connectionStatus === 'connected' ? formatCallTime(callTime) : 'Connecting...'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1",
                          isMuted ? "bg-red-500/80 text-white" : "bg-white/20 text-white/90"
                        )}>
                          {isMuted ? <MicOff className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
                          {isMuted ? "Muted" : "On"}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex justify-center items-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                      >
                        {isMuted ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5 text-white" />}
                      </Button>
                      
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600"
                        onClick={toggleVideoMode}
                      >
                        <Phone className="h-6 w-6 text-white" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsCameraOn(!isCameraOn);
                        }}
                      >
                        {isCameraOn ? <Camera className="h-5 w-5 text-white" /> : <CameraOff className="h-5 w-5 text-white" />}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Your video (small overlay) */}
                  <div className="absolute bottom-24 right-4 h-32 w-24 bg-echo-dark rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                    {isCameraOn ? (
                      <div className="h-full w-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        {/* Simulated user camera with subtle animation */}
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              initial={{ opacity: 0.7 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                              className="h-20 w-20 rounded-full bg-echo-dark/60 flex items-center justify-center"
                            >
                              <span className="text-white/60 text-xs">You</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full bg-black/60 flex items-center justify-center">
                        <CameraOff className="h-6 w-6 text-white/50" />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Expert name overlay */}
                <div className="absolute left-4 bottom-24 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white font-medium text-sm">
                  {expert.name}
                </div>
              </motion.div>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                Click anywhere to exit video call mode
              </div>
            </motion.div>
          )}
          
          {/* Main floating button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.button
                  onClick={handleClick}
                  className="bg-echo-primary shadow-lg rounded-full p-3 flex items-center space-x-2 hover:bg-echo-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              </HoverCardTrigger>
              
              <HoverCardContent className="w-80 p-4" side="top">
                <div className="flex space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{expert.name}</h4>
                    <p className="text-sm">{expert.role}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="default" onClick={handleClick}>
                        <MessageSquareText className="h-3.5 w-3.5 mr-1" />
                        Chat
                      </Button>
                      <Button size="sm" variant="secondary" onClick={toggleVideoMode}>
                        <Video className="h-3.5 w-3.5 mr-1" />
                        Video Call
                      </Button>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatButton;
