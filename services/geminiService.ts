import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to guide the AI's persona as a Harmayn RCM expert
const SYSTEM_INSTRUCTION = `
You are the Virtual Consultant for Harmayn RCM, a premier Medical Billing and Revenue Cycle Management company.
Your goal is to assist healthcare providers and practice managers who are visiting the website.

Key Business Information:
- **Name**: Harmayn RCM
- **Mission**: Optimizing Revenue, Maximizing Care.
- **Core Services**: Medical Billing, Medical Coding (ICD-10, CPT), Accounts Receivable (AR) Follow-up, Denial Management, Provider Credentialing, Patient Help Desk.
- **Value Proposition**: We typically increase practice revenue by 15-20%, reduce denial rates to under 5%, and ensure transparent 24/7 reporting.
- **Target Audience**: Private practices, hospitals, labs, and specialty clinics.
- **Contact**: Users can email info@harmaynrcm.com or use the contact form on the site.

Behavioral Guidelines:
- Be professional, empathetic, and concise.
- Focus on the benefits of outsourcing billing: reducing administrative burden, improving cash flow, and ensuring compliance.
- If asked for pricing, explain that it is customized based on practice size and specialty, and suggest they request a free audit/quote.
- Do not make up fake employees or specific client names.
`;

let chatInstance: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (chatInstance) return chatInstance;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  chatInstance = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getGeminiChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently experiencing high traffic. Please try again later or contact our support team directly.";
  }
};
