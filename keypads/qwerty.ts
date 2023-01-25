import KeypadLayoutType from './KeypadLayoutType';
import LetterType from './LetterType';

const firstLine: Array<LetterType> = [
  { letter: 'Q' },
  { letter: 'W' },
  { letter: 'E' },
  { letter: 'R' },
  { letter: 'T' },
  { letter: 'Y' },
  { letter: 'U' },
  { letter: 'I' },
  { letter: 'O' },
  { letter: 'P' },
];
const secondLine: Array<LetterType> = [
  { letter: 'A' },
  { letter: 'S' },
  { letter: 'D' },
  { letter: 'F' },
  { letter: 'G' },
  { letter: 'H' },
  { letter: 'J' },
  { letter: 'K' },
  { letter: 'L' },
];
const thirdLine: Array<LetterType> = [
  { letter: 'Z' },
  { letter: 'X' },
  { letter: 'C' },
  { letter: 'V' },
  { letter: 'B' },
  { letter: 'N' },
  { letter: 'M' },
  { letter: '⌫', special: true, back: true },
  { letter: '↲', doubleGrow: true, special: true, return: true },
];

const qwerty: KeypadLayoutType = {
  numberOfLines: 3,
  lines: [firstLine, secondLine, thirdLine],
};

export default qwerty;
