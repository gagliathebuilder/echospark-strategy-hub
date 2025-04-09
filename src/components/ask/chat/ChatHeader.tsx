
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Expert } from "@/types/expert";

interface ChatHeaderProps {
  expert: Expert;
}

const ChatHeader = ({ expert }: ChatHeaderProps) => {
  return (
    <div className="p-6 border-b border-echo-muted/20 flex items-center space-x-4 bg-echo-dark/90 sticky top-0 z-10">
      <Avatar className="h-14 w-14 border-2 border-echo-secondary/30">
        <AvatarImage src={expert.avatar} alt={expert.name} />
        <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-bold text-white">{expert.name}</h3>
        <p className="text-echo-secondary">{expert.role}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
