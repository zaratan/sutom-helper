import qwerty from '@/keypads/qwerty';
import React, { useState } from 'react';
import CurrentGuess from './CurrentGuess';
import Keypad from './Keypad';

const Main = ({
  firstLetter,
  letterCount,
}: {
  firstLetter: string;
  letterCount: number;
}) => {
  const [word, setWord] = useState<Array<string | null>>([
    firstLetter,
    ...Array.from({ length: letterCount - 1 }, () => null),
  ]);
  return (
    <div>
      <CurrentGuess word={word} />
      <Keypad layout={qwerty} />
    </div>
  );
};

export default Main;
