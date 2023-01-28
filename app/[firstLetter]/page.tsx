import NumberOfLettersSelector from '@/app/[firstLetter]/NumberOfLettersSelector';

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
