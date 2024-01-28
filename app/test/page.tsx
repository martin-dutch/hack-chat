import Image from 'next/image'
import nytlogo from '../../public/nyt.png'
import based from '../../public/based.png'

export default function Component({
  headline,
  description
}: {
  headline: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <header className="flex flex-col items-center justify-center space-y-4 text-center">
        <Image
          alt="New York Times Logo"
          // className="aspect-[2/1] overflow-hidden object-contain"
          height={300}
          width={500}
          src={nytlogo}
        />
        <div className="space-y-2">
          {/* <h1 className="text-4xl font-serif font-extrabold tracking-tight lg:text-5xl">
            The New York Times
          </h1> */}
          <p className="text-gray-500 dark:text-gray-400">
            January 28, 2024 - Monday Edition
          </p>
        </div>
      </header>
      <main className="flex flex-col space-y-8 w-full max-w-3xl mt-8">
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <Image
            alt="New York Times Logo"
            // className="aspect-[2/1] overflow-hidden object-contain"
            height={300}
            width={800}
            src={based}
          />
          <div className="space-y-2 not-prose">
            <h2 className="text-3xl font-serif font-bold tracking-tight lg:text-4xl">
              {headline || 'Trump destroys Deep State puppet Nikki to MAGA!'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">By Vox Populi</p>
          </div>
          <p>
            {description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec elementum aliquet, nunc orci porta nisl, eget efficitur mi magna in neque. Morbi euismod, nunc nec elementum aliquet, nunc orci porta nisl, eget efficitur mi magna in neque.'}
          </p>
        </article>
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h2 className="text-3xl font-serif font-bold tracking-tight lg:text-4xl">
              Headline of Another Article
            </h2>
            <p className="text-gray-500 dark:text-gray-400">By Jane Doe</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc nec elementum aliquet, nunc orci porta nisl, eget
            efficitur mi magna in neque. Morbi euismod, nunc nec elementum
            aliquet, nunc orci porta nisl, eget efficitur mi magna in neque.
          </p>
        </article>
      </main>
    </div>
  )
}
