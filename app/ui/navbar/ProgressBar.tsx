import React from 'react';
import clsx from 'clsx';

import * as Progress from '@radix-ui/react-progress';

type ProgressBarProps = {
    progress: number;
    className: string;
};

const ProgressBar = ({ progress, className }: ProgressBarProps) => {
    return (
        <Progress.Root
            className={clsx(
                'relative overflow-hidden bg-lightGray w-full',
                className
            )}
            style={{ transform: 'translateZ(0)' }}
            value={progress}
        >
            <Progress.Indicator
                className="bg-purple w-full h-full transition-transform ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default ProgressBar;
