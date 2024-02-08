import React from 'react';
import { useRouter } from 'next/navigation';

import ChevronLeftIcon from './icons/ChevronLeftIcon';

const BackButton = () => {
    const router = useRouter();

    const onClickHandler = () => {
        router.back();
    };

    return (
        <button
            className="flex justify-between items-center"
            onClick={onClickHandler}
        >
            <ChevronLeftIcon />
            <p className="font-semibold text-sm md:text-base">Back</p>
        </button>
    );
};

export default BackButton;
