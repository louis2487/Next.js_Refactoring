'use client';

import { Providers } from './provider';
import './globals.css';
import TopBar from '../components/TopBar';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="ko" className='html-set'>
      <body>
        <Providers>
          {pathname !== '/' && pathname !== '/Info'&&pathname !== '/Question'&&pathname !== '/Lo'&& pathname !== '/signup'&&<TopBar />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
