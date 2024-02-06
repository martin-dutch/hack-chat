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
import { ChatScrollAnchor } from './chat-scroll-anchor'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'isLoading'
  > {
  id?: string
  title?: string
  start?: boolean
  name?: string
  chatId?: string
  threadId?: string
  roundnumber?: number
  onNumberMessagesChanged: (numberMessages: number) => void
}
export function SideChatPanel({
  name,
  start,
  threadId,
  chatId,
  roundnumber,
  onNumberMessagesChanged,
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)
  const [chatMessages, setChatMessages] = React.useState<OpenAI.Beta.Threads.Messages.ThreadMessage[]>([])

  // console.log('CHECL THIS THREAD ID', threadId)
const isTrump = name === 'Trump'
  // const inputMessage = searchParams.get('message') as string | undefined;
  //   const roundnumber = Number(searchParams.get('roundnumber')) ?? 0
  //   const chatId = searchParams.get('chatId') as string | undefined;
  //   const niki = searchParams.get('niki') as string === 'niki'

  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
        // console.log('threadId',threadId)
        const response = await axios.get(`/api/assistant_get_messages?niki=${start ? 'niki' : 'trump'}&roundnumber=${roundnumber}&chatId=${chatId}`)
        // console.log('response.data', JSON.stringify(response.data.messages))
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

  React.useEffect(() => {
      onNumberMessagesChanged(chatMessages.length)
  },[chatMessages.map((message) => message.content.length > 0).length])


 

  // console.log('JSONFIEd' , JSON.stringify(chatMessages))
  // console.log('chatMessages TRANSPOSE', chatMessages?.map((message) => ({
  //   id: message.id,
  //   content: message.content[0].text.value,
  //   role: message.role
  // })))


  return (
    <div className={`flex w-[49%] flex-col px-4`}>
      {/* <ScrollArea className="flex-1 p-4"> */}
      <div className="flex">
  {chatMessages && (
    <ChatList 
    size="small"
    trump={isTrump}
      messages={chatMessages?.map((message) => ({
        id: message.id,
        content: message.content.map((content) => {
          if (content.type === "text") {
            const parsed =  content as  OpenAI.Beta.Threads.Messages.MessageContentText
            return parsed.text.value
          } else {
            const parsed =  content as  OpenAI.Beta.Threads.Messages.MessageContentImageFile
            return parsed.image_file.file_id
          }
        }).join(' '),
        role: message.role
      })) ?? []} 
    />
  )}
</div><ChatScrollAnchor trackVisibility={false} />
      {/* </ScrollArea> */}
    </div>
  )
}