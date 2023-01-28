import React from 'react';
import Main from '@/app/[firstLetter]/[letterCount]/Main';

const Page = ({
  params: { letterCount, firstLetter },
}: {
  params: {
    firstLetter: string;
    letterCount: string;
  };
}) => {
  if (firstLetter.length > 1) {
    firstLetter = firstLetter[0];
  }
  const letterCountNum = Number(letterCount);

  return <Main firstLetter={firstLetter} letterCount={letterCountNum} />;
};

export default Page;
