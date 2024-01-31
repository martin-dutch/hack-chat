import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'
import { useEffect, useRef } from 'react'

export interface ChatList {
  messages: Message[]
  size?: 'small' | 'large'
}

export function ChatList({ messages , size}: ChatList) {
  // if () {
  //   return null
  // }

  console.log('MESSAGES', messages)

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages.length]); // Dependency array, in this case, the content that changes

  return (
    <div className="relative mx-auto max-w-2xl px-4 mx-8" ref={containerRef} >
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} size={size} />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      )) ?? []}
    </div>
  )
}
