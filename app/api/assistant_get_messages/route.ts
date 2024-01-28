import OpenAI from 'openai'
import Request from 'next'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  })

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);

    const threadId = searchParams.get('threadId') as string | undefined;
    console.log('threadId', threadId)
    if(threadId == null) {
        return new Response(JSON.stringify({ messages: [] }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
    console.log('lets try!', threadId)
    const messages = (await openai.beta.threads.messages.list(threadId)).data
    console.log('messages',JSON.stringify(messages))
    return new Response(JSON.stringify({ messages: messages }), {
        headers: { 'Content-Type': 'application/json' }
    });
}

  