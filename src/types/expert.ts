
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
    name: "Stewart Gardner",
    role: "Tech Disruptor",
    bio: "Stewart doesn't show up to calls—he shows up in outcomes. A quiet force behind EchoSpark's most inventive AI strategies, he architects scalable systems that speak louder than slides.",
    introMessage: "Hey, I'm Stewart. I specialize in architecting AI systems that deliver real business outcomes. Let's talk about your technical challenges and how we can solve them elegantly.",
    avatar: "/lovable-uploads/447a46b9-765a-477e-9561-0424ad31ab7c.png",
    sampleQuestion: "How do we ensure our AI systems remain scalable and maintainable?",
    sampleAnswer: "Here's my framework:\n\n1. Start with clear architectural boundaries\n2. Implement robust monitoring and testing\n3. Use containerization for consistency\n4. Plan for data pipeline scalability\n\nRemember: The best architectures grow with your needs.",
    cta: "Want to discuss your AI architecture? → [Schedule a call]",
    tone: "Direct, pragmatic, systems-focused"
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
    name: "Vivienne Chase",
    role: "Ethical AI Lead",
    bio: "Vivienne designs frameworks that keep AI accountable, on-trend, and always aligned with human values—because ethics isn't a brake, it's a blueprint.",
    introMessage: "Hello, I'm Vivienne. I help teams navigate the intersection of AI innovation and ethical responsibility. Let's build AI systems that are both powerful and principled.",
    avatar: "/lovable-uploads/11ff3850-33df-4902-a0d0-e0838c599a0b.png",
    sampleQuestion: "How do we balance AI innovation with ethical considerations?",
    sampleAnswer: "Let me share my approach:\n\n1. Start with clear ethical guidelines\n2. Build in transparency from day one\n3. Implement regular bias testing\n4. Create feedback loops with users\n\nEthics and innovation should enhance each other, not compete.",
    cta: "Want to discuss ethical AI implementation? → [Let's talk]",
    tone: "Thoughtful, principled, forward-thinking"
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

