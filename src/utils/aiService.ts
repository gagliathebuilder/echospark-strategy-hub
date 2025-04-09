
// This file handles the OpenAI API integration
import { Expert } from "@/types/expert";
import { toast } from "@/components/ui/use-toast";

// OpenAI API key
const OPENAI_API_KEY = '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';

/**
 * Generates a response from OpenAI based on the expert persona and user query
 */
export const generateAIResponse = async (expert: Expert, userQuery: string): Promise<string> => {
  try {
    console.log("Generating AI response for expert:", expert.name);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',  // Using gpt-4 instead of gpt-4o-mini
        messages: [
          {
            role: 'system',
            content: `You are ${expert.name}, ${expert.role}. ${expert.bio} Respond in a ${expert.tone} tone. Keep responses under 150 words and focused on your area of expertise.`
          },
          {
            role: 'user',
            content: userQuery
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API response error:', errorData);
      throw new Error(`API error: ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    toast({
      title: "AI Response Error",
      description: "Could not generate AI response. Please try again later.",
      variant: "destructive",
    });
    // Don't return a fallback answer, to avoid misleading the user
    throw error;
  }
};
