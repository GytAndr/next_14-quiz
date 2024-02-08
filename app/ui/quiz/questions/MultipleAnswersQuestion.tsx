'use client';

import React, { useState } from 'react';

import { MultipleAnswerQuestionProps } from '@/app/types/questionTypes';

import TextButton from '../../TextButton';
import AnswerByType from '../answers/AnswerByType';

const MultipleAnswersQuestion = ({
    label,
    description,
    options,
    buttonText,
    questionKey,
}: MultipleAnswerQuestionProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string>();
    const removeAnswer = (value: string) => {
        // setSelectedAnswers(
        //     selectedAnswers.filter((answer) => answer !== value)
        // );
        // setAnswers((prevAnswers) => ({
        //     ...prevAnswers,
        //     [questionKey]: selectedAnswers.filter((answer) => answer !== value),
        // }));
    };

    const updateAnswers = (value: string) => {
        // setSelectedAnswers([...selectedAnswers, value]);
        // setAnswers((prevAnswers) => ({
        //     ...prevAnswers,
        //     [questionKey]: [...selectedAnswers, value],
        // }));
    };

    const onAnswerSelect = (value: string) => {
        // if (selectedAnswers.includes(value)) {
        //     removeAnswer(value);
        //     return;
        // }
        // updateAnswers(value);
    };

    return (
        <div className="px-4 py-6 md:py-12 lg:pt-[6.5rem] grid justify-items-center">
            <p className="text-xl xs:text-[1.625rem] md:text-3xl lg:text-[2.5rem] font-semibold text-textGray mb-6 lg:mb-8">
                {label}
            </p>
            {description && (
                <p className="min-[500px]:justify-self-auto justify-self-start">
                    {description}
                </p>
            )}
            <div className="flex flex-col gap-2 max-w-[22rem] my-8">
                {options &&
                    options.map((answer) => (
                        <AnswerByType
                            key={answer.value}
                            {...answer}
                            onAnswerSelect={onAnswerSelect}
                            selectedAnswers={selectedAnswers}
                        />
                    ))}
            </div>
            <TextButton
                classNames="xs:min-w-[21.4rem] min-w-72"
                // disabled={selectedAnswers.length === 0}
                text={buttonText}
            />
        </div>
    );
};

export default MultipleAnswersQuestion;
