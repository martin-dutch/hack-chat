'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Card, Text, Icon, Flex, Title, Grid } from '@tremor/react'

const debateMoments = [
  {
    title: 'Trump Accuses Nikki',
    text: `The moment when Trump accused Nikki Haley of corruption, sparking a heated debate.`,
    icon: DollarSign
  },
  {
    title: `Nikki's Counter-Argument`,
    text: `The unforgettable moment when Nikki Haley defended herself with a strong counter-argument.`,
    icon: ArrowRight
  },
//   {
//     title: `Trump's Policy Attack`,
//     text: `Trump's viral attack on Nikki's policy, creating a stir among the audience.`,
//     icon: ShoppingBagIcon
//   },
//   {
//     title: `Nikki's Record Defense`,
//     text: `The day Nikki Haley defended her record, setting a new standard for debate responses.`,
//     icon: ShoppingBagIcon
//   }
]
import { BarChart } from '@tremor/react'
import { ArrowRight, DollarSign, ShoppingBagIcon } from 'lucide-react'

const data = [
  {
    Skill: 'Clarity of Speech',
    'Nikki Haley': 66,
    'Donald Trump': 87
  },
  {
    Skill: 'Policy Knowledge',
    'Nikki Haley': 62,
    'Donald Trump': 29
  },
  {
    Skill: 'Charisma',
    'Nikki Haley': 12,
    'Donald Trump': 84
  },
  {
    Skill: 'Clever',
    'Nikki Haley': 25,
    'Donald Trump': 70
  }
]



const PollResults = ({ nikki, trump, index, selected }: { nikki: number; trump: number; index: number; selected?: boolean}) => {

  console.log('selected', selected)
    const valueFormatter = (number: number | bigint) =>
  Intl.NumberFormat('us').format(number).toString()

  const newDate = new Date();
    newDate.setDate(newDate.getDate() + (index + 1) * 2);
    
  return (
    <div className='rounded bg-white'>
        <div className="relative cursor-pointer">
          <div className={`flex items-center justify-between rounded-lg`}>
            <div className={`relative w-full h-10 bg-gray-200 `}>
              <div
                className="absolute top-0 left-0 h-full bg-red-300 rounded flex items-center pl-4"
                style={{
                  width: `${nikki}%`
                }}
              >
                <h1 className="font-medium text-black">{`${nikki}% Nikki Haley`}</h1>
              </div>
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded flex items-center pr-4 justify-end"
                style={{
                  marginLeft: `${nikki + 0.25}%`,
                  width: `${trump - 0.25}%`
                }}
              >
                <div className="font-medium text-black ">{`${trump}% Donald Trump`}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PollResults
