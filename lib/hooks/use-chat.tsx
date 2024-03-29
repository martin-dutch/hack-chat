import { getChat } from '@/app/actions'
import { useState, useEffect } from 'react'
import { Chat } from '../types'
import { USER_ID } from '../utils'

// Define the hook
export function useChatHook(id: string, userId: string, refresh: number) {
    const [chat, setChat] = useState<Chat | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<true | null>(null)
  
    useEffect(() => {
      const fetchChat = async () => {
        try {
          const chatData = await getChat(id, USER_ID)
          setChat(chatData)
          setLoading(false)
        } catch (err) {
          setError(true)
          setLoading(false)
        }
      }
  
      console.log('FETCHING DATA')
      fetchChat()
    }, [id, userId, refresh])
  
    return { chat, loading, error }
  }