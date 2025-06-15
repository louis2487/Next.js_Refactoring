// 등록 페이지 - update 0601
"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMileage } from '../store/carSlice';
import { RootState, AppDispatch } from '../store/store';
import '../globals.css';
import Link from 'next/link';

interface InboxPropsType {
  value: string;
  handler1: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handler2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handler3: () => void;
}
function Inbox({ value, handler1, handler2, handler3 }: InboxPropsType) {
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
      <button className="login-start" onClick={handler1} >시작</button>
    </div>
  )
}

export default function Signup() {

  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const useremail = useSelector((state: RootState) => state.myuser.useremail);
  const userlogin = useSelector((state: RootState) => state.myuser.userlogin);

  const SetEmailhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const Blurhandler = () => {
    const data = parseInt(email, 10);
    if (!isNaN(data)) dispatch(setMileage(data));
  }
  const SignUphandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const res = await fetch('/api/owner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim() }),
    });

    if (res.ok) {    
      mailhandler(email);               
      await res.json();
      alert('이메일 등록 완료!');
      setEmail('');
    } else if (res.status === 409) {
      alert('이미 등록된 이메일입니다.');
    } else {
      alert('서버 오류가 발생했습니다.');
    }
  }

  const mailhandler = async (usermail : string) => {
    console.log(useremail);
    const a = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: `${usermail}`,
        subject: '가입 확인 메일',
        text: `안녕하세요 ${usermail}님! SmartGauge의 유저가 되신 것을 진심으로 환영합니다!`,
      }),
    });
    if (!a.ok) {
      alert("가입 메일 전송 실패");
      const err = await a.json().catch(() => ({}));
      throw new Error(`${a.status} ${err.error ?? 'Unknown error'}`);
    }
    alert("가입 메일 전송 성공");
    return  a.json(); 
  };

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
        {userlogin ? <div className='user-wellcom'>환영해요 {useremail}님!</div> :
          <div className='home-butt2'>
            <Link href="/signup">
              <button className="login-btn">등록</button>
            </Link>
            <Link href="/Lo">
              <button className="login-btn">로그인</button>
            </Link>
          </div>}
      </header>

      <div className="home-hero">
        <h1 className="home-hero-title">
          이메일을 등록해주세요!<br />
        </h1>
        <div className="mileage-center">
          <Inbox value={email} handler1={SignUphandler} handler2={SetEmailhandler} handler3={Blurhandler} />
        </div>
      </div>
    </main>
  );
}