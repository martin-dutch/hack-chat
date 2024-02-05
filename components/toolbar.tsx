/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OB4LNodcYP3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import React from "react"
import { IconArrowElbow } from "./ui/icons"
import { FaArrowLeftLong } from "react-icons/fa6";


const states = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'News',
    href: '/news'
  },
  {
    name: 'Settings',
    href: '/settings'
  },
  {
    name: 'Simmulation',
    href: undefined
  }
]

export default function Toolbar({ title, mainPage, onCallback, buttonRef, stage }: {title?: string, mainPage?: boolean, onCallback?: () => void, buttonRef?:string, stage?: number}) {
  const [hover, setHover] = React.useState(false)
console.log('stage', stage)
  const content =   (
    <div className="flex items-center justify-between p-4 text-center h-[10vh] flex-col">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="mx-auto flex h-[2.5vh]" >
        {stage && (<ArrowLeftIcon className="h-full scale-x-200 my-auto self-center" onClick={
          () => {
            if (onCallback) {
              onCallback()
            }
          }
        } />)}
        <div>
          {hover && stage != null && states.slice(0,stage + 1).map((stageRef, index) => (
            <Button key={index} variant={stage === index ? 'outline' : 'link'} className="h-full py-1" onClick={() => {
              if(stageRef.href) window.location.href = stageRef.href
            }}  >{stageRef.name}</Button>
          ))}
        </div>
      </div>
      {title != null && (<div className="w-[30vw] border-b-2 border-slate-200 mx-auto">
        <h1 className="font-semibold text-center mx-auto text-[2vh]">{title}</h1>
      </div>)}
    </div>
  )

  return buttonRef ? (
    <Link href={buttonRef}>
      {content}
    </Link>
  ) : content
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48" // Double the original width
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 19L10 12 24 5" />
      <path d="M38 12H10" />
    </svg>
  )
}


function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
