"use client"


import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'
import React, { useEffect, useRef } from 'react'

export interface ChatList {
  messages: Message[]
  size?: 'small' | 'large'
  trump: boolean
}

export function ChatList({ messages , size, trump}: ChatList) {
  // if () {
  //   return null
  // }

  const containerRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const container = containerRef.current;
    console.log('container', container)
    if (container) {
      try {
        // @ts-ignore
        container.scrollTop = container.scrollHeight - container.clientHeight;
      } catch (e) {
        console.error('Failed to scroll to bottom:', e);
      }
    }
  }, [messages.length]);



  return (
    <div key={trump ? 0 : 1} className="relative mx-auto px-4 overflow-hidden h-[65vh] overflow-y-auto"  ref={containerRef}>
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} size={size}  trump={trump}/>
          {/* {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )} */}
        </div>
      )) ?? []}
    </div>
  )
}
