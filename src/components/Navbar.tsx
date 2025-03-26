
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-echo-dark/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="echo-container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center space-x-2 text-xl font-heading font-bold"
          >
            <div className="relative h-8 w-8">
              <div className="absolute h-8 w-8 rounded-full bg-echo-primary animate-pulse-subtle"></div>
              <div className="absolute h-8 w-8 rounded-full bg-gradient-echo blur-sm"></div>
              <div className="absolute h-8 w-8 flex items-center justify-center text-white font-bold">
                e
              </div>
            </div>
            <span className="text-gradient">echospark.io</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-echo-secondary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="button-echo-primary px-4 py-2"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-echo-dark/95 backdrop-blur-lg"
        >
          <div className="echo-container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="button-echo-primary px-4 py-2 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
