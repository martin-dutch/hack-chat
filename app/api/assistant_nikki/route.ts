import { experimental_AssistantResponse } from 'ai'
import OpenAI from 'openai'
import { MessageContentText } from 'openai/resources/beta/threads/messages/messages'
import { getAssistentReply } from '../assistant_advisor/route'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

const homeTemperatures = {
  bedroom: 20,
  'home office': 21,
  'living room': 21,
  kitchen: 22,
  bathroom: 23
}

export async function POST(req: Request) {
  const input: {
    threadId: string | null
    message: string
  } = await req.json()

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id

  const response = getAssistentReply({
    assistantId: 'asst_eeaOPQnAm8ZvMznbia73kVsf',
    threadId,
    content: input.message
  })

  console.log('response', JSON.stringify(response))

  return response
}
