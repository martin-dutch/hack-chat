"use client"

import OnboardingPage from '@/components/onboarding-page'
/* eslint-disable react/no-unescaped-entities */
import Toolbar from '@/components/toolbar'
import { STARTING_ARTICLES } from '@/lib/utils'
import Link from 'next/link'

// const urlParams = new URLSearchParams(new URL(currentUrl).search);

//   const newsTitle = urlParams.get('newsTitle') ?? 'Trump slams Haley in the latest Primary polls and says she is horrible!'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/avCXYzskrcX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */



const newStories = []

export default function Component() {
  return (
    <OnboardingPage title="How should Nikki Haley's campaign react to" actionText='Click on an article'>
    <section className="w-full py-4 md:py-16 lg:py-16">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="grid w-full grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {
            STARTING_ARTICLES.map((article, index) => (
              <Link href={`/settings?newsTitle=${index}`} key={index}>
                <div className="space-y-4">
                  <img
                    alt="News Image"
                    className="aspect-[1/1] w-[18vw] overflow-hidden rounded-lg object-cover"
                    src={article.image}
                  />
                  <h2 className="text-[1.5vh] font-bold">
                    {article.title}
                  </h2>
                  {/* <p className="text-gray-500">Read more on {article}</p> */}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
    </OnboardingPage>
    
  )
}
