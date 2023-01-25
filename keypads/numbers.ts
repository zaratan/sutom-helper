import KeypadLayoutType from './KeypadLayoutType';

const numbers: KeypadLayoutType = {
  numberOfLines: 1,
  lines: [
    [
      { letter: '5' },
      { letter: '6' },
      { letter: '7' },
      { letter: '8' },
      { letter: '9' },
      { letter: '⌫', special: true, back: true },
      { letter: '↲', doubleGrow: true, special: true, return: true },
    ],
  ],
};

export default numbers;
