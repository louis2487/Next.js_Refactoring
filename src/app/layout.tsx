import Link from 'next/link';
import {Providers} from './provider';
import './globals.css';
import TopBar from '../components/TopBar'
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
        <TopBar/>
        {children}
        </Providers>
      </body>
    </html>
  )
}