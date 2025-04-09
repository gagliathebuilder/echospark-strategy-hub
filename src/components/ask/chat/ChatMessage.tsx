
import { Message } from "@/types/expert";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  expertName: string;
  expertAvatar: string;
}

const ChatMessage = ({ message, expertName, expertAvatar }: ChatMessageProps) => {
  const isExpert = message.sender === "expert";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isExpert ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[85%] ${
          isExpert
            ? "bg-echo-muted/40 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md border border-echo-muted/20"
            : "bg-echo-primary/90 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md"
        } p-5`}
      >
        <div className="flex items-center space-x-2 mb-2">
          {isExpert ? (
            <Avatar className="h-8 w-8 border border-echo-secondary/30">
              <AvatarImage src={expertAvatar} alt={expertName} />
              <AvatarFallback>{expertName.substring(0, 2)}</AvatarFallback>
            </Avatar>
          ) : (
            <div className="h-8 w-8 rounded-full bg-echo-primary/70 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          )}
          <span className="text-sm font-medium">
            {isExpert ? expertName : "You"}
          </span>
        </div>
        
        <div className="whitespace-pre-line text-white/90 leading-relaxed">
          {message.text}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
