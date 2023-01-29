import React from 'react';
import Main from '@/app/[firstLetter]/[letterCount]/Main';
import { letters, numbers } from '@/data/const';
import * as fs from 'fs';

import words from '@/data/wordsFromSutomRepo.json';

export async function generateStaticParams() {
  return letters.flatMap((letter) =>
    numbers.map((number) => ({
      firstLetter: letter,
      letterCount: number.toString(),
    }))
  );
}

const getValidWords = async (firstLetter: string, letterCount: number) => {
  const validWords = words.filter(
    (word) =>
      word.length === letterCount &&
      word[0].toLowerCase() === firstLetter.toLowerCase()
  );
  return validWords;
};

const Page = async ({
  params: { letterCount, firstLetter },
}: {
  params: {
    firstLetter: string;
    letterCount: string;
  };
}) => {
  const fetchedWords = await getValidWords(firstLetter, Number(letterCount));

  return (
    <Main
      firstLetter={firstLetter}
      letterCount={Number(letterCount)}
      possibleWords={fetchedWords}
    />
  );
};

export default Page;
