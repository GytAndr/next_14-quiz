'use client';

import React, { useEffect, useState } from 'react';

import ProgressBar from '../ui/navbar/ProgressBar';

const Analyzing = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return prevProgress;
                }
                return prevProgress + 10;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center px-4">
            <p className="text-2xl font-semibold">Analyzing your data...</p>
            <ProgressBar
                progress={progress}
                className="h-1 xs:max-w-[22rem] my-12"
            />
        </div>
    );
};

export default Analyzing;
