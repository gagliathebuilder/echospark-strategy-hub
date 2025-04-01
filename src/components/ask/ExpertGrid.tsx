
import { motion } from "framer-motion";
import { experts, Expert } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import HoverEffectCard from "@/components/ui/hover-effect-card";
import { Briefcase } from "lucide-react";

interface ExpertGridProps {
  onSelectExpert: (expert: Expert) => void;
  selectedExpert: Expert | null;
}

const ExpertGrid = ({ onSelectExpert, selectedExpert }: ExpertGridProps) => {
  return (
    <section id="experts" className="py-16 bg-echo-dark/95">
      <div className="echo-container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Meet Our <span className="text-gradient">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Select an expert to start your simulated consultation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experts.map((expert) => (
            <HoverEffectCard
              key={expert.id}
              title={expert.name}
              description={expert.role}
              icon={<Briefcase />}
              iconClassName="bg-echo-muted/30 text-echo-secondary"
              hoverContent={
                <div className="flex flex-col">
                  <p className="text-sm text-white/80 mb-4">{expert.bio}</p>
                  <p className="text-xs text-white/60 italic mb-3">"{expert.tone}"</p>
                  <button
                    onClick={() => onSelectExpert(expert)}
                    className={`button-echo-primary py-2 px-4 rounded-md w-full ${
                      selectedExpert?.id === expert.id
                        ? "bg-echo-secondary text-echo-dark"
                        : ""
                    }`}
                  >
                    {selectedExpert?.id === expert.id
                      ? "Currently Selected"
                      : "Chat with " + expert.name}
                  </button>
                </div>
              }
            >
              <div 
                onClick={() => onSelectExpert(expert)}
                className={`flex items-center space-x-4 cursor-pointer ${
                  selectedExpert?.id === expert.id
                    ? "bg-echo-muted/20 p-2 rounded-lg"
                    : ""
                }`}
              >
                <Avatar className="h-16 w-16 border-2 border-echo-muted/30">
                  <AvatarImage src={expert.avatar} alt={expert.name} />
                  <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
                  <p className="text-sm text-echo-secondary">{expert.role}</p>
                </div>
              </div>
            </HoverEffectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertGrid;
