
import { ReactNode } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { motion } from "framer-motion";

interface HoverEffectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconClassName: string;
  hoverContent: ReactNode;
  children?: ReactNode; // Add children as an optional prop
}

const HoverEffectCard = ({
  title,
  description,
  icon,
  iconClassName,
  hoverContent,
  children,
}: HoverEffectCardProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="glass-card-dark p-6 md:p-8 transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
          <div className={`h-12 w-12 rounded-full ${iconClassName} mb-4 flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-echo-dark/95 border border-echo-muted/20 backdrop-blur-lg p-6 text-white shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {hoverContent}
        </motion.div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverEffectCard;
