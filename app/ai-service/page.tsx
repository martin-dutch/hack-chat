"use client"
import { Chat } from '@/components/chat'
import Link from 'next/link'
import Toolbar from '@/components/toolbar'

export default function IndexPage() {

  return (
    <Link href={'news'}>
      <Toolbar title="Continue" mainPage/>
      <main className="flex flex-col items-center justify-center  w-full">
      
      {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">COGNISANT.AI</h1> */}
      <div className="flex w-[80%] mx-auto">
        <div >
          {/* Replacing the video tag with an img tag for the GIF */}
          <div className='fixed top-[30%] text-start left-0 right-0'>
            <h1 className="font-normal text-center  text-gray-800 text-[40px]">Bleeding edge AI at the service of democracy.</h1>
          </div>
          
          
          <div className="fixed flex bottom-0 left-0 right-0 mx-auto">
          <div className="flex justify-center">
            <div className="text-center mx-4">
                <img src="https://media.istockphoto.com/id/492684225/vector/the-first-day-of-creation.jpg?s=612x612&w=0&k=20&c=lSN_2JVdNmWzkWMpLgXtUBhPhip0DaxzRIJHOBgTMGE=" alt="Image 1" className="mx-auto w-3/10 h-5/10 mb-[5%]" />
                <p>Title 1</p>
            </div>
            <div className="text-center mx-4">
                <img src="https://media.istockphoto.com/id/492684225/vector/the-first-day-of-creation.jpg?s=612x612&w=0&k=20&c=lSN_2JVdNmWzkWMpLgXtUBhPhip0DaxzRIJHOBgTMGE=" alt="Image 2" className="mx-auto w-3/10 h-5/10 mb-[5%]" />
                <p>Title 2</p>
            </div>
            <div className="text-center mx-4">
                <img src="https://media.istockphoto.com/id/492684225/vector/the-first-day-of-creation.jpg?s=612x612&w=0&k=20&c=lSN_2JVdNmWzkWMpLgXtUBhPhip0DaxzRIJHOBgTMGE=" alt="Image 3" className="mx-auto w-3/10 h-5/10 mb-[5%]" />
                <p>Title 3</p>
            </div>
        </div>
          {/* <img
            alt="Hero Image"
            className="mx-auto w-3/10 h-5/10 mb-[5%]"
            src="https://media.istockphoto.com/id/492684225/vector/the-first-day-of-creation.jpg?s=612x612&w=0&k=20&c=lSN_2JVdNmWzkWMpLgXtUBhPhip0DaxzRIJHOBgTMGE="
            style={{
              aspectRatio: "5/5",
              height: '40%',
              position: 'fixed',
              right: '0',
              left: '0',
              bottom: '0',
              objectFit: "cover",
            }}
          /> */}
          </div>
          
        </div>
      </div>
    </main>
    </Link>
   
  )
}