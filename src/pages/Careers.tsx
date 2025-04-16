
import { motion } from "framer-motion";
import { Briefcase, Mail, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const jobListings = [
    {
      id: 1,
      title: "AI Solutions Consultant – AdTech & Media",
      type: "Contract",
      description: "EchoSpark is a future-forward AI + AdTech consultancy helping media companies, agencies, and tech brands unlock new value through smart, usable AI tools. We're building for what's next — and looking for visionary collaborators who can help define it.",
      responsibilities: [
        "Identify opportunities where AI can streamline media/adtech workflows (e.g., campaign ops, analytics, creative automation)",
        "Collaborate with internal teams to scope AI-powered prototypes and MVPs",
        "Translate business challenges into prompt-based solutions using tools like OpenAI, Claude, ElevenLabs, and more",
        "Design simple UX flows, prompt sequences, and collaborate with devs to bring ideas to life",
        "Participate in client discovery sessions, strategy calls, and solution demos"
      ],
      requirements: [
        "5+ years in programmatic media, digital strategy, or SaaS consulting",
        "Experience or interest in generative AI and prompt design",
        "Strong understanding of AdTech/MarTech ecosystem (DSPs, CTV, metadata, etc.)",
        "Entrepreneurial mindset with a bias for action",
        "Based in the U.S. (remote OK), with flexible availability for project-based work"
      ],
      howToApply: "Submit your interest via info@echospark.io or the upload form. Shortlisted candidates will be contacted for a virtual chat.",
      tags: ["AdTech", "AI Consulting", "Prompt Engineering", "Digital Strategy", "Media Innovation", "GPT", "Generative AI", "LLM", "Programmatic Advertising", "Remote Consulting", "AI Solutions Architect", "Contract Work", "Media AI"]
    },
    {
      id: 2,
      title: "Business Development Consultant – AI Partnerships",
      type: "Contract",
      description: "At EchoSpark, we believe real innovation happens when AI meets real-world use cases. We work with leading companies in AdTech and Media to develop AI-powered solutions that transform workflows, boost performance, and drive growth. We're scaling fast — and looking for a business-minded closer to join our crew.",
      responsibilities: [
        "Lead outreach to agencies, brands, media platforms, and publishers",
        "Build relationships with early adopters and decision-makers",
        "Develop outreach scripts, case study briefs, and lightweight pitch materials",
        "Qualify leads and drive discovery calls and pilot conversations",
        "Provide feedback on what's resonating to improve GTM strategy"
      ],
      requirements: [
        "3–7 years in SaaS, AdTech, or startup biz dev",
        "Excellent communication and storytelling skills",
        "Familiarity with CRM systems and outbound lead gen best practices",
        "Existing network in media, marketing, or digital tech a big plus",
        "Contract role with flexible hours and performance-based upside"
      ],
      howToApply: "Submit your interest via info@echospark.io or the upload form. We review all serious interest and will respond to promising profiles promptly.",
      tags: ["Business Development", "AI Partnerships", "Sales Consultant", "Media Sales", "B2B SaaS", "AdTech", "Startup GTM", "Client Acquisition", "Tech Partnerships", "Remote Biz Dev", "Outbound Sales", "Contract Role"]
    },
    {
      id: 3,
      title: "AI Integration Developer – LLMs & APIs",
      type: "Contract",
      description: "EchoSpark is an AI-native consultancy building next-gen tools at the intersection of advertising, data, and creativity. We're looking for a developer with strong backend skills and LLM experience to bring ideas to life and turn prototypes into reality.",
      responsibilities: [
        "Integrate AI APIs (OpenAI, ElevenLabs, Whisper, Claude, etc.) into internal tools and client dashboards",
        "Work with lightweight infrastructure (Firebase, Supabase, Replit) to build scalable MVPs",
        "Collaborate with strategists and designers to implement use cases",
        "Stay ahead of emerging tech and propose new tools/workflows",
        "Build fast, learn fast, iterate often"
      ],
      requirements: [
        "3+ years in backend or full-stack development (Python or Node.js preferred)",
        "Experience with LLMs, LangChain, or agentic workflows",
        "Familiarity with media/adtech data is a bonus",
        "Clear communication and the ability to work independently",
        "Open to U.S. or global talent with timezone overlap"
      ],
      howToApply: "Submit your interest via info@echospark.io or the upload form. Please include links to past work, GitHub, or anything that shows what you've built.",
      tags: ["LLM Developer", "AI Engineer", "LangChain", "OpenAI", "GPT", "Backend Developer", "API Integration", "Firebase", "Supabase", "Generative AI", "Freelance Engineer", "Remote AI Dev", "Python", "Node.js", "AI MVP Builder", "Vector DBs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-echo-dark/95 to-echo-dark/90">
      <Helmet>
        <title>Careers at EchoSpark - Join Our AI Innovation Team</title>
        <meta name="description" content="Join EchoSpark and be part of a team shaping the future of AI in advertising and media technology." />
      </Helmet>

      <Navbar />

      <section className="pt-32 pb-24">
        <div className="echo-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-gradient">Innovation Team</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're looking for exceptional talent to help shape the future of AI in advertising and media technology. If you're passionate about innovation and ready to make an impact, we want to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card-dark overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl text-white mb-2">{job.title}</h3>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-echo-primary/20 text-echo-primary">
                          {job.type}
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-6">{job.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">What You'll Do</h4>
                        <ul className="list-disc list-inside space-y-2 text-white/90">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">What We're Looking For</h4>
                        <ul className="list-disc list-inside space-y-2 text-white/90">
                          {job.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">How to Apply</h4>
                        <p className="text-white/90">{job.howToApply}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-sm bg-echo-muted/10 text-white/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                          className="button-echo-primary flex items-center justify-center gap-2"
                          onClick={() => window.location.href = "mailto:info@echospark.io"}
                        >
                          <Mail className="w-4 h-4" />
                          Apply via Email
                        </Button>
                        <Button 
                          variant="outline" 
                          className="button-echo-outline flex items-center justify-center gap-2"
                          onClick={() => alert("Resume upload functionality will be implemented soon!")}
                        >
                          <Upload className="w-4 h-4" />
                          Upload Resume
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
