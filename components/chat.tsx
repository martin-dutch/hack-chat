'use client'

import { useChat, type Message } from 'ai/react'

import { cn } from '@/lib/utils'
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
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'
import { usePathname, useRouter } from 'next/navigation'
import { SideChatPanel } from './side-chat-panel'
import HandwrittenNewspaperArticle from './newspaper'
import PollResults from './poll-results'
import { useChatHook } from '@/lib/hooks/use-chat'
import { useAuth } from '@/lib/hooks/use-auth'
import Timer from './timer'

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  // const roundSelect = 0
  const [round, setRound] = useState(0)
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )

  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Set up a timer to update the state every 10 seconds
    const interval = setInterval(() => {
      setTick(tick => tick + 1); // Update the state to trigger a rerender
    }, 10000);

    // Cleanup function to clear the timer
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // const
  //   session
  //  = useAuth()
  const [previewTokenDialog, setPreviewTokenDialog] = useState(IS_PREVIEW)
  const [previewTokenInput, setPreviewTokenInput] = useState(previewToken ?? '')
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      },
      onFinish() {
        if (!path.includes('chat')) {
          window.history.pushState({}, '', `/chat/${id}`)
        }
      }
    })

    const {
      chat,
      loading,
      error
    } = useChatHook(id ?? '', '10762010' ?? '', tick)
console.log('session?.user.id','10762010')
console.log('chat Id ',id )
    console.log('chat dcsonfpiovnokn',chat)

    

    const showNewsArticle = chat?.articles[round] != null && chat?.articles[round]?.text != null
    const news: {
      title: string;
      date: string;
      content: string;
    } = {
      title: chat?.articles[round]?.title ?? '',
      date: (Date.now().toString()),
      content: chat?.articles[round]?.text ?? ''
    }

    const pollResults: {
      left: number;
      right: number;
    } = {
      left: 40,
      right: 60
    }
    const showPoll = !showNewsArticle && round > 0;

    const hasMounted = useRef(false);

    useEffect(() => {
      if (hasMounted.current) {
        console.log('FETCHING')
        fetch(`http://localhost:3000/api/assistant_trump?message=Niki Haley amps up her attacks on Trump, calling him totally unhinged.&roundnumber=${round}&chatId=${id}&niki=trump`, {
          method: 'POST',
          redirect: 'follow'
        })
        console.log('ASYNC DONE')
      } else {
        hasMounted.current = true;
      }
    }, [round])
    
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {showPoll ? <div>
          {
            chat?.articles.map((article, index) => {
              return <PollResults key={index} progress={article.score ?? 50}  />
            })
          }
        </div> : showNewsArticle ? <>
        {showNewsArticle && (<Timer onTimerComplete={() => {
          setRound((prev) => prev + 1)
          console.log('ROUND', round)
          }} />)}
        <HandwrittenNewspaperArticle title={news.title}
          date={news.date}
          content={news.content}/> 
        </> : messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>

     { chat?.sideChats[round].nikiId && ( <SideChatPanel
       id={id}
       isLoading={isLoading}
       stop={stop}
       append={append}
       reload={reload}
       messages={messages}
       input={input}
       setInput={setInput}
        start={true}
        name='Nikki Haley'
        roundnumber={round}
        chatId={id}
        threadId={chat?.sideChats[round].nikiId ?? ''}
       />)}

      {/* <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      /> */}



{ chat?.sideChats[round].trumpId && (<SideChatPanel
       id={id}
       isLoading={isLoading}
       stop={stop}
       append={append}
       reload={reload}
       messages={messages}
       input={input}
       setInput={setInput}
        start={false}
        name='Trump'
        roundnumber={round}
        chatId={id}
        threadId={chat?.sideChats[round].trumpId ?? ''}
       />)}

      <Dialog open={previewTokenDialog} onOpenChange={setPreviewTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your OpenAI Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your OpenAI API key, you can do so by{' '}
              <a
                href="https://platform.openai.com/signup/"
                className="underline"
              >
                signing up
              </a>{' '}
              on the OpenAI website. This is only necessary for preview
              environments so that the open source community can test the app.
              The token will be saved to your browser&apos;s local storage under
              the name <code className="font-mono">ai-token</code>.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={previewTokenInput}
            placeholder="OpenAI API key"
            onChange={e => setPreviewTokenInput(e.target.value)}
          />
          <DialogFooter className="items-center">
            <Button
              onClick={() => {
                setPreviewToken(previewTokenInput)
                setPreviewTokenDialog(false)
              }}
            >
              Save Token
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
