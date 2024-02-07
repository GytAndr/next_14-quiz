import React from 'react';
import Image from 'next/image';

import TextButton from './ui/TextButton';

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center py-8 px-9 h-screen w-screen">
            <Image
                src="/general/landing-image.png"
                alt="Woman holding a baby"
                width={640}
                height={499}
                priority
            />
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-[1.75rem] lg:text-[4rem] font-bold py-8 lg:py-6">
                    Get back in shape.
                </h1>
                <TextButton
                    text="Start the quiz"
                    href="/quiz/1"
                    classNames="lg:w-64 xs:w-80 w-64"
                />
            </div>
        </div>
    );
}
