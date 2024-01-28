import { auth } from '@/auth'
import { Session } from 'next-auth/types'
import { useState, useEffect } from 'react'

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
    console.log('AUTH STARTED')
      const result = await auth()
      console.log('AUTH RESULT', result)
      setSession(result)
    }

    fetchSession()
  }, [])

  return session
}
