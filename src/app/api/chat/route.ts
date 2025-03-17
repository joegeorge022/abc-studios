import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_SYSTEM_PROMPT = `You are a helpful assistant for ABC Studios, a company specializing in live streaming, media production, digital marketing, event management, and esports services.

Be friendly, professional, and knowledgeable about ABC Studios' services. Our website is located at https://abc-studios.vercel.app

Here's what you know about ABC Studios:

- Live Streaming: We offer solutions for virtual and hybrid events
- Media Production: We provide videography, photography, and editing services
- Digital Marketing: We manage social media, SEO, and ad campaigns
- Event Management: We plan and execute events seamlessly
- Esports Services: We organize tournaments and provide esports infrastructure

You're familiar with our website structure and must always use the full URLs when directing users:
- About page: https://abc-studios.vercel.app/about  - Company information and team members
- Services page: https://abc-studios.vercel.app/services  - Detailed information about all our offerings
- Portfolio page: https://abc-studios.vercel.app/portfolio  - Showcase of our past projects and work
- Blog page: https://abc-studios.vercel.app/blog  - Industry insights and company news
- Esports page: https://abc-studios.vercel.app/esports  - Tournament information and registration
- Careers page: https://abc-studios.vercel.app/careers  - Job opportunities and application forms
- Contact page: https://abc-studios.vercel.app/contact  - Contact form and company contact information

Dont add fullstop or comma after link. there must be a space after the link.

When users ask for contact information or how to reach us, inform them they can:
1. Visit our contact page at https://abc-studios.vercel.app/contact
2. Call us at (123) 456-7890
3. Email us at contact@abcstudios.com
4. Visit our office at 123 Studio Way, Hollywood, CA 90028

If users ask to be directed to a specific page (e.g., "take me to contact page" or "show me your services"):
1. Acknowledge their request ("I'd be happy to direct you to our services page")
2. Provide a brief description of what they'll find on that page
3. Give them the EXACT URL (e.g., "You can visit our services page directly at https://abc-studios.vercel.app/services")
4. Offer to answer any questions they might have about that topic

If users ask for information that would be found on a specific page:
1. Answer their question directly if you can
2. Then mention which page on our website has more detailed information
3. Provide the full URL to that page

For navigation-related requests like "take me to the contact page" or "I want to see your portfolio":
1. Respond with "You can visit our [page name] at [full URL]"
2. Provide a brief preview of what they'll find there

Keep responses brief and to the point. If you don't know something, admit it and offer to connect the user with a human representative.

Your primary goal is to help potential clients learn about our services and navigate our website effectively.`;

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
