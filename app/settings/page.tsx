"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JJe0AS0brZy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Toolbar from '@/components/toolbar'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import Link from 'next/link'

export default function ConfigureComponent({ guy }: { guy: string }) {
  return (
    <>
    <Toolbar title="Configure" />
    <div key="1" className="max-w-4xl mx-auto my-auto  p-8 shadow">
      {/* <div className="flex-col items-center space-x-2 mb-6">
        <ArrowLeftIcon className="h-6 w-6 text-black mb-4" />
        <h1 className="text-2xl font-bold text-black">
          Before we strategise, would you like to tweak the{' '}
          {guy || 'Donald Trump'} campaign?
        </h1>
      </div> */}
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-black">Purely fact-based</span>
            <span className="text-sm text-black">Populism</span>
          </div>
          <Slider className="w-full bg-gray-200" defaultValue={[50]} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-black">Conciliatory, hope-based</span>
            <span className="text-sm text-black">
              Inflammatory, provocative, fear-based
            </span>
          </div>
          <Slider className="w-full bg-gray-200" defaultValue={[50]} />
        </div>
      </div>
      <Link href={'/'}>
            <div className="pt-4 mt-6">
            <Button className="w-full h-12 text-white bg-black hover:bg-gray-800 rounded-md">Apply Changes</Button>
            </div>
        </Link>
    </div>
    </>
    
  )
}

// @ts-ignore
function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
