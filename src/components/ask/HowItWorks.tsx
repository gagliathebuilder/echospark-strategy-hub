
import { motion } from "framer-motion";
import { Users, MessageSquare, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="h-6 w-6 text-echo-secondary" />,
      title: "Choose an Expert",
      description: "Select from our team of virtual specialists in AI, creator economy, ad tech, and more."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-echo-secondary" />,
      title: "Ask a Question",
      description: "Type any question related to their expertise for a simulated consultation."
    },
    {
      icon: <Zap className="h-6 w-6 text-echo-secondary" />,
      title: "Get Strategic Insights",
      description: "Receive tailored responses that showcase EchoSpark's unique approach and expertise."
    }
  ];

  return (
    <section className="py-16 bg-echo-dark/90">
      <div className="echo-container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Engage with our simulated experts to experience EchoSpark's approach to strategic consulting
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-dark p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-echo-muted/30 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
