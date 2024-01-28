import React from 'react';
import { Button } from './ui/button';
import Timer from './timer';

const HandwrittenNewspaperArticle = ({ title, date, content }: {
    title: string;
    date: string;
    content: string;
}) => {
    return (
        <div className="bg-gray-100 max-w-4xl mx-auto  my-10 p-8 shadow-lg border border-gray-300 relative">
            <Timer onTimerComplete={() => alert('complete motherfucker')} />
            <h1 className="text-4xl font-handwriting border-b-2 border-gray-800 mb-4">{title}</h1>
            <p className="italic mb-6">{date}</p>
            <article className="text-justify font-handwriting">{content}</article>
            <div className="p-4">
            <Button className="w-full h-12 text-white bg-black hover:bg-gray-800 rounded-md">Next Round</Button>
            </div>
        </div>
    );
};

export default HandwrittenNewspaperArticle;
