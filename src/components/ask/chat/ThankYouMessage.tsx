
import { motion } from "framer-motion";

const ThankYouMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="max-w-[85%] bg-echo-secondary/20 text-white rounded-2xl p-5 border border-echo-secondary/30 shadow-md">
        <p className="text-white/90">Thanks for your interest! A member of the EchoSpark team will be in touch soon.</p>
      </div>
    </motion.div>
  );
};

export default ThankYouMessage;
