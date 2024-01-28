import { auth } from '@/auth';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
});

export async function POST(req: Request) {
  // const input = await req.json();
  
  const userId = (await auth())?.user.id
  const {searchParams} = new URL(req.url);
  const threadIdINput = searchParams.get('threadId') as string | undefined;
  const inputMessage = searchParams.get('message') as string | undefined;

  // Create a thread if needed
  const threadId = threadIdINput ?? (await openai.beta.threads.create({})).id;

  console.log('threadId', threadId);

  try {
    const responseText = await getAssistantReply({
      assistantId: 'asst_NMlfKjbsBEnZNsq4DHx0upWQ',
      threadId,
      content: inputMessage ?? ''
    });

    console.log('responseText', JSON.stringify(responseText));

    return new Response(JSON.stringify({ responseText }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'error, not logging you lazy!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
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
