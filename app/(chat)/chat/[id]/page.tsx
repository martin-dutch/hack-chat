import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/auth'
import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { USER_ID } from '@/lib/utils'
import Toolbar from '@/components/toolbar'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth()

  if (!session?.user) {
    return {}
  }

  const chat = await getChat(params.id, USER_ID)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = await auth()

  // if (!session?.user) {
  //   redirect(`/sign-in?next=/chat/${params.id}`)
  // }

  const chat = await getChat(params.id, USER_ID)

  if (!chat) {
    notFound()
  }

  if (chat?.userId !== USER_ID) {
    notFound()
  }

  return <div className="w-[90vw] mx-auto bg-white">
      {/* <Toolbar title={`Strategy Summary`} onCallback={() => {
        window.location.href = `/news`
      }} stage={3} /> */}
    <Chat id={chat.id} initialMessages={chat.messages} /></div>
}
