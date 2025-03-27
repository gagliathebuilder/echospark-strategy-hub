
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, FileText } from "lucide-react";

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const team = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "AI Strategy Lead",
      bio: "Former senior engineer at a major tech company with 12+ years building AI solutions for enterprise clients.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      delay: 0.1
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Creator Economy Strategist",
      bio: "Built and scaled multiple creator-led brands, with expertise in influencer partnerships and content monetization.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      delay: 0.2
    },
    {
      id: 3,
      name: "Chris Gaglia",
      role: "Ad Tech & AI Innovator",
      bio: "Product-driven leader in CTV, Mobile, and Influencer monetization. Now building next-gen AI solutions.",
      image: "/lovable-uploads/40856c6c-c20e-464c-ab96-d1d60c3df798.png",
      delay: 0.3
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Ad Tech Specialist",
      bio: "15+ years in programmatic advertising with specific expertise in CTV, podcasting, and emerging digital channels.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      delay: 0.4
    },
    {
      id: 5,
      name: "Maya Patel",
      role: "Digital Transformation Lead",
      bio: "Specialized in guiding enterprises through technology-enabled business evolution with a focus on data strategy.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      delay: 0.5
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
      id="team"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-echo-dark/95 to-echo-dark/90"
    >
      <div className="echo-container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-white/80">Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Meet Our <span className="text-gradient">Experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl"
          >
            Our collective brings together industry leaders with proven track records 
            in delivering innovative solutions across multiple domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: member.delay }}
              className="glass-card-dark overflow-hidden transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-echo-dark via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-echo-secondary text-sm font-medium mb-1">{member.role}</p>
                  
                  <div className="flex space-x-3 mt-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Twitter profile"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Resume"
                    >
                      <FileText className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-white/70">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
