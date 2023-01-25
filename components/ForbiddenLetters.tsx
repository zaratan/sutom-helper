import React from 'react';

const ForbiddenLetters = ({
  letters,
}: {
  letters: Array<{ letter: string }>;
}) => {
  if (letters.length === 0) {
    return null;
  }

  return (
    <ul className="flex gap-3">
      {letters.map((letter) => {
        return (
          <li key={letter.letter} className="relative">
            <button className="rounded-full bg-sutom-lightGray h-10 w-10 text-2xl flex justify-center items-center">
              {letter.letter}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ForbiddenLetters;
