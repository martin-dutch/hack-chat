import * as React from 'react'
import { type UseChatHelpers } from 'ai/react'

import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { shareChat } from '@/app/actions'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconRefresh, IconShare, IconStop } from '@/components/ui/icons'
import { FooterText } from '@/components/footer'
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { ChatList } from './chat-list'
import axios from 'axios'
import OpenAI from 'openai'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'append'
    | 'isLoading'
    | 'reload'
    | 'messages'
    | 'stop'
    | 'input'
    | 'setInput'
  > {
  id?: string
  title?: string
  start?: boolean
  name?: string
  chatId?: string
  threadId?: string
  roundnumber?: number
}
export function SideChatPanel({
  messages,
  name,
  start,
  threadId,
  chatId,
  roundnumber
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)
  const [chatMessages, setChatMessages] = React.useState<OpenAI.Beta.Threads.Messages.ThreadMessage[]>([])

  console.log('CHECL THIS THREAD ID', threadId)

  // const inputMessage = searchParams.get('message') as string | undefined;
  //   const roundnumber = Number(searchParams.get('roundnumber')) ?? 0
  //   const chatId = searchParams.get('chatId') as string | undefined;
  //   const niki = searchParams.get('niki') as string === 'niki'

  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log('threadId',threadId)
        const response = await axios.get(`/api/assistant_get_messages?niki=${start ? 'niki' : 'trump'}&roundnumber=${roundnumber}&chatId=${chatId}`)
        console.log('response.data', JSON.stringify(response.data.messages))
        setChatMessages(response.data.messages)
      } catch (error) {
        console.error('Failed to fetch messages:', error)
      }
    }

    if(threadId != null){
      fetchMessages()
      const intervalId = setInterval(fetchMessages, 2000); // Polls every 2 seconds

      // Clean up function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
    
  }, [threadId])

  console.log('JSONFIEd' , JSON.stringify(chatMessages))
  console.log('chatMessages TRANSPOSE', chatMessages?.map((message) => ({
    id: message.id,
    content: message.content[0].text.value,
    role: message.role
  })))

  return (
    <Card className={`w-1/5 fixed ${start ? 'left' : 'right'}-0 inset-y-10 flex flex-col m-4 mt-10`}>
      <CardHeader className="border-b p-4">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
      </CardHeader>
      <ScrollArea className="flex-1 p-4">
      <div className="flex">
  {chatMessages && (
    <ChatList 
    size="small"
      messages={chatMessages?.map((message) => ({
        id: message.id,
        content: message.content[0].text.value,
        role: message.role
      })) ?? []} 
    />
  )}
</div>
      </ScrollArea>
    </Card>
  )
}