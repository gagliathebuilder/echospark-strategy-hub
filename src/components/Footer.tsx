
import { ArrowUp, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your backend
      console.log("Subscribed with email:", email);
      
      // Reset state after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-echo-dark pt-16 pb-8">
      <div className="echo-container">
        {/* Newsletter Subscription */}
        <div className="mb-12 pb-12 border-b border-echo-muted/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated with <span className="text-gradient">EchoSpark</span></h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest insights on AI strategy, creator economy trends, and digital transformation.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-echo-muted/20 border border-echo-muted/30 text-white focus:outline-none focus:ring-2 focus:ring-echo-secondary"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-echo-secondary text-echo-dark font-medium rounded-md hover:bg-echo-secondary/90 transition-colors flex items-center justify-center"
              >
                {subscribed ? "Subscribed!" : (
                  <>
                    Subscribe <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            
            {subscribed && (
              <p className="text-echo-secondary mt-3 animate-fade-in">
                Thanks for subscribing! We'll be in touch soon.
              </p>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-10">
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 text-xl font-heading font-bold mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute h-8 w-8 rounded-full bg-echo-primary animate-pulse-subtle"></div>
                <div className="absolute h-8 w-8 rounded-full bg-gradient-echo blur-sm"></div>
                <div className="absolute h-8 w-8 flex items-center justify-center text-white font-bold">
                  e
                </div>
              </div>
              <span className="text-gradient">echospark.io</span>
            </div>
            
            <p className="text-white/70 mb-6 md:max-w-xs">
              A collective of industry experts specializing in AI, the creator economy, 
              and ad tech solutions for businesses of all sizes.
            </p>
            
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
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Creator Economy
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Ad Tech Mastery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors">
                    Monetization Strategies
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#team" className="text-white/70 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-white/70 hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-white/70 hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-echo-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} echospark.io. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-echo-primary/20 flex items-center justify-center hover:bg-echo-primary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-echo-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
