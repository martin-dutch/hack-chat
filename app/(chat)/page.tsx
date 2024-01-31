"use client"
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <Toolbar title="COGNOSCENT.AI" mainPage/>
      <main className="flex flex-col items-center justify-center h-screen   dark:bg-gray-900">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">COGNISANT.AI</h1> */}
      <div className=" flex fixed  justify-center">
        <Link href={'news'}>
          {/* Replacing the video tag with an img tag for the GIF */}
          <h1 className="text-7xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 fixed left-1/2 top-[30%] -translate-x-1/2 pr-[700px]">HYPERINTELLIGENCE</h1>
          <h1 className="text-7xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 fixed left-1/2 top-[50%] -translate-x-1/2 pl-[700px] whitespace-nowrap">FOR DEMOCRACY</h1>
          <img
            alt="Hero Image"
            className="mx-auto w-3/10 h-5/10"
            src="/liberty.png" // Replace with your GIF file path
            style={{
              aspectRatio: "5/5",
              height: '80%',
              position: 'fixed',
              right: '0',
              left: '0',
              bottom: '0',
              // objectFit: "cover",
            }}
          />
       
          
        </Link>
      </div>
    </main>
    </>
   
  )
}