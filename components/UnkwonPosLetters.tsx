import React from 'react';

const UnkwonPosLetters = ({
  letters,
}: {
  letters: Array<{ letter: string; count: number }>;
}) => {
  if (letters.length === 0) {
    return null;
  }

  return (
    <ul className="flex gap-3">
      {letters.map((letter) => {
        return (
          <li key={letter.letter} className="relative">
            <button className="rounded-full bg-sutom-yellow h-10 w-10 text-2xl flex justify-center items-center">
              {letter.letter}
              {letter.count > 1 ? (
                <span className="text-sm absolute -top-2 -right-3">{`x${letter.count}`}</span>
              ) : (
                ''
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UnkwonPosLetters;
