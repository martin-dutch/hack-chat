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
import NewYorkTimes from '@/app/test/page'

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
    <>
      <Toolbar title={`Strategy Summary`} onCallback={() => {
        window.location.href = `/news`
      }} />
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
          description={news.content}/> 
        </>
      </div>
    </>
  )
}
