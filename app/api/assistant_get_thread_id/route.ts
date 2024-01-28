import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  })

export async function POST(req: Request) {
    // Create a thread if needed
    const threadId = (await openai.beta.threads.create({})).id
    const threadId2 = (await openai.beta.threads.create({})).id
  
    return new Response(JSON.stringify({ threadId, threadId2 }), {
        headers: { 'Content-Type': 'application/json' }
      });
  }
  
  