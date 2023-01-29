'use client';

import qwerty from '@/keypads/qwerty';
import React, { useState } from 'react';
import CurrentGuess from '../../../components/CurrentGuess';
import Keypad from '../../../components/Keypad';
import ForbiddenLetters from '../../../components/ForbiddenLetters';
import UnkwonPosLetters from '../../../components/UnkwonPosLetters';
import Possibilities from '../../../components/Possibilities';
import classMerge from '@/helpers/classMerge';

const Main = ({
  firstLetter,
  letterCount,
  possibleWords,
}: {
  firstLetter: string;
  letterCount: number;
  possibleWords: string[];
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
                0) + 1,
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
    <div className="w-full flex gap-6 justify-center flex-col items-center px-4 md:px-0 grow">
      <Possibilities
        word={word}
        forbiddenLetters={forbiddenLetters}
        unknownPosLetters={unknownPosLetters}
        possibleWords={possibleWords}
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
      <UnkwonPosLetters
        letters={unknownPosLetters}
        setLetters={setUnknownPosLetters}
      />
      <ForbiddenLetters
        letters={forbiddenLetters}
        setLetters={setForbiddenLetters}
      />
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
      <Keypad
        layout={qwerty}
        disableSpecial={
          mode === 'forbidden' || mode === 'unknown' || word[mode] === null
        }
        disableReturn
        onClickNormal={onClickLetter}
        onClickBack={() => {
          setWord(
            word.map((w, i) => {
              if (i === mode) {
                return null;
              }
              return w;
            })
          );
        }}
        disabledLetters={forbiddenLetters.map((fl) => fl.letter)}
      />
    </div>
  );
};

export default Main;
