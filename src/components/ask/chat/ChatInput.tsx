
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
  isSubmitted: boolean;
  expertRole: string;
}

const ChatInput = ({ onSendMessage, isTyping, isSubmitted, expertRole }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="p-6 border-t border-echo-muted/20 bg-echo-dark/80 sticky bottom-0">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping || isSubmitted}
          className="bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-primary/50 focus:ring-1 focus:ring-echo-primary/50 py-6"
        />
        <Button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping || isSubmitted}
          className="bg-echo-primary text-white hover:bg-echo-primary/90 px-6"
          size="icon"
        >
          <SendHorizonal className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-3 text-center">
        <p className="text-white/50 text-xs">Ask any question related to {expertRole.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default ChatInput;
