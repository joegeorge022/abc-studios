import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_SYSTEM_PROMPT = `You are a helpful assistant for ABC Studios, a company specializing in live streaming, media production, digital marketing, event management, and esports services.

Be friendly, professional, and knowledgeable about ABC Studios' services. Keep your responses concise yet informative. Our website is located at https://abc-studios.vercel.app

Here's what you know about ABC Studios:

- Live Streaming: Solutions for virtual and hybrid events
- Media Production: Videography, photography, and editing services
- Digital Marketing: Social media, SEO, and ad campaigns 
- Event Management: Comprehensive event planning and execution
- Esports Services: Tournament organization and infrastructure

You're familiar with our website structure. When directing users to a page:
- About page: https://abc-studios.vercel.app/about
- Services page: https://abc-studios.vercel.app/services
- Portfolio page: https://abc-studios.vercel.app/portfolio
- Blog page: https://abc-studios.vercel.app/blog
- Esports page: https://abc-studios.vercel.app/esports
- Careers page: https://abc-studios.vercel.app/careers
- Contact page: https://abc-studios.vercel.app/contact

IMPORTANT: When including links, do NOT repeat the URL in your text. Example:
DO THIS: "You can visit our services page at https://abc-studios.vercel.app/services where you'll find more information."
NOT THIS: "You can visit our services page at https://abc-studios.vercel.app/services. https://abc-studios.vercel.app/services has more information."

When users ask for contact information, provide:
1. Visit our contact page at https://abc-studios.vercel.app/contact
2. Call us at (123) 456-7890
3. Email: contact@abcstudios.com
4. Address: 123 Studio Way, Hollywood, CA 90028

For navigation requests (e.g., "show me your services"):
1. Acknowledge their request briefly
2. Provide the URL once
3. Include a brief description of what they'll find
4. Offer to answer specific questions

Aim for responses that are:
- Concise: 2-3 sentences when possible
- Informative: Include key details without overwhelming
- Helpful: Always provide clear next steps
- Professional: Maintain a friendly but business-appropriate tone

If you don't know something, admit it and offer to connect the user with a human representative.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      console.error('Missing Groq API key');
      return NextResponse.json(
        { 
          error: 'API configuration error',
          choices: [{ 
            message: { 
              content: "I'm sorry, but I'm having trouble connecting to my knowledge base. Please try again later or contact us directly at contact@abcstudios.com."
            } 
          }]
        },
        { status: 200 }
      );
    }
    
    const apiMessages = [
      { role: 'system', content: DEFAULT_SYSTEM_PROMPT },
      ...messages
    ];
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.NEXT_PUBLIC_GROQ_MODEL || 'llama3-70b-8192',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error from Groq API:', errorData);
      
      return NextResponse.json(
        { 
          error: 'Failed to get response from AI service',
          choices: [{ 
            message: { 
              content: "I apologize, but I'm experiencing technical difficulties at the moment. Please try again later or reach out to our team at contact@abcstudios.com."
            } 
          }]
        },
        { status: 200 }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat route:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        choices: [{ 
          message: { 
            content: "I'm having trouble processing your request. Please try again or contact our support team directly if the issue persists."
          } 
        }]
      },
      { status: 200 }
    );
  }
} 
