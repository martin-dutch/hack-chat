import React from 'react';
import { Button } from './ui/button';
import Timer from './timer';

const HandwrittenNewspaperArticle = ({ title, date, content }: {
    title: string;
    date: string;
    content: string;
}) => {
    return (
        <main className="flex flex-col items-center justify-center px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <article className="prose prose-gray mx-auto dark:prose-invert">
        {/* <figure>
          <img
            alt="Cover image"
            className="aspect-video object-cover"
            height={170}
            src="/placeholder.svg"
            width={1250}
          />
        </figure> */}
        <div className="space-y-2 not-prose">
          <div className="flex items-center space-x-2">
            <img
              alt="New York Times Logo"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] font-serif">
              {title}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <img
              alt="Author's profile image"
              className="rounded-full"
              height={50}
              src="https://robohash.org/KEY.png?set=set1"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <div>
                <p className="text-gray-500 dark:text-gray-400">By Cognoscent.ai</p>
              <p className="font-bold">Martin and Jose</p>
              
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <p className="text-justify">
            {content}
          </p>
        </div>
      </article>
    </main>
    );
};

export default HandwrittenNewspaperArticle;
