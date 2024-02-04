"use client"

import OnboardingPage from '@/components/onboarding-page'
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

export default function ConfigureComponent() {
  const [populism, setPopulism] = useState([50])
  const [tone, setTone] = useState([50])

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
    <OnboardingPage title='You can make Nikki more populist or inflammatory before we start' subtitle={`Start on default settings if it's your first time`} actionText='Start AI simulation' buttonRef={`/loading?newsTitle=${queryParamValue}&populism=${populism[0]}&tone=${tone[0]}`}>
    <div key="1" className="w-full mx-auto">
      <div className="space-y-8 h-[50vh]">
        <div>
          <div className='flex text-align'>
            <h1 className="text-2xl text-red-400 font-bold mx-auto">Populism</h1>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-red-300 font-bold">Purely fact-based</span>
            <span className="text-sm  text-red-300 font-bold">Unrealistic, bombastic promises</span>
          </div>
          {/* <>
            <Slider className="w-full bg-white" defaultValue={[50]} label="Populism" />
          </> */}
          <Slider className="w-full bg-white " defaultValue={[50]} value={tone} label="Populism" onValueChange={(val) => setTone(val)} />
        </div>
        <div>
          <div className='flex text-align'>
            <h1 className="text-2xl text-red-400 font-bold mx-auto">Tone</h1>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm  text-red-300 font-bold">Conciliatory, hope-based</span>
            <span className="text-sm  text-red-300 font-bold">
            Inflammatory, provocative, fear-based
            </span>
          </div>
          <Slider className="w-full bg-white " defaultValue={[50]} value={populism} label="Tone" onValueChange={(val) => setPopulism(val)} />
        </div>
      </div>
    </div>
    </OnboardingPage>
  )
}