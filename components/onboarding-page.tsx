"use client"
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

interface OnboardingPagProps {
    actionText?: string
    title: string
    subtitle?: string
    href?: string
    children: React.ReactNode
}

export default function OnboardingPage({
  actionText = 'Continue',
    children,
    title,
    subtitle,
    href,
}: OnboardingPagProps) {

  const content = (
    <div className="flex flex-col items-center justify-center  w-full bg-white">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80vw] h-[100vh] mx-auto">
      
        <div className='mt-[10vh] mx-auto'>
            {/* has a height of 10vh */}
          <Toolbar title={actionText}/> 
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='text-start inset-x-0 h-[15vh]'>
            <h1 className="font-normal text-center  text-gray-800 text-[4vh]">{title}</h1>
            <h1 className="font-normal text-center text-gray-800 text-[4vh]">{subtitle}</h1>
          </div>
          
          <div className="flex inset-x-0 justify-center items-center h-[65vh]">
         {
            children
         }
          </div>
        </div>
      </div>
    </div>
  )

  return href ? (
    <Link href={href}>
     {content}
    </Link>
  ) : content
}