"use client"

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useEffect } from 'react'
import { loadChats } from '@/components/sidebar-list'
import { auth } from '@/auth'
import LottieAnimation from '@/components/loading'
// import { Router } from 'next/navigation'

export default function IndexPage() {
  const id = nanoid()
  
  console.log('ejnorefnoaojqn')

  useEffect(() => {
    const s = async () => {
      console.log('function async')
      const userId = (await auth())?.user.id
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
      })})
      .then(response => response.json())
      .then(data => {
        // Do something with the data
        // Then navigate to a different page
        console.log('data', data)
        window.location.href = `/chat/${id}?newsTitle=Trump slams Haley in the latest Primary polls and says she is horrible!`
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
