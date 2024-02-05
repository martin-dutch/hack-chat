import OpenAI from 'openai'
import Request from 'next'
import { auth } from '@/auth';
import { getChat } from '@/app/actions';
import { USER_ID } from '@/lib/utils';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  })

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);

    // const threadIdINput = searchParams.get('threadId') as string | undefined;
    const roundnumber = Number(searchParams.get('roundnumber')) ?? 0
    const chatId = searchParams.get('chatId') as string | undefined;
    const niki = (searchParams.get('niki') as string) === 'niki'


    // console.log('roundnumber', roundnumber)
    // console.log('chatId', chatId)
    // console.log('searchParams.ge', searchParams.get('niki') as string)
    // console.log('niki', niki)

    const userId = USER_ID// (await auth())?.user.id ?? ''

    const chat = await getChat(chatId ?? '', userId)

    const threadMainId = niki ? chat?.sideChats[roundnumber].nikiId : chat?.sideChats[roundnumber].trumpId
    const threadAdverseId = niki ? chat?.sideChats[roundnumber].nikiAdverseId : chat?.sideChats[roundnumber].trumpAdverseId

    // const threadId = chat.sideChats[roundnumber].trumpId

    // const threadId = searchParams.get('threadId') as string | undefined;
    // console.log('threadId')
    if(threadMainId == null || threadAdverseId == undefined) {
        return new Response(JSON.stringify({ messages: [] }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const messages = [...(await openai.beta.threads.messages.list(threadMainId)).data.filter((message) => message.role === 'assistant').map((mess) => ({...mess, role: 'user'})), ...(await openai.beta.threads.messages.list(threadAdverseId)).data.filter((message) => message.role === 'assistant')].sort((a, b) => a.created_at - b.created_at)

    // chatMessages?.map((message) => ({
    //     id: message.id,
    //     content: message.content[0].text.value,
    //     role: message.role
    //   })))

    // console.log('lets try!', threadId)
    
    // console.log('messages',JSON.stringify(messages))
    return new Response(JSON.stringify({ messages: messages }), {
        headers: { 'Content-Type': 'application/json' }
    });
}

  