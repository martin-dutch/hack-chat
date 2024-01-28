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
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'
import { usePathname, useRouter } from 'next/navigation'
import { SideChatPanel } from './side-chat-panel'
import HandwrittenNewspaperArticle from './newspaper'
import PollResults from './poll-results'
import { useChatHook } from '@/lib/hooks/use-chat'
import { useAuth } from '@/lib/hooks/use-auth'

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )
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
    } = useChatHook(id ?? '', '10762010' ?? '')
console.log('session?.user.id','10762010')
console.log('chat Id ',id )
    console.log('chat dcsonfpiovnokn',chat)

    const showNewsArticle = true
    const news: {
      title: string;
      date: string;
      content: string;
    } = {
      title: `Nikki Haley: Biden's Afghanistan withdrawal is a disaster that didn't have to happen`,
      date: 'Aug. 17, 2021',
      content: `The Biden administration’s botched withdrawal from Afghanistan is a disaster that didn’t have to happen. It’s a failure of leadership that will have far-reaching consequences for the United States and our allies.`
    }

    const pollResults: {
      left: number;
      right: number;
    } = {
      left: 40,
      right: 60
    }
    const showPoll = false;
    const roundSelect = 0
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {showPoll ? <PollResults /> : showNewsArticle ? <HandwrittenNewspaperArticle 
          title={news.title}
          date={news.date}
          content={news.content}
        />  :messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>

     { chat?.sideChats[roundSelect].nikiId && ( <SideChatPanel
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
        threadId={chat?.sideChats[roundSelect].nikiId ?? ''}
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



{ chat?.sideChats[roundSelect].trumpId && (<SideChatPanel
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
        threadId={chat?.sideChats[roundSelect].trumpId ?? ''}
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
