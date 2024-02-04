"use client"
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

export default function IndexPage() {

  return (
    <Link href={'actors'}>
      <Toolbar title="Continue" mainPage/>
      <main className="flex flex-col items-center justify-center h-screen w-full">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80%] mx-auto">
        <div >
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='fixed top-[30%] text-start left-0 right-0'>
            <h1 className="font-normal text-center  text-gray-800 text-[40px]">In 1962 the biggest risk to democracy was nuclear armaggedon.</h1>
            <h1 className="font-normal text-center text-gray-800 text-[40px]"> A palpable threat of physical annihilation</h1>
          </div>
          
          <img
            alt="Hero Image"
            className="mx-auto w-3/10 h-5/10"
            src="/liberty.png" // Replace with your GIF file path
            style={{
              aspectRatio: "5/5",
              height: '60%',
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