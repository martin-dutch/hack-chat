import { getChat } from '@/app/actions';
import { auth } from '@/auth';
import { Chat } from '@/lib/types';
import { getRandomNumberInRange } from '@/lib/utils';
import { kv } from '@vercel/kv';
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

  
  // const niki = (searchParams.get('niki') as string) === 'niki'

  const chat = await getChat(chatId ?? '', userId)

  try {
    const results = await Promise.allSettled([doRunsWithStrats(
      {
        roundnumber,
        chat,
        inputMessage,
        niki: true
      }
    ), doRunsWithStrats(
      {
        roundnumber,
        chat,
        inputMessage,
        niki: false
      }
    )]);

    console.log('results', JSON.stringify(results))
  


    // CREATE summary of niki vs trump
    // 

      const summary = await getAssistantReply({
        assistantId: 'asst_8o36HjD0Gx2h6TaMwANwoRNQ',
        content: `Niki Strategy: ${results[0].value} /n Trump Strategy: ${results[1].value}`
      });

      const title = await getAssistantReply({
        assistantId: 'asst_2GupFb1sk0vQL2m0iuFyCnAa',
        content: `Summary: ${summary[0][0]?.text?.value}`
      });

      const resultsPoll = await getAssistantReply({
        assistantId: 'asst_sXdokNxmrlh522FL0WQPYn9n',
        content: `Results: ${summary[0][0]?.text?.value}`
      })

      console.log('resultsPoll', JSON.stringify(resultsPoll))


      
// export interface Chat extends Record<string, any> {
//   id: string
//   title: string
//   createdAt: Date
//   userId: string
//   path: string
//   messages: Message[]
//   sideChats: {
//     trumpId: string;
//     trumpAdverseId: string;
//     nikiId: string;
//     nikiAdverseId: string;
//   }[]
//   sharePath?: string
// }

console.log('title', JSON.stringify(title))
console.log('summa', JSON.stringify(summary))

    const payload = {
      ...chat,
      id: chatId,
      // title,
      userId,
      createdAt: Date.now(),
      // path,
      articles: (chat?.articles ?? []).concat([{
        title: getTitle(title),
        text: getText(summary),
        image: '',
        resultsNikky: getResultsNikky(resultsPoll),
        resultsTrump: getResultsTrump(resultsPoll)
      }])
    }
    console.log('payload', JSON.stringify(payload))
    await kv.hmset(`chat:${chatId}`, {...chat, ...payload})
    console.log('done')
    return new Response(JSON.stringify({ generatedResponses : JSON.stringify(payload)}), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: JSON.stringify(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function getTitle(title: any): string {
  try {
    return title[0]?.content[0]?.text?.value ?? title[0][0]?.text?.value ?? 'Trump Dominates Primaries; Haley Battles Back, Focusing on Swing States and Sharpening Rhetoric';
  } catch (error) {
    console.error(error);
    return 'Trump Dominates Primaries; Haley Battles Back, Focusing on Swing States and Sharpening Rhetoric';
  }
}

function getText(summary: any): string {
  try {
    return summary[0]?.content[0]?.text?.value ?? summary[0][0]?.text?.value ?? `The electoral landscape for the primaries is turning out to be a tough slugfest. Trump is ahead in every state, with astonishing leads in Texas (76%), Tennessee (80%), and a far smaller but still substantive lead in Vermont (47%). Meanwhile, Haley trails considerably everywhere but has slightly smaller margins to close in the likes of South Dakota (52% Trump), Vermont (47% Trump), and South Carolina (58% Trump).\n\nBoth candidates have different strategies. Haley has taken the gloves off, dubbing Trump “totally unhinged” and strategically focusing on states with smaller lead gaps — South Carolina, South Dakota, and Vermont. Herculean efforts are being made to resonate with potential swing voters and demographics dissatisfied with the current political discourse. However, her prior subtler tactics have not gathered enough momentum, and it remains to be seen whether this increased aggression will make a considerable dent in Trump's steady support.\n\nOn the flip side, Trump, playing to his numerical strengths, is reinforcing his strongholds — states like Florida, Texas, and Arizona — while simultaneously attempting to sway the swing states even further in his advantage. He's capitalizing on economic and immigration-centric messaging, leveraging his first-term achievements to appeal to America's primary concerns. \n\nWhile the financial race is neck-and-neck with campaigns, Trump lags slightly behind Haley regarding Super PAC spending. It's worthy to watch how these resources will be maneuvered in the coming weeks.\n\nGiven the current strategies and standings, Trump's position is robust. However, with volatile electoral landscapes, nothing is carved in stone. Haley might pick up speed if her aggressive approach pays off in the swing states while Trump's economy-centric narrative continues to resonate, posing solid conservation for his base. NF.\n`;
  } catch (error) {
    console.error(error);
    return `The electoral landscape for the primaries is turning out to be a tough slugfest. Trump is ahead in every state, with astonishing leads in Texas (76%), Tennessee (80%), and a far smaller but still substantive lead in Vermont (47%). Meanwhile, Haley trails considerably everywhere but has slightly smaller margins to close in the likes of South Dakota (52% Trump), Vermont (47% Trump), and South Carolina (58% Trump).\n\nBoth candidates have different strategies. Haley has taken the gloves off, dubbing Trump “totally unhinged” and strategically focusing on states with smaller lead gaps — South Carolina, South Dakota, and Vermont. Herculean efforts are being made to resonate with potential swing voters and demographics dissatisfied with the current political discourse. However, her prior subtler tactics have not gathered enough momentum, and it remains to be seen whether this increased aggression will make a considerable dent in Trump's steady support.\n\nOn the flip side, Trump, playing to his numerical strengths, is reinforcing his strongholds — states like Florida, Texas, and Arizona — while simultaneously attempting to sway the swing states even further in his advantage. He's capitalizing on economic and immigration-centric messaging, leveraging his first-term achievements to appeal to America's primary concerns. \n\nWhile the financial race is neck-and-neck with campaigns, Trump lags slightly behind Haley regarding Super PAC spending. It's worthy to watch how these resources will be maneuvered in the coming weeks.\n\nGiven the current strategies and standings, Trump's position is robust. However, with volatile electoral landscapes, nothing is carved in stone. Haley might pick up speed if her aggressive approach pays off in the swing states while Trump's economy-centric narrative continues to resonate, posing solid conservation for his base. NF.\n`;
  }
}


function getResultsNikky(results: any): number {
  try {
    return parseInt(results[0][0]?.text?.value.split(' ')[0]) ?? getRandomNumberInRange(43, 50);
  } catch (error) {
    console.error(error);
    return getRandomNumberInRange(43, 50);
  }
}

export function getResultsTrump(results: any): number {
  try {
    return parseInt(results[0][0]?.text?.value.split(' ')[1]) ?? getRandomNumberInRange(43, 50);
  } catch (error) {
    console.error(error);
    return getRandomNumberInRange(43, 50);
  }
}

async function doRunsWithStrats({
  roundnumber,
  chat,
  inputMessage,
  niki
}: {
  roundnumber: number;
  chat?: Chat | null;
  inputMessage?: string | null;
  niki: boolean;
}) : Promise<string> {
  const threadId = niki ? chat?.sideChats[roundnumber].nikiId : chat?.sideChats[roundnumber].trumpId
  const adverseThreadId = niki ? chat?.sideChats[roundnumber].nikiAdverseId : chat?.sideChats[roundnumber].trumpAdverseId

  // // Create a thread if needed
  // const threadId = threadIdINput ?? (await openai.beta.threads.create({})).id;

  // console.log('threadId', threadId);
    // const responseText = await getAssistantReply({
    //   assistantId: 'asst_NMlfKjbsBEnZNsq4DHx0upWQ',
    //   threadId,
    //   content: inputMessage ?? ''
    // });

    // console.log('responseText', JSON.stringify(responseText));

    // const actualText = responseText[0][0].text ?? 'no response'

    let lastResponse = ''
    let generatedResponses: string[] = [];
    let lastTrumpResponse = ''
    for (let i = 0; i < 1; i++) {

      // Message to trump


      const responseText = await getAssistantReply({
        assistantId: niki ? 'asst_eeaOPQnAm8ZvMznbia73kVsf' : 'asst_1hZXnkQnGP0yt86buk3XeS8b',
        threadId: threadId,
        content: i === 0 ? (inputMessage ?? '') : `Criticism on last strategy: ${lastResponse}`
      });
  
      console.log('responseText', JSON.stringify(responseText));
  
      lastTrumpResponse = responseText[0][0].text.value ?? 'no response'

      if(i === 2) continue;

      const responseText1 = await getAssistantReply({
        assistantId: niki ? 'asst_NMlfKjbsBEnZNsq4DHx0upWQ' :  'asst_arAjbxm7Z9UvAGV7hwylsBJi',
        threadId: adverseThreadId,
        content: `${niki ? 'Niki' : 'Trump'}: ${lastTrumpResponse}`
      });

      lastResponse = responseText1[0][0].text.value ?? 'no response'
      // Message to adversarial


      // generatedResponses.push(actualText);
    }
    return lastTrumpResponse
}

async function getAssistantReply({ assistantId, threadId, content }: {
    assistantId: string;
    threadId?: string | null;
    content: string;
}) {

  const threadIdFinal = threadId ?? (await openai.beta.threads.create({})).id

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadIdFinal, {
    role: 'user',
    content: content
  });

  console.log('createdMessage', createdMessage);

  // Run the assistant on the thread
  const run = await openai.beta.threads.runs.create(threadIdFinal, {
    assistant_id: assistantId
  });

    console.log('run', run.id);

  // Wait for the run to complete
  await waitForRunCompletion(openai, threadIdFinal, run);
  
  console.log('run done', run.id);

  // Get the assistant's response
  const responseMessages = await openai.beta.threads.messages.list(threadIdFinal, {
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
