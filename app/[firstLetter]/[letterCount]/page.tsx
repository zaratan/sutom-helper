import React from 'react';
import Main from '@/app/[firstLetter]/[letterCount]/Main';
import { letters, numbers } from '@/data/const';

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
