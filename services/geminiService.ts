import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { HERO_DATA, EXPERIENCE_DATA, PROJECT_DATA, SKILLS_DATA } from '../constants';

// Construct the system instruction based on portfolio data
const flatSkills = SKILLS_DATA.map(s => s.items).flat().join(", ");

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for ${HERO_DATA.name}'s portfolio website. 
Your goal is to answer visitor questions about ${HERO_DATA.name} professionally, concisely, and friendly.

Here is the context about ${HERO_DATA.name}:
- Title: ${HERO_DATA.title}
- Tagline: ${HERO_DATA.tagline}
- Location: ${HERO_DATA.location}
- Skills: ${flatSkills}
- Experience: ${JSON.stringify(EXPERIENCE_DATA)}
- Projects: ${JSON.stringify(PROJECT_DATA)}
- Contact Email: ${HERO_DATA.contact.email}
- Phone: ${HERO_DATA.contact.phone}

Guidelines:
- Keep answers relatively short (under 3 sentences usually).
- If asked about contact info, provide the email.
- If asked about something not in the data, politely say you don't know but suggest contacting them directly.
- Use a professional but approachable tone.
- Do not make up facts.
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
    if (!genAI) {
        genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return genAI;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = getGenAI();

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};