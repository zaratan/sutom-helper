import numbers from '@/keypads/numbers';
import React from 'react';
import Keypad from '../../components/Keypad';

const NumberOfLettersSelector = ({ firstLetter }: { firstLetter: string }) => {
  return (
    <div className="flex flex-col justify-center gap-6 px-4 md:px-0">
      <header className="text-3xl">
        <h1>Combien de lettres dans le mot ?</h1>
      </header>
      <Keypad
        disableSpecial
        linkFormatNormal={`/${firstLetter}/{letter}`}
        layout={numbers}
      />
    </div>
  );
};

export default NumberOfLettersSelector;
