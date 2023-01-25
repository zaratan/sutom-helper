import React from 'react';
import words from '@/data/words.json';

const Possibilities = ({
  word,
  letterCount,
  forbiddenLetters,
  unknownPosLetters,
}: {
  word: Array<string | null>;
  letterCount: number;
  forbiddenLetters: Array<{ letter: string }>;
  unknownPosLetters: Array<{ letter: string; count: number }>;
}) => {
  const forbiddenRegex = `[^${forbiddenLetters
    .map((fl) => fl.letter)
    .join('')}]`;

  const regexpWord = RegExp(
    `^${word
      .map((letter) => (letter || forbiddenRegex).toLocaleLowerCase())
      .join('')}$`,
    'i'
  );

  const possibilities = words.filter(
    (w) =>
      regexpWord.test(w) &&
      unknownPosLetters.every(
        (upl) =>
          w.split('').filter((l) => l === upl.letter.toLocaleLowerCase())
            .length >= upl.count
      )
  );
  return (
    <ul>
      {possibilities.map((possibility, i) => (
        <li key={`${possibility}-${i}`}>{possibility}</li>
      ))}
    </ul>
  );
};

export default Possibilities;
