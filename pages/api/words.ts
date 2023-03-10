// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sortBy, uniq } from 'lodash';
import { frequencyLetterFr } from '@/data/statisticsLetterFr';
import { Letter, ValidLetter } from '@/data/const';
import allWords from '@/data/wordsSplit';

export type WordsData = {
  words: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WordsData>
) {
  const { fbl, w, upl, lc, fl } = req.query;
  const words: Array<string> =
    allWords[String(fl) as ValidLetter][Number(lc) as 6 | 7 | 8 | 9];
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
        score: uniq(w.split('')).reduce((acc, letter, i) => {
          if (
            unknownPosLetters
              .map((ul) => ul.letter)
              .includes(letter.toLocaleLowerCase()) ||
            word.includes(letter)
          ) {
            return acc;
          }
          return acc + frequencyLetterFr[letter.toLowerCase() as Letter];
        }, 0),
      })),
    'score'
  ).reverse();

  const possibilities = filteredWords.map((w) => w.word).slice(0, 100);

  res.status(200).json({ words: possibilities.slice(0, 100) || [] });
}
