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
import { useEffect, useState } from 'react'

export default function ConfigureComponent({ guy }: { guy: string }) {

  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(new URL(currentUrl).search);
  const newsTitle = urlParams.get('newsTitle') ?? 'WRONGr'

  console.log('newsTitle',newsTitle)

  const [queryParamValue, setQueryParamValue] = useState('');

  useEffect(() => {
    // Ensure this code runs only on the client side
    // if (typeof window !== 'undefined') {
      // Create URLSearchParams object from the current window location
      const searchParams = new URLSearchParams(new URL(window.location.href).search);
      // Get the value of 'queryParam'
      const value = searchParams.get('newsTitle');
      // Update the state with the value
      setQueryParamValue(value ?? '');
    // }
  }, []); // Empty dependency array ensures this runs once on mount

  console.log('queryParamValue',queryParamValue)
  
  return (
    <>
    <Toolbar title="Configure" onCallback={() => {
      window.location.href = `/news`
    }} />
    <div key="1" className="w-3/4 mx-auto my-auto  p-8">
      {/* <div className="flex-col items-center space-x-2 mb-6">
        <ArrowLeftIcon className="h-6 w-6 text-black mb-4" />
        <h1 className="text-2xl font-bold text-black">
          Before we strategise, would you like to tweak the{' '}
          {guy || 'Donald Trump'} campaign?
        </h1>
      </div> */}
      <div className="space-y-8">
        <div>
        <div className='flex text-align'>
            <h1 className="text-2xl font-bold text-black mx-auto">Populism</h1>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-black">Purely fact-based</span>
            <span className="text-sm text-black">Unrealistic</span>
          </div>
          <Slider className="w-full bg-gray-200" defaultValue={[50]} />
        </div>
        <div>
          <div className='flex text-align'>
            <h1 className="text-2xl font-bold text-black mx-auto">Tone</h1>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-black">Conciliatory</span>
            <span className="text-sm text-black">
              Inflammatory
            </span>
          </div>
          <Slider className="w-full bg-gray-200" defaultValue={[50]} />
        </div>
      </div>
      <Link href={`/loading?newsTitle=${queryParamValue}`}>
            <div className="pt-4 mt-6">
            <Button className="w-full h-12 text-white bg-black hover:bg-gray-800 rounded-md">Start Simulating</Button>
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
