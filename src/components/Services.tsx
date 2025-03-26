
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  TrendingUp, 
  Radio, 
  BarChart3, 
  Network, 
  Lightbulb,
  ChevronRight
} from "lucide-react";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: "AI-Driven Solutions",
      description: "Custom AI agents and tools tailored for businesses of all sizes. From chatbots to predictive analytics, we deploy solutions that streamline operations and enhance customer experiences.",
      icon: BrainCircuit,
      color: "bg-echo-primary/10 text-echo-primary",
      delay: 0.1
    },
    {
      id: 2,
      title: "Creator Economy Strategy",
      description: "Strategic alignment with top creators to drive influential marketing campaigns. We identify the right partnerships to amplify your brand message and reach engaged audiences.",
      icon: TrendingUp,
      color: "bg-echo-secondary/10 text-echo-secondary",
      delay: 0.2
    },
    {
      id: 3,
      title: "Programmatic Advertising",
      description: "Advanced ad tech solutions with a focus on CTV and podcasting. Our team optimizes campaigns across channels to maximize ROI and target high-value audiences.",
      icon: Radio,
      color: "bg-echo-accent/10 text-echo-accent",
      delay: 0.3
    },
    {
      id: 4,
      title: "Monetization Strategies",
      description: "Comprehensive approach to boosting revenue and business growth. We develop tailored monetization plans that leverage your unique market position and assets.",
      icon: BarChart3,
      color: "bg-echo-primary/10 text-echo-primary",
      delay: 0.4
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Data-driven strategies for business evolution. From blockchain integration to advanced analytics, we guide companies through technology-enabled transformation.",
      icon: Network,
      color: "bg-echo-secondary/10 text-echo-secondary",
      delay: 0.5
    },
    {
      id: 6,
      title: "Creative Innovation",
      description: "Immersive experiences and strategic collaborations that elevate brand credibility. Our creative approach ensures your brand stands out in crowded markets.",
      icon: Lightbulb,
      color: "bg-echo-accent/10 text-echo-accent",
      delay: 0.6
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-echo-dark to-echo-dark/95"
    >
      <div className="echo-container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-white/80">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4 max-w-2xl"
          >
            Comprehensive Solutions for the Digital Age
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-3xl"
          >
            Our collective brings together specialists across multiple disciplines 
            to provide integrated strategies that drive tangible results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.delay }}
              className="glass-card-dark p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className={`h-12 w-12 rounded-full ${service.color} mb-6 flex items-center justify-center`}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              
              <p className="text-white/70 mb-6 flex-grow">
                {service.description}
              </p>
              
              <a href="#contact" className="group inline-flex items-center text-echo-secondary font-medium">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
