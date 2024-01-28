import { auth } from '@/auth';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid';
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  })

export async function POST(req: Request) {
    // const {searchParams} = new URL(req.url);

    const input: {
        chatId: string | null
      } = await req.json()
    const userId = (await auth())?.user.id
    const chatId = input.chatId ?? undefined

    // Create a thread if needed
    // const threadId = threadIdINput ?? (await openai.beta.threads.create({})).id;

    // console.log('threadId', threadId);

    // Create a thread if needed
    // const threadId = (await openai.beta.threads.create({})).id
    // const threadId2 = (await openai.beta.threads.create({})).id

    const threadId1 = (await openai.beta.threads.create({})).id
    const threadId2 = (await openai.beta.threads.create({})).id
    const threadId3 = (await openai.beta.threads.create({})).id
    const threadId4 = (await openai.beta.threads.create({})).id
    const threadId5 = (await openai.beta.threads.create({})).id
    const threadId6 = (await openai.beta.threads.create({})).id
    const threadId7 = (await openai.beta.threads.create({})).id
    const threadId8 = (await openai.beta.threads.create({})).id
    const threadId9 = (await openai.beta.threads.create({})).id
    const threadId10 = (await openai.beta.threads.create({})).id
    const threadId11 = (await openai.beta.threads.create({})).id
    const threadId12 = (await openai.beta.threads.create({})).id
    const threadId13 = (await openai.beta.threads.create({})).id
    const threadId14 = (await openai.beta.threads.create({})).id
    const threadId15 = (await openai.beta.threads.create({})).id
    const threadId16 = (await openai.beta.threads.create({})).id
    const threadId17 = (await openai.beta.threads.create({})).id
    const threadId18 = (await openai.beta.threads.create({})).id
    const threadId19 = (await openai.beta.threads.create({})).id
    const threadId20 = (await openai.beta.threads.create({})).id


    const title = 'title'//json.messages[0].content.substring(0, 100)
    const id = chatId
    const createdAt = Date.now()
    const path = `/chat/${id}`
    const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [],
        sideChats: [
            {
                trumpId: threadId1,
                nikiId: threadId2
            },
            {
                trumpId: threadId3,
                nikiId: threadId4
            },
            {
                trumpId: threadId5,
                nikiId: threadId6
            },
            {
                trumpId: threadId7,
                nikiId: threadId8
            },
            {
                trumpId: threadId9,
                nikiId: threadId10
            },
            {
                trumpId: threadId11,
                nikiId: threadId12
            },
            {
                trumpId: threadId13,
                nikiId: threadId14
            },
            {
                trumpId: threadId15,
                nikiId: threadId16
            },
            {
                trumpId: threadId17,
                nikiId: threadId18
            },
            {
                trumpId: threadId19,
                nikiId: threadId20
            }
        ]
    }
    await kv.hmset(`chat:${id}`, payload)
    await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
    })
  
    return new Response(JSON.stringify({}), {
        headers: { 'Content-Type': 'application/json' }
      });
  }
  
  