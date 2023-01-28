import React from 'react';
import Main from '@/app/[firstLetter]/[letterCount]/Main';

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
