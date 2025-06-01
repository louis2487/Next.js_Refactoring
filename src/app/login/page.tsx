//로그인 페이지 - update 0531
"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMileage } from '../store/carSlice';
import { RootState, AppDispatch } from '../store/store';
import '../globals.css';
import Link from 'next/link';



interface InboxPropsType {
  value: string;
  handler2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handler3: () => void;
}
function Inbox({ value, handler2, handler3 }: InboxPropsType) {
  return (
    <div className="container-email">
      <label htmlFor="email" className="label-email">Email:</label>
      <input
        type="email"
        id="useremail"
        className="input-email"
        value={value}
        onChange={handler2}
        onBlur={handler3}
        placeholder="예: smartgauge@naver.com"
      />
      <button className="login-start">시작</button>
    </div>
  )
}

export default function login() {
  const [inputValue, setInputValue] = useState<string>("");
const dispatch = useDispatch();
  const Inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const Blurhandler = () => {
    const data = parseInt(inputValue, 10);
    if (!isNaN(data)) dispatch(setMileage(data));
  }
  return (
    <main className="login-main">
      <header className="home-header">
        <div className="header-title">SmartGauge</div>
        <nav>
          <ul className="header-nav">
            <li><Link href="/" className="nav-link">홈</Link></li>
            <li><Link href="/Info" className="nav-link">소개</Link></li>
            <li><Link href="/R1" className="nav-link">점검</Link></li>
            <li><Link href="/Question" className="nav-link">문의</Link></li>
          </ul>
        </nav>
        <div className='home-butt2'>
        <Link href="/signup">
            <button className="login-btn">등록</button>
          </Link>
          <Link href="/login">
            <button className="login-btn">로그인</button>
          </Link>
        </div>
      </header>

      <div className="home-hero">
        <h1 className="home-hero-title">
          등록된 이메일을 입력해주세요!<br />
        </h1>
        <div className="mileage-center">
          <Inbox value={inputValue} handler2={Inputhandler} handler3={Blurhandler} />
        </div>
      </div>
    </main>
  );
}

