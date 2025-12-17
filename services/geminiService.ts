
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert fitness equipment consultant for "Home Exercise and Gym Enterprise" (HEG Enterprise).
Your goal is to help users select the best gym equipment based on their fitness goals, space constraints, and budget.
Be encouraging, professional, and knowledgeable about fitness.
Keep responses concise and energetic. 
Mention specific categories we sell: Cardio Machines, Strength Training, Home Gym Sets, Accessories.
All prices are in Ghana Cedis (GH₵).
`;

export async function getFitnessAdvice(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my fitness knowledge base right now. Please try again or contact our support team!";
  }
}
