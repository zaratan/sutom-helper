import classMerge from '@/helpers/classMerge';
import React from 'react';

const LetterGuess = ({
  letter,
  selectedLetter,
  position,
  letterClick,
}: {
  letter: string | null;
  selectedLetter?: boolean;
  position: number;
  letterClick?: (position: number) => void;
}) => {
  return (
    <li
      className={classMerge(
        'border border-solid w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center text-xl sm:text-2xl ',
        selectedLetter ? 'border-sutom-yellow border-4' : 'border-white',
        letter !== null ? 'bg-sutom-red' : 'bg-sutom-blue'
      )}
    >
      <button
        onClick={() => {
          letterClick && letterClick(position);
        }}
        disabled={position === 0}
        className="w-full h-full flex justify-center items-center"
      >
        {letter || ' '}
      </button>
    </li>
  );
};

const CurrentGuess = ({
  word,
  selectedLetter,
  letterClick,
}: {
  word: Array<string | null>;
  selectedLetter?: number;
  letterClick?: (position: number) => void;
}) => {
  return (
    <div className="">
      <header className="flex flex-col items-center">
        <h2>Mot actuel</h2>
      </header>
      <ul className="flex">
        {word.map((letter, i) => (
          <LetterGuess
            key={`letter-${i}`}
            letter={letter}
            selectedLetter={i == selectedLetter}
            position={i}
            letterClick={letterClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default CurrentGuess;
