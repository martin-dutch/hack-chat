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
}

export function SideChatPanel({
  messages,
  name,
  start
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  return (
    <Card className={`w-1/5 fixed ${start ? 'left' : 'right'}-0 top-10 bottom-10 flex flex-col m-4 mt-10`}>
      <CardHeader className="border-b p-4">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
      </CardHeader>
      <ScrollArea className="flex-1 p-4">
        <div className="flex items-center justify-center h-12">
            <ChatList messages={messages} />
        </div>
      </ScrollArea>
    </Card>
  )
}


