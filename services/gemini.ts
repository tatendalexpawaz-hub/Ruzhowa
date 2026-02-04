
import { GoogleGenAI } from "@google/genai";
import { COLORS } from "../constants";

/**
 * Consults the Gemini agricultural expert model for advice based on user query.
 */
export const askAgriculturalExpert = async (query: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an expert agricultural consultant for RuZhoWa Boran & Tuli Stud Farms, based in Beatrice, Zimbabwe. 
        The business name is specifically spelled "RuZhoWa" (R-u-Z-h-o-W-a).
        You specialize in elite cattle genetics (Boran and Tuli), Dorper sheep, and commercial feedlot operations. 
        Your tone is professional, scientific, yet deeply rooted in Zimbabwean farming heritage. 
        Always encourage excellence and invite serious breeders to inquire about RuZhoWa stud stock.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the RuZhoWa expert database right now. Please try again later.";
  }
};