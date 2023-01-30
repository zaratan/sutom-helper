import FirstLetterSelector from '@/app/FirstLetterSelector';
import { Letter } from '@/data/const';

async function getFiles() {
  // List all directory names in the data directory
  const fs = require('fs/promises');
  const files = await fs.readdir('./data', { withFileTypes: true });
  const directories = files.filter((file: any) => file.isDirectory());
  const firstLetters: Array<Letter> = directories.map(
    (directory: any) => directory.name
  );

  return firstLetters;
}

export default async function Home() {
  const availableLetters = await getFiles();

  return (
    <>
      <FirstLetterSelector availableLetters={availableLetters} />
    </>
  );
}
