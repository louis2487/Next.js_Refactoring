"use client";
import './globals.css';
import React, { useEffect } from "react";
import TopBar from '../components/TopBar';
import { useDispatch } from "react-redux";
import { usePathname } from 'next/navigation';
import { store } from "./store/store"; 
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import {login, logout} from './store/userslice'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="html-set">
        <Provider store={store}>
          <LayoutContent>{children}</LayoutContent>
        </Provider>
      </body>
    </html>
  );
}

function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();


  useEffect(() => {
    async function restoreSession() {
      const res = await fetch('/api/me', {
        method: 'GET',
        credentials: 'include', 
      });
      if (res.ok) {
        const user = await res.json();
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    }
    restoreSession();
  }, [dispatch]);

  return (
    <>
      {pathname !== '/' &&
       pathname !== '/Info' &&
       pathname !== '/Question' &&
       pathname !== '/Lo' &&
       pathname !== '/signup' &&
       pathname !== '/_not-found' && <TopBar />
      }
      {children}
    </>
  );
}
