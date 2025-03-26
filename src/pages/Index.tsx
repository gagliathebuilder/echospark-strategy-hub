
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
