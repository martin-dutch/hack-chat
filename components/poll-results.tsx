"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

const PollResults = ({nikki, trump}: {nikki: number; trump: number})=> {
//   const [progress, setProgress] = React.useState(13)

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])

  return (<div className="bg-gray-100 max-w-4xl mx-auto  my-10 p-8 shadow-lg border border-gray-300 relative"><div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <div className="font-medium text-gray-600 dark:text-gray-400">{`${nikki}% Nikki Haley`}</div>
  <div className="relative w-full h-2 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
    <div
      className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
      style={{
        width: `${nikki}%`,
      }}
    />
  </div>
  <div className="font-medium text-gray-600 dark:text-gray-400">{`${trump}% Donald Trump`}</div>
</div></div>)
}


export default PollResults;