"use client"


import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'
import { useEffect, useRef } from 'react'

export interface ChatList {
  messages: Message[]
  size?: 'small' | 'large'
  trump: boolean
}

export function ChatList({ messages , size, trump}: ChatList) {
  // if () {
  //   return null
  // }


  return (
    <div className="relative mx-auto max-w-2xl px-4" >
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} size={size}  trump={trump}/>
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      )) ?? []}
    </div>
  )
}
