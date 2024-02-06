// import { bouncy } from 'ldrs'
import Image from 'next/image'
import nytlogo from '../public/nyt.png'
import based from '../../public/based.png'
import PollResults from '@/components/poll-results'
import { useEffect } from 'react'

export default function NewYorkTimes({
  headline,
  image,
  description,
  pollResultNikky,
  isShowingArticleGenerationAnimation,
  roundNumber,
}: {
  headline: string
  image?: string | null
  description: string
  pollResultNikky?: number
  isShowingArticleGenerationAnimation?: boolean
  roundNumber?: number
}) {
  // useEffect(() => {
  //   bouncy.register()
  // },[])
  
  return (
    <div className="flex flex-col items-center justify-center px-2 p-2 w-full mx-auto">
      <header className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className=''>
        {
          isShowingArticleGenerationAnimation && (


// Default values shown
<div className=''>

<div className='flex space-x-2 justify-center items-center '>
  	<div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-3 w-3 bg-black rounded-full animate-bounce'></div>
</div>

      <h1 className="text-1xl font-serif font-bold mt-2">Generating new Strategy</h1>
      </div>

          )
        }
        {/* <Image
          alt="New York Times Logo"
          // className="aspect-[2/1] overflow-hidden object-contain"
          height={100}
          width={350}
          src={nytlogo}
        /> */}
        
        </div>
       
        <div className="space-y-2">
          {/* <h1 className="text-4xl font-serif font-extrabold tracking-tight lg:text-5xl">
            The New York Times
          </h1> */}
          {/* <p className="text-gray-500 ">
            January 28, 2024 - Monday Edition
          </p> */}
        </div>
      </header>
      <div className="flex flex-col space-y-2 w-full mt-2">
        <article className="prose prose-gray max-w-none pb-[100px]">
        <div className="w-full overflow-hidden">
         <div className="flex items-center w-full">
              <img
                src="data:image/png;base64,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"
                alt="Image 3"
                className="w-16 h-16 mr-4"
              />
              <h1 className="font-semibold text-[3vh]">{`${headline}` || 'Trump destroys Deep State puppet Nikki to MAGA!'}</h1>
            </div>
          </div>
          <div className="h-[400px] w-full overflow-hidden mt-8">
          <img
            alt="New York Times Logo"
            className='w-full h-full object-cover'
            // className="aspect-[2/1] overflow-hidden object-contain"
            src={image == null || image.length === 0  ? 'https://static.politico.com/43/d7/34b758de4836a2a871d8c3244fda/https-delivery.gettyimages.com/downloads/1048023676' : image}
          />
          </div>
          {/* <img
            alt="New York Times Logo"
            className='w-full h-full object-cover'
            // className="aspect-[2/1] overflow-hidden object-contain"
            src={image == null || image.length === 0  ? 'https://static.politico.com/43/d7/34b758de4836a2a871d8c3244fda/https-delivery.gettyimages.com/downloads/1048023676' : image}
          /> */}
          <div className='py-4'>
          {pollResultNikky != null && (<PollResults nikki={pollResultNikky ?? 50} trump={100 -(pollResultNikky ?? 50)} index={roundNumber ?? 0} />)}
          </div>
          
        
          <div className="space-y-2 not-prose">
            {/* <h4 className="text-1xl font-serif font-bold mt-2">
            {`Candidates are reacting to this ${roundNumber === 0 ? 'REAL' :  'SIMULATED'}  news article: `}
            </h4> */}
          </div>
          <p>
            {description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec elementum aliquet, nunc orci porta nisl, eget efficitur mi magna in neque. Morbi euismod, nunc nec elementum aliquet, nunc orci porta nisl, eget efficitur mi magna in neque.'}
          </p>
        </article>
      </div>
    </div>
  )
}
