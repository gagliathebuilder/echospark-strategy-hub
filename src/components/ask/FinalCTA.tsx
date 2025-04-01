
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-echo-dark/95 to-echo-dark">
      <div className="echo-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-dark p-10 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go From Fiction to <span className="text-gradient">Real-World Strategy</span>?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Book a discovery call with our real-world experts to discuss your specific challenges and explore tailored solutions for your business.
          </p>
          <Button className="bg-echo-secondary text-echo-dark hover:bg-echo-secondary/90 py-6 px-8 text-lg font-medium">
            <CalendarDays className="mr-2 h-5 w-5" />
            Book a Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
