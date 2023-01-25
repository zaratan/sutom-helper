import classMerge from '@/helpers/classMerge';
import KeypadLayoutType from '@/keypads/KeypadLayoutType';
import LetterType from '@/keypads/LetterType';
import React from 'react';
import Key from './Key';

const KeyLine = ({
  line,
  disableSpecial,
  onClickNormal,
  onClickBack,
  onClickReturn,
}: {
  line: Array<LetterType>;
  disableSpecial?: boolean;
  onClickNormal?: (letter: string) => void;
  onClickBack?: (letter: string) => void;
  onClickReturn?: (letter: string) => void;
}) => {
  return (
    <div className="flex w-full flex-grow gap-1">
      {line.map((letter) => (
        <Key
          key={letter.letter}
          letter={letter.letter}
          doubleGrow={letter.doubleGrow}
          disabled={disableSpecial && letter.special}
          onClick={
            letter.special
              ? letter.back
                ? onClickBack
                : onClickReturn
              : onClickNormal
          }
        />
      ))}
    </div>
  );
};

const Keypad = ({
  disableSpecial,
  onClickNormal,
  layout,
}: {
  disableSpecial?: boolean;
  onClickNormal?: (letter: string) => void;
  layout: KeypadLayoutType;
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
          onClickNormal={onClickNormal}
        />
      ))}
    </div>
  );
};

export default Keypad;
