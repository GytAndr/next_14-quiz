'use client';

import { ReactNode, useState, createContext, useContext, use } from 'react';

import { AnswersType, QuizContextProps } from '../types/contextTypes';

const QuizContext = createContext<QuizContextProps | null>(null);

export default function QuizContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [answers, setAnswers] = useState<AnswersType>({});

    return (
        <QuizContext.Provider value={{ answers, setAnswers }}>
            {children}
        </QuizContext.Provider>
    );
}

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error(
            'useQuizContext must be used within a QuizContextProvider'
        );
    }
    return context;
};
