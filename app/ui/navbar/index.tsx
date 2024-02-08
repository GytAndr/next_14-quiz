'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import ProgressBar from './ProgressBar';
import BackButton from '../BackButton';

const Navbar = ({ totalQuestions }: { totalQuestions: number }) => {
    const { id: currentQuestion } = useParams();

    return (
        <nav className="shadow-[0_8px_24px_0px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between mx-auto p-4 max-w-5xl ">
                <BackButton />
                <p className="text-sm">
                    {currentQuestion} of {totalQuestions}
                </p>
            </div>
            <ProgressBar
                progress={(+currentQuestion / totalQuestions) * 100}
                className="h-0.5"
            />
        </nav>
    );
};

export default Navbar;
