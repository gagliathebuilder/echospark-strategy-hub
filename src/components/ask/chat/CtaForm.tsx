
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';

interface CtaFormProps {
  expertName: string;
  ctaMessage: string;
  onSubmit: () => void;
}

// Initialize Supabase client
const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CtaForm = ({ expertName, ctaMessage, onSubmit }: CtaFormProps) => {
  const [email, setEmail] = useState("");
  const [serviceInterest, setServiceInterest] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const handleSubmitEmail = async () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('inquiries')
        .insert([
          { 
            email, 
            expert_name: expertName, 
            service_interest: serviceInterest,
            budget: budget,
            timestamp: new Date()
          }
        ]);
      
      if (error) throw error;
      
      onSubmit();
      toast.success("Thanks for your interest! We'll be in touch soon.");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast.error("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <Card className="max-w-[85%] bg-gradient-to-br from-echo-secondary/10 to-echo-primary/10 border border-echo-secondary/30 p-5 space-y-4 rounded-xl shadow-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-echo-secondary mt-0.5" />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Talk to the real EchoSpark team</h4>
            <p className="text-white/70 text-sm mb-4">{ctaMessage}</p>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-secondary/50 focus:ring-1 focus:ring-echo-secondary/50"
              />
              
              <div>
                <label className="block text-white text-sm mb-2">What are you interested in?</label>
                <select
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-secondary/50 focus:ring-1 focus:ring-echo-secondary/50 rounded-md p-2"
                >
                  <option value="">Select an option</option>
                  <option value="AI Development">AI Development</option>
                  <option value="Strategic Guidance">Strategic Guidance</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Creator Economy">Creator Economy</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Estimated Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-echo-muted/20 text-white border-echo-muted/30 focus:border-echo-secondary/50 focus:ring-1 focus:ring-echo-secondary/50 rounded-md p-2"
                >
                  <option value="">Select a budget range</option>
                  <option value="$10K">$10,000</option>
                  <option value="$25K">$25,000</option>
                  <option value="$50K+">$50,000+</option>
                </select>
              </div>

              <Button 
                onClick={handleSubmitEmail} 
                className="w-full bg-echo-secondary text-echo-dark hover:bg-echo-secondary/90 font-medium"
              >
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CtaForm;
