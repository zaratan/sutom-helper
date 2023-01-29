// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import words from '@/data/wordsFromSutomRepo.json';
import { sortBy, uniq } from 'lodash';
import { frequencyLetterFr } from '@/data/statisticsLetterFr';
import { Letter } from '@/data/const';

export type WordsData = {
  words: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WordsData>
) {
  const { fbl, w, upl } = req.query;
  const forbiddenLetters: Array<{ letter: string }> = JSON.parse(String(fbl));
  const word: Array<string | null> = JSON.parse(String(w));
  const unknownPosLetters: Array<{ letter: string; count: number }> =
    JSON.parse(String(upl));

  const forbiddenRegex =
    forbiddenLetters.length === 0
      ? '.'
      : `[^${forbiddenLetters.map((fl) => fl.letter).join('')}]`;

  const regexpWord = RegExp(
    `^${word
      .map((letter) => (letter || forbiddenRegex).toLocaleLowerCase())
      .join('')}$`,
    'i'
  );

  const filteredWords = sortBy(
    words
      .filter(
        (w) =>
          regexpWord.test(w) &&
          unknownPosLetters.every(
            (upl) =>
              w.split('').filter((l) => l === upl.letter).length >= upl.count
          )
      )
      .map((w) => ({
        word: w,
        score: uniq(w.split('')).reduce((acc, letter) => {
          return acc + frequencyLetterFr[letter.toLowerCase() as Letter];
        }, 0),
      })),
    'score'
  ).reverse();

  const possibilities = filteredWords.map((w) => w.word).slice(0, 100);

  console.log({ possibilities });

  res.status(200).json({ words: possibilities.slice(0, 100) || [] });
}
