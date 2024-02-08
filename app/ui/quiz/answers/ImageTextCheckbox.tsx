import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { AnswerProps } from '@/app/types/answerTypes';
import * as Checkbox from '@radix-ui/react-checkbox';

const ImageTextCheckbox = ({
    label,
    value,
    image,
    onAnswerSelect,
    selectedAnswers,
}: AnswerProps) => {
    const isChecked = selectedAnswers && selectedAnswers.includes(value);

    return (
        <div
            className={clsx(
                'flex justify-between items-center xs:min-w-[21.4rem] min-w-72 hover:cursor-pointer bg-transparent outline-1 outline hover:outline-2 hover:outline-purple px-4 py-3.5 rounded-lg',
                isChecked ? 'outline-purple outline-2' : 'outline-lightGray'
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
            <Checkbox.Root
                checked={isChecked as boolean}
                className={clsx(
                    'rounded-full w-6 h-6 flex  justify-center',
                    isChecked ? 'bg-purple' : 'bg-lightGray'
                )}
            />
        </div>
    );
};

export default ImageTextCheckbox;
