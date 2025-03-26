
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wand2, Zap, Globe } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ["AI Solutions", "Creator Economy", "Ad Tech"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-echo-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-96 h-96 bg-echo-primary/30 rounded-full filter blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-echo-secondary/30 rounded-full filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-echo-accent/20 rounded-full filter blur-[80px] opacity-10 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="echo-container z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm"
        >
          <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-echo-secondary"></span>
          <span className="text-xs font-medium text-white/80">Future Forward Advisory</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight max-w-4xl text-balance"
        >
          Strategic Solutions for the
          <div className="relative inline-block min-w-[300px] text-left">
            {phrases.map((phrase, index) => (
              <div 
                key={phrase}
                className={`absolute left-0 text-gradient transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {phrase}
              </div>
            ))}
            <div className="opacity-0">
              {phrases[0]}
            </div>
          </div>
          <br /> 
          Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl text-balance"
        >
          A collective of industry experts deploying cutting-edge strategies and solutions 
          for businesses navigating the digital frontier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#services"
            className="button-echo-primary px-8 py-3 text-base font-medium rounded-md inline-flex items-center"
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="button-echo-outline px-8 py-3 text-base font-medium text-white rounded-md"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="echo-container mt-24 mb-16 z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="glass-card-dark p-6 md:p-8 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-12 w-12 rounded-full bg-echo-primary/10 mb-4 flex items-center justify-center">
              <Wand2 className="h-6 w-6 text-echo-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Solutions</h3>
            <p className="text-white/70">
              Building and deploying custom AI agents tailored to transform business operations and client experiences.
            </p>
          </div>
          
          <div className="glass-card-dark p-6 md:p-8 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-12 w-12 rounded-full bg-echo-secondary/10 mb-4 flex items-center justify-center">
              <Zap className="h-6 w-6 text-echo-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Creator Economy</h3>
            <p className="text-white/70">
              Strategic partnerships with influential creators to develop powerful, conversion-driven marketing campaigns.
            </p>
          </div>
          
          <div className="glass-card-dark p-6 md:p-8 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-12 w-12 rounded-full bg-echo-accent/10 mb-4 flex items-center justify-center">
              <Globe className="h-6 w-6 text-echo-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ad Tech Mastery</h3>
            <p className="text-white/70">
              Expertise in programmatic advertising with a focus on emerging channels including CTV and podcast networks.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
