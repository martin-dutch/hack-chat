import { getChat } from '@/app/actions'
import { useState, useEffect } from 'react'
import { Chat } from '../types'

// Define the hook
export function useChatHook(id: string, userId: string) {
    const [chat, setChat] = useState<Chat | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<true | null>(null)
  
    useEffect(() => {
      const fetchChat = async () => {
        try {
          const chatData = await getChat(id, userId)
          setChat(chatData)
          setLoading(false)
        } catch (err) {
          setError(true)
          setLoading(false)
        }
      }
  
      fetchChat()
    }, [id, userId])
  
    return { chat, loading, error }
  }