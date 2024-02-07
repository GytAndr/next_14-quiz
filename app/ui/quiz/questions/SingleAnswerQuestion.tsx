'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { useParams, useRouter } from 'next/navigation';
import { SingleAnswerQuestionProps } from '@/app/types/questionTypes';
import { Routes } from '@/app/routes';
import AnswerByType from '../answers/AnswerByType';

const SingleAnswerQuestion = ({
    label,
    description,
    options,
    questionKey,
}: SingleAnswerQuestionProps) => {
    const router = useRouter();
    const { id: currentQuestion } = useParams();

    const [selectedAnswers, setSelectedAnswers] = useState<string>();
    // answers[questionKey] as string

    const navigateToNext = () => {
        router.push(`${Routes.QUIZ}/${+currentQuestion + 1}`);
    };

    const onAnswerSelect = (value: string) => {
        // setSelectedAnswers(value);
        // setAnswers((prevAnswers) => ({
        //     ...prevAnswers,
        //     [questionKey]: value,
        // }));
        if (currentQuestion === '1' && value != 'improve_body_areas') {
            router.push(Routes.QUIZ + `/${+currentQuestion + 2}`);
        } else {
            navigateToNext();
        }
    };

    return (
        <div className="px-4 py-6 md:py-12 lg:py-[6.5rem] grid justify-items-center">
            <p className="text-xl xs:text-[1.625rem] md:text-3xl lg:text-[2.5rem] font-semibold text-textGray mb-6 lg:mb-8">
                {label}
            </p>
            {description && (
                <Markdown className="max-w-[32rem] text-center">
                    {description}
                </Markdown>
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
        </div>
    );
};

export default SingleAnswerQuestion;
