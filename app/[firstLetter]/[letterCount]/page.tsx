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

const Page = async ({
  params: { letterCount, firstLetter },
}: {
  params: {
    firstLetter: string;
    letterCount: string;
  };
}) => {
  return <Main firstLetter={firstLetter} letterCount={Number(letterCount)} />;
};

export default Page;
