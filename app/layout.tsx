import './globals.css';
import { Inter, Roboto } from '@next/font/google';
import classMerge from '@/helpers/classMerge';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMedium = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto-medium',
  weight: '500',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={classMerge(
          inter.variable,
          robotoMedium.variable,
          'bg-sutom-gray flex flex-col justify-between min-h-screen text-white items-center font-roboto'
        )}
      >
        <Title />
        <div className="grow h-full flex flex-col justify-around max-w-3xl w-full items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
