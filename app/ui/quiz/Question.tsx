import { fetchQuestionById } from '@/app/lib/data';
import React from 'react';
import SingleAnswerQuestion from './questions/SingleAnswerQuestion';
import {
    AdviceProps,
    MultipleAnswerQuestionProps,
    NumberInputQuestionProps,
    SingleAnswerQuestionProps,
} from '@/app/types/questionTypes';
import MultipleAnswersQuestion from './questions/MultipleAnswersQuestion';
import Advice from './questions/Advice';
import NumberInputQuestion from './questions/NumberInputQuestion';

export default async function Question({
    params: { id },
}: {
    params: { id: number };
}) {
    const questionData = await fetchQuestionById(id - 1);

    switch (questionData.type) {
        case 'single':
            return (
                <SingleAnswerQuestion
                    {...(questionData as SingleAnswerQuestionProps)}
                />
            );
        case 'multiple':
            return (
                <MultipleAnswersQuestion
                    {...(questionData as MultipleAnswerQuestionProps)}
                />
            );
        case 'advice':
            return <Advice {...(questionData as AdviceProps)} />;
        case 'number':
            return (
                <NumberInputQuestion
                    {...(questionData as NumberInputQuestionProps)}
                />
            );
        default:
            return null;
    }
}
