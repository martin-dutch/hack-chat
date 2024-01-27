import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import Link from 'next/link'

export default function IndexPage() {
  const id = nanoid()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Welcome to Our Page</h1>
      <div className="w-full max-w-2xl">
        <Link href={'news'}>
        <img
          alt="Hero Image"
          className="w-full h-64 rounded-lg object-cover"
          height="500"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1000/500",
            objectFit: "cover",
          }}
          width="1000"
        />
        </Link>
        
      </div>
    </main>
  )
}
