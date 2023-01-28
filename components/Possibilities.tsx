import React from 'react';
import useSWR from 'swr';

const fetcher = (entry: RequestInfo, init?: RequestInit) =>
  fetch(entry, init).then((res) => res.json());

const Possibilities = ({
  firstLetter,
  letterCount,
  word,
  forbiddenLetters,
  unknownPosLetters,
}: {
  firstLetter: string;
  letterCount: number;
  word: Array<string | null>;
  forbiddenLetters: Array<{ letter: string }>;
  unknownPosLetters: Array<{ letter: string; count: number }>;
}) => {
  const { data } = useSWR<{ words: Array<string> }>(
    `/api/${firstLetter}/${letterCount}/`,
    fetcher
  );

  console.log({ data });

  if (!data) {
    return (
      <div className="flex justify-center items-center w-full h-full max-h-96 my-4 flex-grow">
        Loading...
      </div>
    );
  }

  const forbiddenRegex = `[^${forbiddenLetters
    .map((fl) => fl.letter)
    .join('')}]`;

  const regexpWord = RegExp(
    `^${word
      .map((letter) => (letter || forbiddenRegex).toLocaleLowerCase())
      .join('')}$`,
    'i'
  );

  const possibilities = data.words.filter(
    (w) =>
      regexpWord.test(w) &&
      unknownPosLetters.every(
        (upl) => w.split('').filter((l) => l === upl.letter).length >= upl.count
      )
  );
  return (
    <ul className="max-h-96 my-4 flex flex-col flex-wrap overflow-y-scroll w-full gap-x-4">
      {possibilities.map((possibility, i) => (
        <li key={`${possibility}-${i}`}>{possibility}</li>
      ))}
    </ul>
  );
};

export default Possibilities;
