/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/avCXYzskrcX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Latest News
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 my-5 md:text-xl dark:text-gray-400">
            Click on a story to begin the simulation
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
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
              <p className="text-gray-500">Read more on NYTimes</p>
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
              <p className="text-gray-500">Read more on CNN</p>
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
              <p className="text-gray-500">Read more on Axios</p>
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
              <p className="text-gray-500">Read more on GBNews</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
