import qwerty from '@/keypads/qwerty';
import React, { useState } from 'react';
import CurrentGuess from './CurrentGuess';
import Keypad from './Keypad';
import ForbiddenLetters from './ForbiddenLetters';
import UnkwonPosLetters from './UnkwonPosLetters';
import Possibilities from './Possibilities';
import classMerge from '@/helpers/classMerge';

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
  const [forbiddenLetters, setForbiddenLetters] = useState<
    Array<{ letter: string }>
  >([]);
  const [unknownPosLetters, setUnknownPosLetters] = useState<
    Array<{ letter: string; count: number }>
  >([]);
  const [mode, setMode] = useState<number | 'forbidden' | 'unknown'>('unknown');
  let onClickLetter;
  switch (mode) {
    case 'forbidden':
      onClickLetter = (letter: string) => {
        setForbiddenLetters([
          ...forbiddenLetters.filter((fl) => fl.letter !== letter),
          { letter },
        ]);
      };
      break;
    case 'unknown':
      onClickLetter = (letter: string) => {
        setUnknownPosLetters([
          ...unknownPosLetters.filter((fl) => fl.letter !== letter),
          {
            letter,
            count:
              (unknownPosLetters.find((fl) => fl.letter === letter)?.count ||
                1) + 1,
          },
        ]);
      };
      break;
    default:
      onClickLetter = (letter: string) => {
        setWord(
          word.map((w, i) => {
            if (i === mode) {
              return letter;
            }
            return w;
          })
        );
      };
      break;
  }

  return (
    <div className="w-full flex gap-6 justify-center flex-col items-center">
      <Possibilities
        letterCount={letterCount}
        word={word}
        forbiddenLetters={forbiddenLetters}
        unknownPosLetters={unknownPosLetters}
      />
      <CurrentGuess
        word={word}
        selectedLetter={
          mode !== 'forbidden' && mode !== 'unknown' ? mode : undefined
        }
        letterClick={(position) => {
          setMode(position);
        }}
      />
      <UnkwonPosLetters letters={unknownPosLetters} />
      <ForbiddenLetters letters={forbiddenLetters} />
      <ul className="flex gap-4 h-10">
        <li
          className={classMerge(
            'border rounded flex justify-center items-center p-4 w-20',
            mode === 'unknown' ? 'border-sutom-yellow border-4' : ''
          )}
        >
          <button onClick={() => setMode('unknown')}>Inconnue</button>
        </li>
        <li
          className={classMerge(
            'border rounded flex justify-center items-center p-4 w-20',
            mode === 'forbidden' ? 'border-sutom-yellow border-4' : ''
          )}
        >
          <button
            onClick={() => {
              setMode('forbidden');
            }}
          >
            Interdite
          </button>
        </li>
      </ul>
      <Keypad layout={qwerty} disableSpecial onClickNormal={onClickLetter} />
    </div>
  );
};

export default Main;
