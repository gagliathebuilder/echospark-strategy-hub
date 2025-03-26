
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      category: "AI Solutions",
      description: "How we helped a mid-sized retail company reduce support costs by 40% while improving customer satisfaction scores.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: 0.1
    },
    {
      id: 2,
      title: "Creator-Led Marketing Campaign",
      category: "Creator Economy",
      description: "Strategic partnerships with niche creators that generated 3x ROI for a new product launch.",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: 0.2
    },
    {
      id: 3,
      title: "CTV Advertising Optimization",
      category: "Ad Tech",
      description: "Developed a cross-channel strategy that increased ROAS by 65% for a D2C brand entering the CTV space.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: 0.3
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
      id="case-studies"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-echo-dark/90 to-echo-dark/85"
    >
      <div className="echo-container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-white/80">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl"
          >
            Explore how we've helped businesses transform their operations, 
            increase revenue, and stay ahead of the competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: study.delay }}
              className="glass-card-dark overflow-hidden transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="relative h-48 md:h-64 w-full overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-echo-dark via-echo-dark/50 to-transparent opacity-70"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-echo-primary/90 text-white text-xs font-medium rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-white/70 mb-6">{study.description}</p>
                
                <a href="#" className="inline-flex items-center text-echo-secondary group/link">
                  <span className="font-medium">Read case study</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#"
            className="button-echo-outline px-8 py-3 text-white rounded-md"
          >
            View All Case Studies
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
