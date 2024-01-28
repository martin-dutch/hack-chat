/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q0wZOs61MZI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Toolbar from '@/components/toolbar'
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Toolbar title="COGNISANT.AI" mainPage/>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GlobeIcon className="h-6 w-6" />
          <span className="sr-only">COGNISANT.AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Debates
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  COGNISANT.AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 my-5 md:text-xl dark:text-gray-400">
                  Sharpen your debate skills and political knowledge by
                  interacting with real-time conversations between political
                  leaders.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/news"
                  >
                    Start Simulating
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Link href={'news'}>
                  {/* Replacing the video tag with an img tag for the GIF */}
                  <img
                    alt="Hero Image"
                    className="w-full rounded-lg object-cover"
                    height="1000"
                    src="/landing_page.gif" // Replace with your GIF file path
                    style={{
                      aspectRatio: '500/500'
                      // objectFit: "cover",
                    }}
                    width="1000"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “COGNISANT.AI has transformed the way I approach debates. It's
                  an incredible tool for honing skills and challenging my own
                  perspectives.“
                </blockquote>
                <div>
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Debate Club President, Harvard University
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “The simulations are so realistic! It's like debating with
                  real people. I've learned so much and improved my
                  argumentation skills.“
                </blockquote>
                <div>
                  <div className="font-semibold">Maria Lopez</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    High School Student, New York
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “I use COGNISANT.AI to prepare for my public speaking
                  engagements. It's a game changer.“
                </blockquote>
                <div>
                  <div className="font-semibold">James Kim</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Public Speaker, San Francisco
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 COGNISANT.AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Social Media
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
