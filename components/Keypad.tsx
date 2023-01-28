import classMerge from '@/helpers/classMerge';
import KeypadLayoutType from '@/keypads/KeypadLayoutType';
import LetterType from '@/keypads/LetterType';
import React from 'react';
import { KeyClick, KeyLink } from './Key';

const KeyLine = ({
  line,
  disableSpecial,
  disableReturn,
  onClickNormal,
  onClickBack,
  onClickReturn,
  disabledLetters,
  linkFormatNormal,
}: {
  line: Array<LetterType>;
  disableSpecial?: boolean;
  disableReturn?: boolean;
  onClickNormal?: (letter: string) => void;
  onClickBack?: (letter: string) => void;
  onClickReturn?: (letter: string) => void;
  disabledLetters?: Array<string>;
  linkFormatNormal?: string;
}) => {
  return (
    <div className="flex w-full flex-grow gap-1">
      {line.map((letter) =>
        linkFormatNormal ? (
          <KeyLink
            key={letter.letter}
            letter={letter.letter}
            doubleGrow={letter.doubleGrow}
            disabled={
              (disableSpecial && letter.special) ||
              (disableReturn && letter.return) ||
              disabledLetters?.includes(letter.letter)
            }
            link={linkFormatNormal.replace('{letter}', letter.letter)}
          />
        ) : (
          <KeyClick
            key={letter.letter}
            letter={letter.letter}
            doubleGrow={letter.doubleGrow}
            disabled={
              (disableSpecial && letter.special) ||
              (disableReturn && letter.return) ||
              disabledLetters?.includes(letter.letter)
            }
            onClick={
              letter.special
                ? letter.back
                  ? onClickBack
                  : onClickReturn
                : onClickNormal
            }
          />
        )
      )}
    </div>
  );
};

const Keypad = ({
  disableSpecial,
  disableReturn,
  onClickNormal,
  onClickReturn,
  onClickBack,
  layout,
  disabledLetters,
  linkFormatNormal,
}: {
  disableSpecial?: boolean;
  disableReturn?: boolean;
  onClickNormal?: (letter: string) => void;
  onClickReturn?: () => void;
  onClickBack?: () => void;
  layout: KeypadLayoutType;
  disabledLetters?: Array<string>;
  linkFormatNormal?: string;
}) => {
  return (
    <div
      className={classMerge(
        'flex flex-col justify-center gap-1 max-w-lg w-full',
        layout.numberOfLines === 3 ? 'h-40' : 'h-14'
      )}
    >
      {layout.lines.map((line, i) => (
        <KeyLine
          key={`line-${i}`}
          line={line}
          disableSpecial={disableSpecial}
          disableReturn={disableReturn}
          onClickNormal={onClickNormal}
          onClickReturn={onClickReturn}
          onClickBack={onClickBack}
          disabledLetters={disabledLetters}
          linkFormatNormal={linkFormatNormal}
        />
      ))}
    </div>
  );
};

export default Keypad;
