
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ThankYouMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="max-w-[85%] bg-gradient-to-br from-green-500/20 to-echo-secondary/20 text-white rounded-2xl p-5 border border-green-500/30 shadow-md">
        <div className="flex items-center space-x-3 mb-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <h4 className="text-white font-semibold">Thank You!</h4>
        </div>
        <p className="text-white/90">
          Thanks for your interest! A member of the EchoSpark team will be in touch soon.
          Feel free to check out our contact form for more detailed inquiries.
        </p>
      </div>
    </motion.div>
  );
};

export default ThankYouMessage;
