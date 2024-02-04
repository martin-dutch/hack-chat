"use client"
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

interface OnboardingPagProps {
    title: string
    subtitle?: string
    href: string
    children: React.ReactNode
}

export default function OnboardingPage({
    children,
    title,
    subtitle,
    href,
}: OnboardingPagProps) {

  return (
    <Link href={href}>
      <Toolbar title="Continue" mainPage/>
      <main className="flex flex-col items-center justify-center  w-full">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80%] mx-auto">
        <div >
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='fixed top-[30%] text-start left-0 right-0'>
            <h1 className="font-normal text-center  text-gray-800 text-[40px]">{title}</h1>
            <h1 className="font-normal text-center text-gray-800 text-[40px]">{subtitle}</h1>
          </div>
          
          <div className="fixed flex bottom-0 left-0 right-0 mx-auto">
         {
            children
         }
          </div>
        </div>
      </div>
    </main>
    </Link>
   
  )
}