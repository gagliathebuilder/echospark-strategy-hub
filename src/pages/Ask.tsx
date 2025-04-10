
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskHero from "@/components/ask/AskHero";
import ExpertGrid from "@/components/ask/ExpertGrid";
import ChatPanel from "@/components/ask/ChatPanel";
import HowItWorks from "@/components/ask/HowItWorks";
import FinalCTA from "@/components/ask/FinalCTA";
import { Expert } from "@/types/expert";
import FloatingChatButton from "@/components/ask/FloatingChatButton";

const Ask = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Improved scroll behavior when expert is selected
  useEffect(() => {
    if (selectedExpert && chatRef.current) {
      // More aggressive scrolling with multiple attempts
      setTimeout(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // Second attempt to ensure visibility
        setTimeout(() => {
          chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }, 100);
    }
  }, [selectedExpert]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ask EchoSpark - Your Questions. Our Experts. Real Insight.</title>
        <meta name="description" content="Chat with EchoSpark's AI-powered expert personas to get strategic insights on AI, creator economy, ad tech, and digital transformation." />
        <meta property="og:title" content="Ask EchoSpark - Your Questions. Our Experts. Real Insight." />
        <meta property="og:description" content="Get strategic insights from AI-powered experts on AI, creator economy, ad tech, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://echospark.ai/ask" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ask EchoSpark - Strategic Insights from AI Experts" />
        <meta name="twitter:description" content="Chat with AI-powered expert personas in AI strategy, creator economy, ad tech, and digital transformation." />
        <meta name="keywords" content="AI strategy, creator economy, ad tech, digital transformation, expert advice, strategic consulting, EchoSpark, AI development, AI implementation" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-echo-dark">
        <Navbar />
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <AskHero />
          
          {/* Move chat panel higher in the DOM to make it appear above the fold when selected */}
          <div ref={chatRef} id="chat-panel" className="scroll-mt-24">
            {selectedExpert && <ChatPanel expert={selectedExpert} chatRef={chatRef} />}
          </div>
          
          <HowItWorks />
          <ExpertGrid onSelectExpert={setSelectedExpert} selectedExpert={selectedExpert} />
          <FinalCTA />
        </motion.main>
        
        <Footer />
        
        {/* Floating chat button that appears when scrolled away from chat */}
        {selectedExpert && <FloatingChatButton expert={selectedExpert} onClick={() => chatRef.current?.scrollIntoView({ behavior: "smooth" })} />}
      </div>
    </>
  );
};

export default Ask;
