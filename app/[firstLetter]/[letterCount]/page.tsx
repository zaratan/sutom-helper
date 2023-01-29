import React from 'react';
import Main from '@/app/[firstLetter]/[letterCount]/Main';
import { Letter, letters, numbers } from '@/data/const';
import { frequencyLetterFr } from '@/data/statisticsLetterFr';

import words from '@/data/wordsFromSutomRepo.json';
import { uniq } from 'lodash';
import { sortBy } from 'lodash';

export async function generateStaticParams() {
  return letters.flatMap((letter) =>
    numbers.map((number) => ({
      firstLetter: letter,
      letterCount: number.toString(),
    }))
  );
}

const getValidWords = async (firstLetter: string, letterCount: number) => {
  const validWords = sortBy(
    words
      .filter(
        (word) =>
          word.length === letterCount &&
          word[0].toLowerCase() === firstLetter.toLowerCase()
      )
      .map((word) => ({
        word,
        score: (
          uniq(
            word.split('').map((l) => l.toLocaleLowerCase())
          ) as Array<Letter>
        ).reduce((acc, letter) => acc + frequencyLetterFr[letter], 0),
      })),
    'score'
  ).reverse();
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
