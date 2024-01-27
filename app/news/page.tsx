import Link from "next/link";

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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Latest News</h1>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <Link href={'settings'}>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://source.unsplash.com/random/200x200?sig=1"
                width="200"
              />
              <h2 className="text-xl font-bold">News Title 1</h2>
              <p className="text-gray-500">News Subtitle 1</p>
            </div>
            </Link>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://source.unsplash.com/random/200x200?sig=2"
                width="200"
              />
              <h2 className="text-xl font-bold">News Title 2</h2>
              <p className="text-gray-500">News Subtitle 2</p>
            </div>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://source.unsplash.com/random/200x200?sig=3"
                width="200"
              />
              <h2 className="text-xl font-bold">News Title 3</h2>
              <p className="text-gray-500">News Subtitle 3</p>
            </div>
            <div className="space-y-4">
              <img
                alt="News Image"
                className="aspect-[1/1] w-full overflow-hidden rounded-lg object-cover"
                height="200"
                src="https://source.unsplash.com/random/200x200?sig=4"
                width="200"
              />
              <h2 className="text-xl font-bold">News Title 4</h2>
              <p className="text-gray-500">News Subtitle 4</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  