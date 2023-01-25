import React from 'react';

const UnkwonPosLetters = ({
  letters,
  setLetters,
}: {
  letters: Array<{ letter: string; count: number }>;
  setLetters: (letters: Array<{ letter: string; count: number }>) => void;
}) => {
  if (letters.length === 0) {
    return null;
  }

  const onClickLetter = (letter: string) => {
    setLetters(
      letters.reduce<Array<{ letter: string; count: number }>>((res, fl) => {
        if (fl.letter === letter) {
          if (fl.count === 1) {
            return res;
          }
          return [
            ...res,
            {
              letter,
              count: fl.count - 1,
            },
          ];
        }
        return [...res, fl];
      }, [])
    );
  };

  return (
    <ul className="flex gap-3">
      {letters.map((letter) => {
        return (
          <li key={letter.letter} className="relative">
            <button
              onClick={() => onClickLetter(letter.letter)}
              className="rounded-full bg-sutom-yellow h-10 w-10 text-2xl flex justify-center items-center"
            >
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
