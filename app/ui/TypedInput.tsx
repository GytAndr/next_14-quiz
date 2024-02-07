import React, { KeyboardEvent } from 'react';

type TypedInputProps = {
    label: string;
    wrapperClass: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TypedInput = ({
    label,
    wrapperClass,
    value,
    onChange,
}: TypedInputProps) => {
    const handleKeyPress = (event: KeyboardEvent) => {
        const keyValue = event.key;
        if (
            !/^\d+$/.test(keyValue) &&
            !event.ctrlKey &&
            !event.metaKey &&
            keyValue !== 'Backspace'
        ) {
            event.preventDefault();
        }
    };

    return (
        <div className={wrapperClass}>
            <input
                placeholder={label}
                value={value}
                type="text"
                maxLength={3}
                onChange={onChange}
                onKeyDown={handleKeyPress}
                className="focus:outline-purple focus:outline-1 focus:shadow-purple/15 focus:shadow-md focus:bg-transparent bg-lightGray rounded-lg p-4 xs:min-w-[21.4rem] min-w-72"
            />
        </div>
    );
};

export default TypedInput;
