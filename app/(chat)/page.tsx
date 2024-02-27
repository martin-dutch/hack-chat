"use client"
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

export default function IndexPage() {
  const id = nanoid()

  return (
    <Link href={'risk'} className='bg-white h-[100vh]'>
      <div className='mt-[10vh] bg-white'>
        <Toolbar title="Get Started" mainPage />
      </div>
      
      <main className="flex flex-col items-center justify-center  w-full bg-white">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80%] mx-auto">
        <div >
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='fixed top-[30%] text-start'>
            <h1 className="font-normal  text-gray-800 text-[5vw]">HYPERINTELLIGENCE x</h1>
            <h1 className="font-medium  text-gray-800 top-2 whitespace-nowrap text-[13vw] -translate-y-[4vw] -translate-x-[1vw]">DEMOCRACY</h1>
          </div>
          <img
            alt="Hero Image"
            className="mx-auto w-3/10 h-5/10"
            src="/liberty.png" // Replace with your GIF file path
            style={{
              aspectRatio: "5/5",
              height: '60vh',
              position: 'fixed',
              right: '0',
              left: '0',
              bottom: '0',
              // objectFit: "cover",
            }}
          />
       
          
        </div>
      </div>
    </main>
    </Link>
   
  )
}