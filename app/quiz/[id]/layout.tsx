import React, { ReactNode } from 'react';

import Navbar from '@/app/ui/navbar';
import { fetchAllQuestions } from '@/app/lib/data';
import QuizContextProvider from '@/app/context/QuizContext';

const QuizLayout = async ({ children }: { children: ReactNode }) => {
    const totalQuestions = await fetchAllQuestions().then(
        (questions) => questions.length
    );

    return (
        <main>
            <Navbar totalQuestions={totalQuestions} />
            <QuizContextProvider>{children}</QuizContextProvider>
        </main>
    );
};

export default QuizLayout;
