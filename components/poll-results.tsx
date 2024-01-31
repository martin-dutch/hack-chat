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



const PollResults = ({ nikki, trump, index }: { nikki: number; trump: number; index: number}) => {

    const valueFormatter = (number: number | bigint) =>
  Intl.NumberFormat('us').format(number).toString()

  const newDate = new Date();
    newDate.setDate(newDate.getDate() + (index + 1) * 2);
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" max-w-2xl mx-auto  my-5 relative">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-1xl">{`Week ${index + 1}`}</h1>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg ">
            <div className="font-medium text-gray-600 dark:text-gray-400">{`${nikki}% Nikki Haley`}</div>
            <div className="relative w-full h-2 mx-4 rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{
                  width: `${nikki}%`
                }}
              />
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{
                  marginLeft: `${nikki}%`,
                  width: `${trump}%`
                }}
              />
            </div>
            <div className="font-medium text-gray-600 dark:text-gray-400">{`${trump}% Donald Trump`}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[800px] h-[800px]">
        <DialogHeader>
          <DialogTitle>Debate Deep Dive</DialogTitle>
          <DialogDescription>
            A full look at the debate between Nikki Haley and Donald Trump.
          </DialogDescription>
        </DialogHeader>
        <Title>Epic Moments</Title>

        <Grid numItemsSm={2} className="gap-6">
          {debateMoments.map(item => (
            <Card key={item.title}>
              <Icon variant="light" icon={item.icon} size="sm" color="blue" />
              <Title className="mt-6">{item.title}</Title>
              <Text className="mt-2">{item.text}</Text>
            </Card>
          ))}
        </Grid>

        <Title>Skill Breakdown</Title>

        <BarChart
          className="mt-4 h-80"
          data={data}
          index="Skill"
          categories={['Nikki Haley', 'Donald Trump']}
          colors={['red', 'blue']}
          valueFormatter={valueFormatter}
          stack={true}
        />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PollResults
