import { Letter, letters } from '@/data/const';
import qwerty from '@/keypads/qwerty';
import React from 'react';
import Keypad from '../components/Keypad';

const FirstLetterSelector = ({
  availableLetters,
}: {
  availableLetters: Array<string>;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6 px-4 md:px-0">
      <header className="text-3xl">
        <h1>Quelle est la première lettre du mot ?</h1>
      </header>
      <Keypad
        disableSpecial
        linkFormatNormal="/{letter}"
        layout={qwerty}
        disabledLetters={letters.filter((l) => !availableLetters.includes(l))}
      />
    </div>
  );
};

export default FirstLetterSelector;
