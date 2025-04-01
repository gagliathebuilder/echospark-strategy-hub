
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageSquareText, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-echo-dark text-white min-h-screen">
      <Helmet>
        <title>EchoSpark - AI-Powered Strategic Consulting</title>
        <meta name="description" content="EchoSpark provides AI-powered strategic consulting for businesses navigating digital transformation, AI strategy, creator economy, and ad tech." />
        <meta property="og:title" content="EchoSpark - AI-Powered Strategic Consulting" />
        <meta property="og:description" content="Expert strategic consulting for digital transformation, AI integration, creator economy, and ad tech optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://echospark.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EchoSpark - Strategic AI Consulting" />
        <meta name="twitter:description" content="Expert consulting for businesses navigating AI strategy, creator economy, and digital transformation." />
        <meta name="keywords" content="AI consulting, digital transformation, creator economy, ad tech, strategic consulting, EchoSpark" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Services />
      <Team />
      
      {/* New CTA section directing to Ask page - Moved after Team section */}
      <section className="py-16 bg-gradient-to-r from-echo-dark/90 to-echo-dark/80">
        <div className="echo-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-dark p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="md:max-w-[60%]">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Chat with Our <span className="text-gradient">Expert Personas</span>
              </h2>
              <p className="text-white/70 mb-6">
                Curious about what we can offer? Try our interactive experience where you can chat with our AI-powered expert personas across AI strategy, creator economy, ad tech, and digital transformation.
              </p>
              <Link to="/ask" className="inline-flex items-center gap-2 bg-echo-secondary text-echo-dark hover:bg-echo-secondary/90 transition-colors py-3 px-6 rounded-md font-medium">
                <MessageSquareText className="h-5 w-5" />
                Chat with an Expert
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-[-15px]">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 rounded-full border-2 border-echo-secondary bg-echo-dark overflow-hidden transform transition-transform hover:translate-y-[-5px]"
                  style={{ zIndex: 5 - index }}
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 1 ? '1568602471122-7832951cc4c5' : index === 2 ? '1573496359142-b8d87734a5a2' : '1472099645785-5658abf4ff4e'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`} 
                    alt="Expert" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
