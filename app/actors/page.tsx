"use client"
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

export default function IndexPage() {

  return (
    <Link href={'god'}>
      <Toolbar title="Continue" mainPage/>
      <main className="flex flex-col items-center justify-center  w-full">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80%] mx-auto">
        <div >
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='fixed top-[30%] text-start left-0 right-0'>
            <h1 className="font-normal text-center  text-gray-800 text-[40px]">In 2024, threats are less visible</h1>
            <h1 className="font-normal text-center text-gray-800 text-[40px]">Illiberal actors game our institutions</h1>
          </div>
          
          <div className="fixed flex bottom-0 left-0 right-0 mx-auto">
          <img
            alt="Hero Image"
            className="mx-auto w-3/10 h-5/10 mb-[5%]"
            src="https://media.newyorker.com/photos/5ba3ec4f674a1371fe8d4e43/master/w_2240,c_limit/181001_r32888.jpg" // Replace with your GIF file path
            style={{
              aspectRatio: "5/5",
              height: '40%',
              position: 'fixed',
              right: '0',
              left: '0',
              bottom: '0',
              objectFit: "cover",
            }}
          />
          </div>
        
          
        </div>
      </div>
    </main>
    </Link>
   
  )
}