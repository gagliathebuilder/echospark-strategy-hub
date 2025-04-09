
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    serviceInterest: "",
    budget: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formState.name,
            email: formState.email,
            company: formState.company,
            message: formState.message,
            service_interest: formState.serviceInterest,
            budget: formState.budget,
            timestamp: new Date()
          }
        ]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent!",
        description: "We've received your inquiry and will be in touch soon.",
        duration: 5000,
      });
      
      // Clear form
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        serviceInterest: "",
        budget: ""
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-echo-dark/85 to-echo-dark/80"
    >
      <div className="echo-container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-echo-muted/30 border border-echo-muted/20 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-white/80">Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Let's Discuss Your <span className="text-gradient">Next Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl"
          >
            Reach out to explore how our expertise can help your business 
            navigate the digital landscape and achieve your strategic goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card-dark p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-echo-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-echo-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <a href="mailto:info@echospark.io" className="text-white/70 hover:text-white transition-colors">
                      info@echospark.io
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-echo-secondary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-echo-secondary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-white/70">
                      San Francisco, CA <br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-echo-accent/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-echo-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <a href="tel:+14155552671" className="text-white/70 hover:text-white transition-colors">
                      +1 (415) 555-2671
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Medium"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.164.422v10.666a.448.448 0 0 0 .164.422l1.477 1.451v.319h-7.436v-.319l1.53-1.483c.152-.15.152-.195.152-.422V8.401L10.95 19.218h-.5L5.76 8.401v7.249c-.043.305.059.612.275.833L7.6 18.406v.319H2.5v-.319l1.565-1.923a.8.8 0 0 0 .22-.833V7.269z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card-dark p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceInterest" className="block text-white font-medium mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formState.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent"
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
                    <label htmlFor="budget" className="block text-white font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent"
                    >
                      <option value="">Select a budget range</option>
                      <option value="$10K">$10,000</option>
                      <option value="$25K">$25,000</option>
                      <option value="$50K+">$50,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-echo-muted/50 border border-echo-muted/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-echo-primary focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="button-echo-primary px-8 py-3 w-full md:w-auto text-base font-medium rounded-md flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
