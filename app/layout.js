import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mission 2024',
  description: 'This is all about my mission in 2024 as a web developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='px-32 pt-12' data-theme='light'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
