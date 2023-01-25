import classMerge from '@/helpers/classMerge';
import React from 'react';

const Key = ({
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
        'border border-solid border-white rounded-lg flex-grow flex justify-center items-center',
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

export default Key;
