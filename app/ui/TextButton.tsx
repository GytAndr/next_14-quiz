import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
    text: string;
    href: string;
    disabled?: boolean;
    classNames?: string;
};

export default function TextButton({
    text,
    href,
    disabled,
    classNames,
}: Props) {
    return (
        <Link
            href={href}
            className={disabled ? 'pointer-events-none' : 'pointer-events-auto'}
        >
            <button
                className={clsx(
                    ' h-12 font-bold rounded-md px-6 drop-shadow-[0_16px_32px_rgba(170,0,255,0.24)]',
                    disabled
                        ? 'text-textGray/20 bg-lightGray/20'
                        : 'text-white bg-purple hover:bg-purple/80 hover:cursor-pointer',
                    classNames
                )}
            >
                {text}
            </button>
        </Link>
    );
}
