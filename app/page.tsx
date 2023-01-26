'use client';

import FirstLetterSelector from '@/app/components/FirstLetterSelector';
import Main from '@/app/components/Main';
import NumberOfLettersSelector from '@/app/components/NumberOfLettersSelector';
import { useState } from 'react';

export default function Home() {
  const [firstLetter, setFirstLetter] = useState<string>();
  const [wordLength, setWordLength] = useState<number>();

  if (!firstLetter) {
    return <FirstLetterSelector setFirstLetter={setFirstLetter} />;
  }

  if (!wordLength) {
    return <NumberOfLettersSelector setLetterCount={setWordLength} />;
  }

  return <Main firstLetter={firstLetter} letterCount={wordLength} />;
}
