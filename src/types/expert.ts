
export interface Expert {
  id: number;
  name: string;
  role: string;
  bio: string;
  introMessage: string;
  avatar: string;
  sampleQuestion: string;
  sampleAnswer: string;
  cta: string;
  tone: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'expert';
  text: string;
  timestamp: Date;
}

export const experts: Expert[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "AI Strategy Lead",
    bio: "Former senior engineer at a major tech company with 12+ years building AI solutions for enterprise clients.",
    introMessage: "Hi, I'm Alex. I've been building AI systems for over a decade and love helping teams translate complex tools into business wins. Ask me anything about AI strategy, tooling, or ethics.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sampleQuestion: "Should we build our own LLM stack or use an existing one?",
    sampleAnswer: "Great question. Here's a quick breakdown:\n\n• Build your own if you need: full control, custom tuning, and can invest in infrastructure.\n• Use existing APIs like OpenAI or Anthropic if speed and scalability matter more.\n• Hybrid? Use a platform like LangChain to experiment first.\n\nBonus: Consider data privacy needs — that's where many get stuck.",
    cta: "Want a 15-minute AI readiness audit for your stack? → [Drop your email]",
    tone: "Analytical, thoughtful, slightly nerdy"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creator Economy Strategist",
    bio: "Built and scaled multiple creator-led brands, with expertise in influencer partnerships and content monetization.",
    introMessage: "Hey! I'm Sarah — I've built and scaled multiple creator-led brands and live knee-deep in influencer data. Ask me anything about creators, content, or monetization.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    sampleQuestion: "How do I find small creators in the fitness space who actually convert?",
    sampleAnswer: "Here's how I'd do it, step-by-step:\n\n1. Start with Instagram + TikTok search: use niche hashtags like #fitmom or #morninggrind\n2. Cross-check engagement vs follower count — look for 5–10%+\n3. DM them directly or use a tool like Modash or Collabstr\n4. Offer product + rev share (small creators love being part of something)\n\nBonus tip: turn your customers into creators — fastest growth hack alive.",
    cta: "Want a short list of vetted creators in your niche? → [Send it to me]",
    tone: "Trendy, Gen Z-savvy, confident"
  },
  {
    id: 3,
    name: "Chris Gaglia",
    role: "Ad Tech & AI Innovator",
    bio: "Product-driven leader in CTV, Mobile, and Influencer monetization. Now building next-gen AI solutions.",
    introMessage: "Hey, I'm Chris — I've led revenue and product strategy across CTV, mobile, and influencer monetization. Now building AI-powered solutions at EchoSpark. Let's talk real growth.",
    avatar: "/lovable-uploads/40856c6c-c20e-464c-ab96-d1d60c3df798.png",
    sampleQuestion: "Where's the biggest opportunity right now for AI in content monetization?",
    sampleAnswer: "Here's what we're seeing at the edge:\n\n• Real-time pricing engines: AI can adjust ad pricing based on attention, scroll depth, or sentiment.\n• Smart inventory matching: Plug AI into your CMS to match ad demand with creator content in real time.\n• Audience expansion models: Let AI build lookalikes for content—not just people.\n\nBottom line: It's about prediction + personalization.",
    cta: "Want to explore an AI monetization pilot with us? → [Let's connect]",
    tone: "Grounded, visionary, strategic"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Ad Tech Specialist",
    bio: "15+ years in programmatic advertising with specific expertise in CTV, podcasting, and emerging digital channels.",
    introMessage: "James here. I've been in the trenches of ad tech for 15+ years — CTV, podcasting, and every DSP in the game. Ask me anything tactical.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sampleQuestion: "What's the best DSP to use for targeting young families via CTV?",
    sampleAnswer: "Solid targeting play. Here's where to start:\n\n• The Trade Desk: Excellent household-level CTV data and retail integrations.\n• Google DV360: Solid if you're running cross-channel.\n• Amazon DSP: Best for shopping data + Prime Video access.\n\nPro tip: Layer in third-party data from Catalina or LiveRamp for extra precision.",
    cta: "Want a custom DSP targeting playbook? → [Drop your email]",
    tone: "Direct, tactical, expert-level"
  },
  {
    id: 5,
    name: "Maya Patel",
    role: "Digital Transformation Lead",
    bio: "Specialized in guiding enterprises through technology-enabled business evolution with a focus on data strategy.",
    introMessage: "Hi, I'm Maya. I help teams navigate complex digital shifts — from data pipelines to AI integrations. Ask me about scaling, systems, or transformation.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    sampleQuestion: "How should we approach modernizing a media company with legacy systems?",
    sampleAnswer: "You're not alone — here's a common path we recommend:\n\n1. Audit + map your current systems (especially your data flow and content ops).\n2. Identify friction zones — where manual work or silos slow you down.\n3. Layer in modular AI tools first (e.g., auto-tagging, recommendations).\n4. Phase out legacy systems with a clear ROI model for each step.\n\nTip: Start small. Transformation is momentum-driven.",
    cta: "Want a 30-day transformation framework to review? → [Send it over]",
    tone: "Calm, visionary, methodical"
  }
];
