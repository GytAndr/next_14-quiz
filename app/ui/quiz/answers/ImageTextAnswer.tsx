import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import { AnswerProps } from '@/app/types/answerTypes';

import ArrowForward from '../../icons/ArrowForward';

const ImageTextAnswer = ({
    label,
    value,
    image,
    onAnswerSelect,
    selectedAnswers,
}: AnswerProps) => {
    const isSelected =
        selectedAnswers === value || selectedAnswers?.includes(value);

    return (
        <div
            className={clsx(
                'flex justify-between items-center xs:min-w-[21.4rem] min-w-72 hover:cursor-pointer bg-transparent outline-1 outline outline-lightGray hover:outline-2 hover:outline-purple px-4 py-3.5 rounded-lg',
                isSelected && 'outline-purple outline-2'
            )}
            onClick={() => onAnswerSelect(value)}
        >
            <div className="flex items-center gap-4">
                {image && (
                    <Image
                        src={image.src}
                        alt={label}
                        width={image.width}
                        height={image.height}
                    />
                )}
                <p className="font-semibold text-[0.9375rem] md:text-base">
                    {label}
                </p>
            </div>
            <ArrowForward />
        </div>
    );
};

export default ImageTextAnswer;
