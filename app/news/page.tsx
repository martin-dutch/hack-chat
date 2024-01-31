"use client"

/* eslint-disable react/no-unescaped-entities */
import Toolbar from '@/components/toolbar'
import Link from 'next/link'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/avCXYzskrcX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <>
    <Toolbar title="Latest News" />
    <section className="w-full py-4 md:py-16 lg:py-16">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Top Election Stories
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 my-5 md:text-xl dark:text-gray-400">
            Click on a story to start the simulation.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://static.politico.com/43/d7/34b758de4836a2a871d8c3244fda/https-delivery.gettyimages.com/downloads/1048023676"
                width="200"
              />
              <h2 className="text-xl font-bold">
                Haley amps up her attacks on Trump, calling him ‘totally
                unhinged.’
              </h2>
              {/* <p className="text-gray-500">Read more on NYTimes</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2018_41/2598091/181009-nikki-haley-donald-trump-un-ew-1220p.jpg"
                width="200"
              />
              <h2 className="text-xl font-bold">
                Koch officials tell donors Nikki Haley was the right candidate
                to back, despite early losses to Trump
              </h2>
              {/* <p className="text-gray-500">Read more on CNN</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://cdn.cnn.com/cnnnext/dam/assets/160113122919-nikki-haley-donald-trump-composite-super-tease.jpg"
                width="200"
              />
              <h2 className="text-xl font-bold">
                Trump pollster predicts "smackdown" of Haley in South Carolina
              </h2>
              {/* <p className="text-gray-500">Read more on Axios</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-01/240112-nikki-haley-donald-trump-seamless-2-up-split-3x2-ac-1127p-057776.jpg"
                width="200"
              />
              <h2 className="text-xl font-bold">
                Nikki Haley hoping to 'hinge on' Trump's legal charges as
                Republican race continues
              </h2>
              {/* <p className="text-gray-500">Read more on GBNews</p> */}
            </div>
          </Link>







          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMkHBEjJpj7A/v1/2000x1334.jpg"
                width="200"
              />
              <h2 className="text-xl font-bold">
                Wall Street Donors Keep Haley’s 2024 Run Afloat, Even If Voters Won’t
              </h2>
              {/* <p className="text-gray-500">Read more on NYTimes</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://assets3.cbsnewsstatic.com/hub/i/r/2024/01/27/6b4362f8-e58e-4ce1-ad82-ceafce7e4e9d/thumbnail/1280x720/412c10217d3c48343be8bfd3d99e47bf/barnett.jpg?v=9bdba4fec5b17ee7e8ba9ef8c71cf431"
                width="200"
              />
              <h2 className="text-xl font-bold">
              Trump must pay $83.3 million for defaming E. Jean Carroll, jury says
              </h2>
              {/* <p className="text-gray-500">Read more on CNN</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="data:image/jpeg;base64,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"
                width="200"
              />
              <h2 className="text-xl font-bold">
              Nikki Haley calls Trump ‘disgruntled’ and ‘vengeful’ as she spars with Fox hosts over electability
              </h2>
              {/* <p className="text-gray-500">Read more on Axios</p> */}
            </div>
          </Link>
          <Link href={'/settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://img.lemde.fr/2023/02/15/0/0/4879/3253/800/0/75/0/c5e77e2_5481822-01-06.jpg"
                width="200"
              />
              <h2 className="text-xl font-bold">
              Nikki Haley was swatted in December, records review shows
              </h2>
              {/* <p className="text-gray-500">Read more on GBNews</p> */}
            </div>
          </Link>
        </div>
      </div>
    </section>
    </>
    
  )
}
