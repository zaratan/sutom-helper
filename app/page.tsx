'use client';

import FirstLetterSelector from '@/components/FirstLetterSelector';
import Main from '@/components/Main';
import NumberOfLettersSelector from '@/components/NumberOfLettersSelector';
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
