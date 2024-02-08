import React, { ReactNode } from 'react';

import Navbar from '@/app/ui/navbar';
import { fetchAllQuestions } from '@/app/lib/data';

const QuizLayout = async ({ children }: { children: ReactNode }) => {
    const totalQuestions = await fetchAllQuestions().then(
        (questions) => questions.length
    );

    return (
        <main>
            <Navbar totalQuestions={totalQuestions} />
            {children}
        </main>
    );
};

export default QuizLayout;
