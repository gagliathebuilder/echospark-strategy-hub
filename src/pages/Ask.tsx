
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskHero from "@/components/ask/AskHero";
import ExpertGrid from "@/components/ask/ExpertGrid";
import ChatPanel from "@/components/ask/ChatPanel";
import HowItWorks from "@/components/ask/HowItWorks";
import FinalCTA from "@/components/ask/FinalCTA";
import { Expert } from "@/types/expert";

const Ask = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <>
      <Helmet>
        <title>Ask EchoSpark - Your Questions. Our Experts. Real Insight.</title>
        <meta name="description" content="Chat with EchoSpark's AI-powered expert personas to get strategic insights on AI, creator economy, ad tech, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-echo-dark">
        <Navbar />
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-grow"
        >
          <AskHero />
          <HowItWorks />
          <ExpertGrid onSelectExpert={setSelectedExpert} selectedExpert={selectedExpert} />
          {selectedExpert && <ChatPanel expert={selectedExpert} />}
          <FinalCTA />
        </motion.main>
        
        <Footer />
      </div>
    </>
  );
};

export default Ask;
