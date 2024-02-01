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
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { SideChatPanel } from './side-chat-panel'
import HandwrittenNewspaperArticle from './newspaper'
import PollResults from './poll-results'
import { useChatHook } from '@/lib/hooks/use-chat'
import { useAuth } from '@/lib/hooks/use-auth'
import Timer from './timer'
import Toolbar from './toolbar'
import NewYorkTimes from './nya'

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
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
    } = useChatHook(id ?? '', '10762010' ?? '', tick + round)
    console.log('session?.user.id','10762010')
    console.log('chat Id ',id )
    console.log('chat dcsonfpiovnokn',chat)

    

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

    const pollResults: {
      left: number;
      right: number;
    } = {
      left: 40,
      right: 60
    }
    const showPoll = !showNewsArticle && round > 0;


    useEffect(() => {
      if(round > 1) {
        // GO to results page!!!!!
        window.location.href = `/summary?chatId=${id}`
      } 
        console.log('FETCHING')
        fetch(`/api/assistant_trump?message=${newsTitle}&roundnumber=${round}&chatId=${id}&niki=trump`, {
          method: 'POST',
          redirect: 'follow'
        })
        console.log('ASYNC DONE')
    }, [round])
    
  return (
    <>
      <Toolbar title={round === 0 ? `News Title: ${newsTitle}` : `Round ${round}`} onCallback={() => {
        window.location.href = `/news`
      }} />
      <div>
        {showPoll ? <div className='max-w-2xl mx-auto  my-6 p-8 relative '>
          <h1 className="pt-2 font-bold tracking-tighter sm:text-2xl md:text-1xl">Poll results</h1>
          {
            chat?.articles.map((article, index) => {
              return <PollResults key={index} index={index} nikki={article.resultsNikky ?? 50} trump={100 - (article.resultsNikky ?? 50)}  />
            })
          }
        </div> : showNewsArticle ? <>
        {showNewsArticle && (<Timer onTimerComplete={() => {
          setRound((prev) => prev + 1)
          console.log('ROUND', round)
          }} />)}
        <NewYorkTimes headline={news.title}
          image={news.image}
          description={news.content}/> 
        </> : messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <NewYorkTimes headline={newsTitle}
          description={`Trump argues that Haley is horrible and can not be trusted to lead the Republican party. The electoral landscape for the primaries is turning out to be a tough slugfest. Trump is ahead in every state, with astonishing leads in Texas (76%), Tennessee (80%), and a far smaller but still substantive lead in Vermont (47%). Meanwhile, Haley trails considerably everywhere but has slightly smaller margins to close in the likes of South Dakota (52% Trump), Vermont (47% Trump), and South Carolina (58% Trump).\n\nBoth candidates have different strategies. Haley has taken the gloves off, dubbing Trump “totally unhinged” and strategically focusing on states with smaller lead gaps — South Carolina, South Dakota, and Vermont. Herculean efforts are being made to resonate with potential swing voters and demographics dissatisfied with the current political discourse. However, her prior subtler tactics have not gathered enough momentum, and it remains to be seen whether this increased aggression will make a considerable dent in Trump's steady support.\n\nOn the flip side, Trump, playing to his numerical strengths, is reinforcing his strongholds — states like Florida, Texas, and Arizona — while simultaneously attempting to sway the swing states even further in his advantage. He's capitalizing on economic and immigration-centric messaging, leveraging his first-term achievements to appeal to America's primary concerns. \n\nWhile the financial race is neck-and-neck with campaigns, Trump lags slightly behind Haley regarding Super PAC spending. It's worthy to watch how these resources will be maneuvered in the coming weeks.\n\nGiven the current strategies and standings, Trump's position is robust. However, with volatile electoral landscapes, nothing is carved in stone. Haley might pick up speed if her aggressive approach pays off in the swing states while Trump's economy-centric narrative continues to resonate, posing solid conservation for his base. NF.\n`}/> 
        )}
      </div>

     { chat?.sideChats[round]?.nikiId && ( <SideChatPanel
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
        threadId={chat?.sideChats[round]?.nikiId ?? ''}
       />)}

    { chat?.sideChats[round]?.trumpId && (<SideChatPanel
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
        threadId={chat?.sideChats[round]?.trumpId ?? ''}
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
