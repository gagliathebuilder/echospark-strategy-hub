import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wand2, Zap, Globe, Sparkles, Users, BarChart3, Bot, Cpu, Brain } from "lucide-react";
import HoverEffectCard from "./ui/hover-effect-card";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ["ethically", "emotionally", "intelligently"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      title: "AI Solutions",
      description: "Building and deploying custom AI agents tailored to transform business operations and client experiences.",
      icon: <Wand2 className="h-6 w-6 text-echo-primary" />,
      iconClassName: "bg-echo-primary/10",
      hoverContent: (
        <div>
          <h4 className="text-lg font-bold mb-3 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-echo-primary" />
            AI Solutions Examples
          </h4>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-primary mt-2 mr-2"></span>
              <span>Custom chatbots for customer support</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-primary mt-2 mr-2"></span>
              <span>AI-powered analytics dashboards</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-primary mt-2 mr-2"></span>
              <span>Predictive maintenance systems</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Creator's Economy",
      description: "Strategic partnerships with influential creators to develop powerful, conversion-driven marketing campaigns.",
      icon: <Zap className="h-6 w-6 text-echo-secondary" />,
      iconClassName: "bg-echo-secondary/10",
      hoverContent: (
        <div>
          <h4 className="text-lg font-bold mb-3 flex items-center">
            <Users className="h-5 w-5 mr-2 text-echo-secondary" />
            Creator Partnership Examples
          </h4>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-secondary mt-2 mr-2"></span>
              <span>Influencer content co-creation</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-secondary mt-2 mr-2"></span>
              <span>Brand ambassador programs</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-secondary mt-2 mr-2"></span>
              <span>UGC campaign management</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Ad Tech Mastery",
      description: "Expertise in programmatic advertising with a focus on emerging channels including CTV and podcast networks.",
      icon: <Globe className="h-6 w-6 text-echo-accent" />,
      iconClassName: "bg-echo-accent/10",
      hoverContent: (
        <div>
          <h4 className="text-lg font-bold mb-3 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-echo-accent" />
            Ad Tech Solutions
          </h4>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-accent mt-2 mr-2"></span>
              <span>CTV campaign optimization</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-accent mt-2 mr-2"></span>
              <span>Podcast ad insertion technology</span>
            </li>
            <li className="flex items-start">
              <span className="h-1.5 w-1.5 rounded-full bg-echo-accent mt-2 mr-2"></span>
              <span>Cross-channel attribution models</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-echo-dark">
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
          <span className="text-xs font-medium text-white/80">Humanizing AI Technology</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight max-w-4xl text-balance"
        >
          Where Culture Meets Code
          <div className="inline-block mx-2 relative">
            <span className="invisible">{phrases.reduce((a, b) => a.length > b.length ? a : b)}</span>
            {phrases.map((phrase, index) => (
              <span 
                key={phrase}
                className={`absolute left-0 top-0 whitespace-nowrap text-gradient transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {phrase}
              </span>
            ))}
          </div>
          <br />
          Designing AI that behaves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl text-balance"
        >
          We don't just build AI. We shape how it behaves.
          <br />
          From media to machines, we engineer culture into code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-3xl"
        >
          <div className="flex items-center gap-3 bg-echo-muted/20 p-4 rounded-lg border border-echo-muted/10">
            <div className="bg-echo-primary/10 p-2 rounded-full">
              <Brain className="h-5 w-5 text-echo-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Custom AI Training</h3>
              <p className="text-sm text-white/70">Tailored to your industry & data</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-echo-muted/20 p-4 rounded-lg border border-echo-muted/10">
            <div className="bg-echo-secondary/10 p-2 rounded-full">
              <Bot className="h-5 w-5 text-echo-secondary" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">AI Team Integration</h3>
              <p className="text-sm text-white/70">Enhance your workforce capabilities</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-echo-muted/20 p-4 rounded-lg border border-echo-muted/10">
            <div className="bg-echo-accent/10 p-2 rounded-full">
              <Cpu className="h-5 w-5 text-echo-accent" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-white">Intelligent Systems</h3>
              <p className="text-sm text-white/70">Automate complex processes</p>
            </div>
          </div>
        </motion.div>

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
          {solutions.map((solution, index) => (
            <HoverEffectCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              iconClassName={solution.iconClassName}
              hoverContent={solution.hoverContent}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
