import React, { ReactNode } from 'react';

import Navbar from '@/app/ui/navbar';

const QuizLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export default QuizLayout;
