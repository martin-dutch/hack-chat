"use client"

import { USER_ID, nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useEffect } from 'react'
import { loadChats } from '@/components/sidebar-list'
import { auth } from '@/auth'
import LottieAnimation from '@/components/loading'
// import { Router } from 'next/navigation'

export default function IndexPage() {
  const id = nanoid()
  
  console.log('ejnorefnoaojqn')

  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(new URL(currentUrl).search);
  const newsTitle = Number(urlParams.get('newsTitle') ?? undefined) ?? 0

  useEffect(() => {
    const s = async () => {
      console.log('function async')
      const userId = USER_ID// (await auth())?.user.id
      const chats = await loadChats(userId)
      console.log('chats', JSON.stringify(chats))

    }
    s()
  },[])

  useEffect(() => {
    fetch('/api/create_chat', {
      method: 'POST',
      body: JSON.stringify({
        chatId: id,
        newsTitle: newsTitle
      })})
      .then(response => response.json())
      .then(data => {
        // Do something with the data
        // Then navigate to a different page
        console.log('data', data)
        window.location.href = `/chat/${id}?newsTitle=${newsTitle}`
      })
      .catch(error => {
        
        console.error('Error:', error)
      })
  }, [])


  return <div className='items-center align-middle max-h-screen'>
    <div className="w-200 h-200 fixed top-0 bottom-0 right-0 left-0 flex">
      <LottieAnimation />
    </div>
  </div>
}
