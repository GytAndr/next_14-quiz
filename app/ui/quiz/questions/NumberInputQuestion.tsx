'use client';

import React, { ChangeEvent, useState } from 'react';

import { NumberInputQuestionProps } from '@/app/types/questionTypes';

import TextButton from '../../TextButton';
import TypedInput from '../../TypedInput';

const NumberInputQuestion = ({
    label,
    inputLabel,
    buttonText,
    questionKey,
}: NumberInputQuestionProps) => {
    // const { totalQuestions, answers, setAnswers } = useQuizContext();
    const [value, setValue] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setValue(event.target.value);
        // setAnswers((prevAnswers) => ({
        //     ...prevAnswers,
        //     [questionKey]: event.target.value,
        // }));
    };

    return (
        <div className="px-4 py-6 md:py-12 lg:py-[6.5rem] grid justify-items-center">
            <p className="text-2xl sm:text-[2.5rem] font-semibold">{label}</p>
            <TypedInput
                label={inputLabel}
                value={value}
                onChange={onChangeHandler}
                wrapperClass="my-6 sm:my-8"
            />
            <TextButton
                disabled={value.length === 0}
                classNames="xs:min-w-[21.4rem] min-w-72"
                text={buttonText}
            />
        </div>
    );
};

export default NumberInputQuestion;
