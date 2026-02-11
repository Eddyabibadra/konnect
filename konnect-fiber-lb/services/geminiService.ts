
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    this.initialize();
  }

  private initialize() {
    try {
      // Safe check for process.env.API_KEY to avoid Uncaught ReferenceError: process is not defined
      const env = typeof process !== 'undefined' ? process.env : (globalThis as any).process?.env;
      const apiKey = env?.API_KEY;
      
      if (apiKey) {
        this.ai = new GoogleGenAI({ apiKey });
      } else {
        console.warn("Gemini API key not found in environment variable process.env.API_KEY");
      }
    } catch (error) {
      console.error("Gemini initialization failed:", error);
    }
  }

  async analyzeNetworkQuery(query: string) {
    if (!this.ai) {
      this.initialize();
      if (!this.ai) return { text: "My intelligence modules are currently offline. Please check back later." };
    }

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are the Konnect Fiber lb AI Network Assistant. 
          Your tone is sophisticated, minimalist, and expert. 
          You represent a high-end fiber ISP in Lebanon. 
          
          STRICT LANGUAGE RULE: You MUST always respond in the SAME LANGUAGE as the user's input. 
          If the user writes in Arabic, respond in Arabic. If they write in French, respond in French. 
          If they write in English, respond in English.
          
          STRICT TOPIC LIMITATION: You ONLY answer queries related to WiFi, fiber optics, network optimization, Konnect Fiber services, or connectivity troubleshooting. 
          If a user asks about anything unrelated (politics, cooking, general knowledge, etc.), politely decline in the user's language by stating that your intelligence modules are strictly dedicated to the Konnect network architecture.
          
          Explain technical concepts simply but with a focus on 'perfection' and 'premium performance'.
          Keep answers concise (max 2 sentences).`,
          temperature: 0.7,
        }
      });
      return { text: response.text || "I was unable to generate a response." };
    } catch (error) {
      console.error("Gemini Error:", error);
      return { text: "My intelligence modules are currently optimizing the grid. Please try again in a moment." };
    }
  }

  async getCoverageInsights(location: string, lat: number, lng: number) {
    if (!this.ai) {
      this.initialize();
      if (!this.ai) return { text: "Network insights are currently unavailable.", links: [] };
    }

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Provide a sophisticated summary of the connectivity landscape and infrastructure in ${location}. Mention that Konnect Fiber lb is the leading provider here with Konnect Fiber availability.`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: lat,
                longitude: lng
              }
            }
          }
        },
      });

      const groundingLinks = response.candidates?.[0]?.groundingMetadata?.groundingChunks
        ?.map((chunk: any) => chunk.maps)
        .filter(Boolean) || [];

      return {
        text: response.text || "Regional optimization in progress.",
        links: groundingLinks
      };
    } catch (error) {
      console.error("Coverage Insights Error:", error);
      return { text: "Our network insights for this region are currently being synchronized.", links: [] };
    }
  }
}

export const geminiService = new GeminiService();
