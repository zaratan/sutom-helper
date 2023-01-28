// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import words from '@/data/wordsFromSutomRepo.json';

type Data = {
  words: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { firstLetter, letterCount } = req.query;
  let firstLetterString = String(firstLetter);

  if (firstLetterString.length > 1) {
    firstLetterString = firstLetterString[0];
  }

  const letterCountNum = Number(letterCount);

  const regexpWord = RegExp(
    `^${[
      firstLetter,
      ...Array.from({ length: letterCountNum - 1 }, () => '.'),
    ].join('')}$`,
    'i'
  );

  const filteredWords = words.filter((w) => regexpWord.test(w));

  res.status(200).json({ words: filteredWords || [] });
}
