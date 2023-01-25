import classMerge from '@/helpers/classMerge';
import React from 'react';

const LetterGuess = ({ letter }: { letter: string | null }) => {
  return (
    <li
      className={classMerge(
        'border border-solid border-white w-12 h-12 flex justify-center items-center text-2xl',
        letter !== null ? 'bg-sutom-red' : 'bg-sutom-blue'
      )}
    >
      {letter || ' '}
    </li>
  );
};

const CurrentGuess = ({ word }: { word: Array<string | null> }) => {
  return (
    <ul className="flex">
      {word.map((letter, i) => (
        <LetterGuess key={`letter-${i}`} letter={letter} />
      ))}
    </ul>
  );
};

export default CurrentGuess;
