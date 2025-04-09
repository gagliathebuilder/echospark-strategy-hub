
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TypingIndicatorProps {
  expertName: string;
  expertAvatar: string;
}

const TypingIndicator = ({ expertName, expertAvatar }: TypingIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex justify-start"
    >
      <div className="bg-echo-muted/40 text-white rounded-2xl p-4 border border-echo-muted/20 shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 border border-echo-secondary/30">
            <AvatarImage src={expertAvatar} alt={expertName} />
            <AvatarFallback>{expertName.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="h-2 w-2 bg-echo-secondary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
