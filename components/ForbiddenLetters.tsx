import React from 'react';

const ForbiddenLetters = ({
  letters,
  setLetters,
}: {
  letters: Array<{ letter: string }>;
  setLetters: (letters: Array<{ letter: string }>) => void;
}) => {
  if (letters.length === 0) {
    return null;
  }

  const onClickLetter = (letter: string) => {
    setLetters(letters.filter((fl) => fl.letter !== letter));
  };

  return (
    <ul className="flex gap-3">
      {letters.map((letter) => {
        return (
          <li key={letter.letter} className="relative">
            <button
              onClick={() => onClickLetter(letter.letter)}
              className="rounded-full bg-sutom-lightGray h-10 w-10 text-2xl flex justify-center items-center"
            >
              {letter.letter}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ForbiddenLetters;
