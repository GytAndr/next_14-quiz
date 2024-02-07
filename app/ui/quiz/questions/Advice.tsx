'use client';

import React from 'react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { AdviceProps } from '@/app/types/questionTypes';
import TextButton from '../../TextButton';

const Advice = ({
    label,
    description,
    image,
    description_bottom1,
    description_bottom2,
    buttonText,
}: AdviceProps) => {
    const { id: currentQuestion } = useParams();

    return (
        <div className="grid justify-center min-[425px]:justify-items-center px-4 py-6">
            <p className="text-[1.75rem] font-semibold mb-4">{label}</p>
            <Markdown className="mb-4 max-w-[32rem] text-center">
                {description}
            </Markdown>
            <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={label}
            />
            <Markdown className="mt-4 max-w-[32rem] text-center">
                {description_bottom1}
            </Markdown>
            <p className="my-6 text-sm">{description_bottom2}</p>
            <TextButton
                classNames="min-[425px]:w-[22rem] w-full"
                text={buttonText}
                href={`/quiz/${+currentQuestion + 1}`}
            />
        </div>
    );
};

export default Advice;
