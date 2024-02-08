import { Dispatch, SetStateAction } from 'react';

export type AnswersType = {
    [key: string]: string | string[];
};

export type QuizContextProps = {
    answers: AnswersType;
    setAnswers: Dispatch<SetStateAction<AnswersType>>;
};
