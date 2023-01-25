import qwerty from '@/keypads/qwerty';
import React from 'react';
import Keypad from './Keypad';

const FirstLetterSelector = ({
  setFirstLetter,
}: {
  setFirstLetter: (letter: string) => void;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <header className="text-3xl">
        <h1>Quelle est la première lettre du mot ?</h1>
      </header>
      <Keypad disableSpecial onClickNormal={setFirstLetter} layout={qwerty} />
    </div>
  );
};

export default FirstLetterSelector;
