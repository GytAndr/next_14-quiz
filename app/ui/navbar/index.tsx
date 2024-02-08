'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// import { useQuizContext } from '@/context/QuizContext';

import ProgressBar from './ProgressBar';
import BackButton from '../BackButton';

const Navbar = () => {
    const { id: currentQuestion } = useParams();
    // const { totalQuestions } = useQuizContext();
    return (
        <nav className="shadow-[0_8px_24px_0px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between mx-auto p-4 max-w-5xl ">
                <BackButton />
                <p className="text-sm">
                    {currentQuestion} of {11}
                </p>
            </div>
            <ProgressBar
                progress={(+currentQuestion / 11) * 100}
                className="h-0.5"
            />
        </nav>
    );
};

export default Navbar;
