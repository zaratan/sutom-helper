import numbers from '@/keypads/numbers';
import React from 'react';
import Keypad from './Keypad';

const NumberOfLettersSelector = ({
  setLetterCount,
}: {
  setLetterCount: (number: number) => void;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6 px-4 md:px-0">
      <header className="text-3xl">
        <h1>Combien de lettres dans le mot ?</h1>
      </header>
      <Keypad
        disableSpecial
        onClickNormal={(letter) => {
          setLetterCount(Number(letter));
        }}
        layout={numbers}
      />
    </div>
  );
};

export default NumberOfLettersSelector;
