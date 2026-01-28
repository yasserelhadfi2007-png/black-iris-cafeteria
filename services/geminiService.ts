
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { MenuItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Iris, the virtual concierge for 'Black Iris', a premium cafeteria in Meknes, Morocco.
You are elegant, hospitable, and knowledgeable about both the menu and the city of Meknes.
Black Iris is located near the historical Medina and Lahdim Square.
Menu Highlights:
- Beldi Breakfast (45 DH): Msemen, Harcha, eggs, local honey.
- Black Iris Burger (65 DH): Angus beef, truffle mayo, caramelized onions.
- Signature Nous-Nous (15 DH): Local coffee & steamed milk.
- Moroccan Mint Tea (20 DH): High-quality tea with fresh mint.
- Almond Pastries (30 DH): Assorted traditional sweets.

Keep responses concise and sophisticated. Use Moroccan hospitality terms like 'Marhaba'.
`;

export const sendMessage = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...history, { role: 'user', parts: [{ text: message }] }],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return response.text;
};

export const generateDailySpecial = async (): Promise<{ name: string; description: string; imageUrl: string }> => {
  const textResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: "Create a unique daily special for a Moroccan high-end cafe. Return only JSON with 'name' and 'description'.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING }
        },
        required: ["name", "description"]
      }
    }
  });

  const data = JSON.parse(textResponse.text || '{}');
  
  // Generate a matching image
  const imageResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: `High-quality professional food photography of ${data.name}: ${data.description}. Elegant plating, luxury cafe setting, natural lighting.` }]
    },
    config: {
      imageConfig: { aspectRatio: "16:9" }
    }
  });

  let imageUrl = '';
  for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      imageUrl = `data:image/png;base64,${part.inlineData.data}`;
      break;
    }
  }

  return { ...data, imageUrl };
};

export const getLocalRecommendations = async (lat: number, lng: number) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-lite-latest',
    contents: `What interesting historical landmarks are near these coordinates in Meknes? lat: ${lat}, lng: ${lng}`,
    config: {
      tools: [{ googleMaps: {} }],
      toolConfig: {
        retrievalConfig: {
          latLng: { latitude: lat, longitude: lng }
        }
      }
    }
  });

  return {
    text: response.text,
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
  };
};
