'use client'

import { useChat, type Message } from 'ai/react'

import { cn, getRandomNumberInRange } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useEffect, useRef, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useChatHook } from '@/lib/hooks/use-chat'
import { useAuth } from '@/lib/hooks/use-auth'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/auth'
import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { USER_ID } from '@/lib/utils'
import PollResults from '@/components/poll-results'
import Toolbar from '@/components/toolbar'
import NewYorkTimes from '@/components/nya'
import { SideChatPanel } from '@/components/side-chat-panel'
import { Separator } from '@/components/ui/separator'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export default function ChatPage({ params }: ChatPageProps) {
//   JnmD1ht
  const router = useRouter()
  const path = usePathname()
  const param = useParams()
  // const roundSelect = 0
  const [round, setRound] = useState(0)
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )

  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(new URL(currentUrl).search);

  const newsTitle = urlParams.get('newsTitle') ?? 'Trump slams Haley in the latest Primary polls and says she is horrible!'
  const id = urlParams.get('chatId') ?? 'JnmD1ht'

  // const  newsTitle = param.get('newsTitle') ?? 'Trump slams Haley in the latest Primary polls and says she is horrible!'

  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Set up a timer to update the state every 10 seconds
    const interval = setInterval(() => {
      setTick(tick => tick + 1); // Update the state to trigger a rerender
    }, 5000);

    // Cleanup function to clear the timer
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

    const {
      chat,
      loading,
      error
    } = useChatHook(id ?? '', USER_ID ?? '', tick + round)

    const showNewsArticle = chat?.articles[round] != null && chat?.articles[round]?.text != null
    const news: {
      title: string;
      image: string;
      content: string;
    } = {
      title: chat?.articles[round]?.title ?? '',
      image: chat?.articles[round]?.image ?? '',
      content: chat?.articles[round]?.text ?? ''
    }

   
    const nextArticleAvailable = chat?.articles[round + 1]?.title != null && chat?.articles[round + 1]?.title?.length !== 0

    console.log('chat', chat)
  return (
    <div className="w-[90vw] mx-auto bg-white mt-[10vh]">
      <Toolbar stage={3} />
      <Tabs defaultValue="Round 1" className="w-full">
      <TabsList className={`grid w-[600px] grid-cols-${(chat?.articles.length ?? 0) + 1} mx-auto mt-6`}>
        {
          chat?.articles.map((article, index) => {
            return (
              <TabsTrigger key={index} value={`Round ${index + 1}`}>{`Round ${index + 1}`}</TabsTrigger>
            )
          })
        }
        <TabsTrigger value="summary">Summary</TabsTrigger>
      </TabsList>
      {
       chat?.articles.map((article, index) => {
          return (
            <TabsContent key={index} value={`Round ${index + 1}`}>
          <div className='flex justify-between'>
          <div className="p-4">
        <div className="text-3xl font-bold">{`${'Nikki Haley'} - HQ`}</div>
      </div>
      <div className="p-4">
        <div className="text-3xl font-bold">{`${'Trump'} - HQ`}</div>
      </div>
          </div>
          <div className='flex justify-between'>
          <div className="p-4">
            
          <div className="flex items-center w-full">
              <img
                src="data:image/png;base64,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"
                alt="Image 3"
                className="w-8 h-8 mr-4"
              />
              <h1 className="font-semibold text-[2vh]">{`${article.title}` || 'Trump destroys Deep State puppet Nikki to MAGA!'}</h1>
            </div>
              {/* <div className="text-2x-lg font-bold">{`${article.title}`}</div> */}
      </div>
      <div className="p-4">
      <div className="flex items-center w-full">
              <img
                src="data:image/png;base64,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"
                alt="Image 3"
                className="w-8 h-8 mr-4"
              />
              <h1 className="font-semibold text-[2vh]">{`${article.title}` || 'Trump destroys Deep State puppet Nikki to MAGA!'}</h1>
            </div>
      </div>
          </div>
          <div className="flex flex-row overflow-auto h-[65vh]" >
          {index !== (chat?.articles.length ?? 0) && (<SideChatPanel
            id={id}
            isLoading={false}
              start={true}
              name='Nikki Haley'
              roundnumber={index}
              chatId={id}
              onNumberMessagesChanged={(numb) => {}}
              threadId={chat?.sideChats[round]?.nikiId ?? ''}
            />)}
            <Separator className='h-[65vh] bg-slate-200' orientation='vertical'/>
            {/* <div className='h-full w-[1%] bg-slate-100'></div> */}
            {index !== (chat?.articles.length ?? 0) && (<SideChatPanel
            id={id}
            isLoading={false}
              start={false}
              name='Trump'
              roundnumber={index}
              onNumberMessagesChanged={(numb) => {}}
              chatId={id}
              threadId={chat?.sideChats[round]?.trumpId ?? ''}
            />)}
          </div>



          {chat?.articles[index + 1]?.title != null && chat?.articles[index + 1]?.title?.length !== 0 && (<div className='w-[80vw] mx-auto'>
            <div className='mt-10'>
            <div className="text-3xl font-bold">
              {`
                Simulation ${round + 1} results
              `}</div> 
             <Separator className='mt-4'/>
            </div>

        
          <NewYorkTimes headline={chat.articles[round + 1]?.title ?? ''}
              image={chat.articles[round + 1]?.image}
              roundNumber={round}
              isShowingArticleGenerationAnimation={false}
              pollResultNikky={chat.articles[round + 1]?.resultsNikky ?? 50}
              description={chat.articles[round + 1]?.text ?? ''}/>
          </div>)}
             
            </TabsContent>
          )
        })}
      
      <TabsContent value="summary">
        <div className='flex w-[80%] mx-auto'>
          <div className='mx-auto w-[40%] my-6  '>
            {/* <h1 className="pt-2 font-bold tracking-tighter sm:text-2xl md:text-1xl">Poll results</h1> */}
            {
              chat?.articles.map((article, index) => {
                return (
                <div key={index} onClick={() => {
                  console.log('CLICKING index', index)
                  setRound(index)
                  }}>
                  <div className={`pointer-events-none `}>
                      <h1 className='text-[2vh] font-semibold py-2'>{`Round ${index + 1}`}</h1>
                      <div className={`pointer-events-none rounded-lg p-4 ${index !== round ? 'bg-white' : 'bg-gray-100' } `}>
                      <PollResults key={index} selected={index === round} index={index} nikki={article.resultsNikky ?? 50} trump={100 - (article.resultsNikky ?? 50)}  />
                      </div>
                  </div>
              </div>)
              })
            }
          </div>
          <div className='w-[50%]'>
          <NewYorkTimes headline={news.title}
            image={news.image}
            roundNumber={round}
            description={news.content}/> 
          </div>
        </div>
      </TabsContent>
    </Tabs>
      
    </div>
  )
}
