import { WordsData } from '@/pages/api/words';
import React from 'react';
import useSWR from 'swr';

const fetcher = (entry: RequestInfo, init?: RequestInit) =>
  fetch(entry, init).then((res) => res.json());

const Possibilities = ({
  word,
  forbiddenLetters,
  unknownPosLetters,
  firstLetter,
  letterCount,
}: {
  letterCount: number;
  firstLetter: string;
  word: Array<string | null>;
  forbiddenLetters: Array<{ letter: string }>;
  unknownPosLetters: Array<{ letter: string; count: number }>;
}) => {
  const { data } = useSWR<WordsData>(
    `/api/words?w=${JSON.stringify(word)}&upl=${JSON.stringify(
      unknownPosLetters
    )}&fbl=${JSON.stringify(
      forbiddenLetters
    )}&fl=${firstLetter}&lc=${letterCount}`,
    fetcher
  );

  if (!data) {
    return (
      <div className="h-96 my-4 flex justify-center items-center">
        Chargement...
      </div>
    );
  }

  return (
    <ul className="h-96 my-4 flex items-center flex-col flex-wrap overflow-y-scroll w-full gap-x-4">
      {data.words.map((possibility, i) => (
        <li key={`${possibility}-${i}`}>{possibility}</li>
      ))}
    </ul>
  );
};

export default Possibilities;
