import NumberOfLettersSelector from '@/app/[firstLetter]/NumberOfLettersSelector';
import { letters } from '@/data/const';

export async function generateStaticParams() {
  return letters.map((letter) => ({ firstLetter: letter }));
}

export default function Home({
  params: { firstLetter },
}: {
  params: { firstLetter: string };
}) {
  if (firstLetter.length > 1) {
    firstLetter = firstLetter[0];
  }

  return <NumberOfLettersSelector firstLetter={firstLetter} />;
}
