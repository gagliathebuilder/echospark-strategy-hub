
import { motion } from "framer-motion";
import { experts, Expert } from "@/types/expert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
            className="text-3xl md:text-4xl font-bold text-white mb-4"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * expert.id }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card 
                className={`h-full overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  selectedExpert?.id === expert.id 
                    ? "ring-2 ring-echo-secondary" 
                    : "ring-0"
                }`}
                onClick={() => onSelectExpert(expert)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={expert.avatar} 
                    alt={expert.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-echo-dark via-transparent to-transparent"></div>
                </div>
                
                <CardContent className="p-6 bg-echo-dark/90 border-t border-echo-muted/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                      <p className="text-echo-secondary text-sm font-medium mb-3">{expert.role}</p>
                      <p className="text-white/70 text-sm line-clamp-2">{expert.bio}</p>
                    </div>
                    
                    <div className="ml-4 p-2 rounded-full bg-echo-muted/20 text-echo-secondary">
                      {expert.role.includes("AI") ? (
                        <Briefcase className="h-5 w-5" />
                      ) : (
                        <Users className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      className={`w-full py-2 px-4 rounded-md transition-colors ${
                        selectedExpert?.id === expert.id
                          ? "bg-echo-secondary text-echo-dark font-medium"
                          : "bg-echo-muted/20 text-white hover:bg-echo-muted/30"
                      }`}
                    >
                      {selectedExpert?.id === expert.id 
                        ? "Currently Chatting" 
                        : "Chat with " + expert.name}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertGrid;
