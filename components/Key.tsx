import classMerge from '@/helpers/classMerge';
import Link from 'next/link';
import React from 'react';

export const KeyLink = ({
  letter,
  doubleGrow,
  disabled,
  link,
}: {
  letter: string;
  doubleGrow?: boolean;
  disabled?: boolean;
  link: string;
}) => {
  if (disabled) {
    return (
      <span
        className={classMerge(
          'border border-solid border-white rounded-lg flex-grow flex justify-center items-center font-mono',
          doubleGrow ? 'flex-grow-1.5' : '',
          'text-sutom-lightGray cursor-default'
        )}
      >
        {letter}
      </span>
    );
  }
  return (
    <Link
      className={classMerge(
        'border border-solid border-white rounded-lg flex-grow flex justify-center items-center font-mono',
        doubleGrow ? 'flex-grow-1.5' : '',
        disabled ? 'text-sutom-lightGray cursor-default' : 'cursor-pointer'
      )}
      href={link}
    >
      {letter}
    </Link>
  );
};

export const KeyClick = ({
  letter,
  doubleGrow,
  disabled,
  onClick,
}: {
  letter: string;
  doubleGrow?: boolean;
  disabled?: boolean;
  onClick?: (letter: string) => void;
}) => {
  return (
    <button
      className={classMerge(
        'border border-solid border-white rounded-lg flex-grow flex justify-center items-center font-mono',
        doubleGrow ? 'flex-grow-1.5' : '',
        disabled ? 'text-sutom-lightGray cursor-default' : 'cursor-pointer'
      )}
      disabled={disabled}
      onClick={() => {
        onClick && onClick(letter);
      }}
    >
      {letter}
    </button>
  );
};
