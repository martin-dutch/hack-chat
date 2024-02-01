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

    const showPoll = !showNewsArticle && round > 0;

    const hasMounted = useRef(false);

    console.log('chat', chat)
  return (
    <div className="w-full">
      <Toolbar title={`Strategy Summary`} onCallback={() => {
        window.location.href = `/news`
      }} />
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
        <NewYorkTimes headline={article.title ?? ''}
          image={article.image}
          roundNumber={index}
          isShowingArticleGenerationAnimation={false}
          description={article.text ?? ''}/> 
              {index !== (chat?.articles.length ?? 0) -1 && (<SideChatPanel
            id={id}
            isLoading={false}
              start={true}
              name='Nikki Haley'
              roundnumber={index}
              chatId={id}
              onNumberMessagesChanged={(numb) => {}}
              threadId={chat?.sideChats[round]?.nikiId ?? ''}
            />)}
            {index !== (chat?.articles.length ?? 0) -1 && (<SideChatPanel
            id={id}
            isLoading={false}
              start={false}
              name='Trump'
              roundnumber={index}
              onNumberMessagesChanged={(numb) => {}}
              chatId={id}
              threadId={chat?.sideChats[round]?.trumpId ?? ''}
            />)}
            </TabsContent>
          )
        })}
      
      <TabsContent value="summary">
        <div className='flex w-[80%] mx-auto'>
          <div className='mx-auto w-[40%] my-6  '>
            <h1 className="pt-2 font-bold tracking-tighter sm:text-2xl md:text-1xl">Poll results</h1>
            {
              chat?.articles.map((article, index) => {
                return (
                <div key={index} onClick={() => {
                  console.log('CLICKING index', index)
                  setRound(index)
                  }}>
                  <div className='pointer-events-none'>
                      <PollResults key={index} selected={index === round} index={index} nikki={article.resultsNikky ?? 50} trump={100 - (article.resultsNikky ?? 50)}  />
                  </div>
              </div>)
              })
            }
          </div>
          <>
          <NewYorkTimes headline={news.title}
            image={news.image}
            roundNumber={round}
            description={news.content}/> 
          </>
        </div>
      </TabsContent>
    </Tabs>
      
    </div>
  )
}
