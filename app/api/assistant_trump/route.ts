import { getChat } from '@/app/actions';
import { auth } from '@/auth';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
});

export async function POST(req: Request) {
  // const input = await req.json();
  
  const userId = (await auth())?.user.id ?? ''


  const {searchParams} = new URL(req.url);
  
  
  const inputMessage = searchParams.get('message') as string | undefined;
  const roundnumber = Number(searchParams.get('roundnumber')) ?? 0
  const chatId = searchParams.get('chatId') as string | undefined;

  
  const niki = (searchParams.get('niki') as string) === 'niki'

  const chat = await getChat(chatId ?? '', userId)

  const threadId = niki ? chat?.sideChats[roundnumber].nikiId : chat?.sideChats[roundnumber].trumpId
  const adverseThreadId = niki ? chat?.sideChats[roundnumber].nikiAdverseId : chat?.sideChats[roundnumber].trumpAdverseId

  // // Create a thread if needed
  // const threadId = threadIdINput ?? (await openai.beta.threads.create({})).id;

  // console.log('threadId', threadId);

  try {
    // const responseText = await getAssistantReply({
    //   assistantId: 'asst_NMlfKjbsBEnZNsq4DHx0upWQ',
    //   threadId,
    //   content: inputMessage ?? ''
    // });

    // console.log('responseText', JSON.stringify(responseText));

    // const actualText = responseText[0][0].text ?? 'no response'

    let lastResponse = ''
    let generatedResponses: string[] = [];
    for (let i = 0; i < 3; i++) {

      // Message to trump


      const responseText = await getAssistantReply({
        assistantId: niki ? 'asst_eeaOPQnAm8ZvMznbia73kVsf' : 'asst_1hZXnkQnGP0yt86buk3XeS8b',
        threadId: threadId,
        content: i === 0 ? (inputMessage ?? '') : `Criticism on last strategy: ${lastResponse}`
      });
  
      console.log('responseText', JSON.stringify(responseText));
  
      const trumpResponse = responseText[0][0].text.value ?? 'no response'

      const responseText1 = await getAssistantReply({
        assistantId: niki ? 'asst_NMlfKjbsBEnZNsq4DHx0upWQ' :  'asst_arAjbxm7Z9UvAGV7hwylsBJi',
        threadId: adverseThreadId,
        content: `${niki ? 'Niki' : 'Trump'}: ${trumpResponse}`
      });

      lastResponse = responseText1[0][0].text.value ?? 'no response'
      // Message to adversarial


      // generatedResponses.push(actualText);
    }

    // CREATE summary of niki vs trump
    // 

    // const payload = {
    //   id,
    //   title,
    //   userId,
    //   createdAt,
    //   path,
    //   messages: [
    //     ...messages,
    //     {
    //       content: completion,
    //       role: 'assistant'
    //     }
    //   ]
    // }
    // await kv.hmset(`chat:${id}`, payload)
    // await kv.zadd(`user:chat:${userId}`, {
    //   score: createdAt,
    //   member: `chat:${id}`
    // })

    return new Response(JSON.stringify({ generatedResponses : JSON.stringify(generatedResponses)}), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'error, not logging you lazy!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function doRunsWithStrats(){
  
}

async function getAssistantReply({ assistantId, threadId, content }: {
    assistantId: string;
    threadId: string;
    content: string;
}) {
  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: content
  });

  console.log('createdMessage', createdMessage);

  // Run the assistant on the thread
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId
  });

    console.log('run', run.id);

  // Wait for the run to complete
  await waitForRunCompletion(openai, threadId, run);
  
  console.log('run done', run.id);

  // Get the assistant's response
  const responseMessages = await openai.beta.threads.messages.list(threadId, {
    after: createdMessage.id,
    order: 'asc'
  });

  console.log('responseMessages', JSON.stringify(responseMessages.data))

  // Extract text content from the response
  return responseMessages.data
    // .filter(message => message.role === 'assistant')
    .map(message => message.content);
}

async function waitForRunCompletion(openai: OpenAI, threadId: string, run: OpenAI.Beta.Threads.Runs.Run) {
  while (run.status === 'queued' || run.status === 'in_progress') {
    await new Promise(resolve => setTimeout(resolve, 500));
    run = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  if (run.status !== 'completed') {
    throw new Error(`Assistant run failed: ${run.status}`);
  }
}
