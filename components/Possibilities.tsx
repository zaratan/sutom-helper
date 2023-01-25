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
  console.log(words[0]);
  const regexp = RegExp(
    `^${word.map((letter) => (letter || '.').toLocaleLowerCase()).join('')}$`,
    'i'
  );
  console.log(regexp);
  const possibilities = words.filter((w) => regexp.test(w));
  console.log(possibilities);
  return (
    <ul>
      {possibilities.map((possibility, i) => (
        <li key={`${possibility}-${i}`}>{possibility}</li>
      ))}
    </ul>
  );
};

export default Possibilities;
