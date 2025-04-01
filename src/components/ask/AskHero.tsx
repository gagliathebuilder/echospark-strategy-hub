
import { motion } from "framer-motion";

const AskHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-echo-dark to-echo-dark/90">
      <div className="echo-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-white/80">Interactive Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Ask <span className="text-gradient">EchoSpark</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mb-8"
          >
            Your Questions. Our (Fictional) Experts. Real Insight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#experts"
              className="button-echo-primary px-6 py-3 rounded-md"
            >
              Pick Your Expert
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-echo-dark to-transparent opacity-90"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-echo-primary/20 filter blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-echo-secondary/20 filter blur-[100px]"></div>
      </div>
    </section>
  );
};

export default AskHero;
