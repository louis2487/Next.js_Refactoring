"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setMileage } from '../store/carSlice';
import { login, logout } from '../store/userslice';
import { useRouter } from 'next/navigation';
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
        id="email"
        className="input-email"
        value={value}
        onChange={handler2}
        onBlur={handler3}
        placeholder="예: smartgauge@naver.com"
      />
      <button className="login-start" onClick={handler1}>시작</button>
    </div>
  )
}

export default function Lo() {
  const dispatch = useDispatch();
  const router = useRouter();
 
  const [email, setEmail] = useState<string>("");
  const [usermail, setUsermail] = useState<string>("");
  const [islogin, setIslogin] = useState<boolean>(false);


  const Inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const Blurhandler = () => {
    const data = parseInt(email, 10);
    if (!isNaN(data)) dispatch(setMileage(data));
  };
  const Loginhandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await fetch("/api/userlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim() }),
    });

    if (res.ok) {
      const data = await res.json();
      alert(`${data.email}님, 로그인 성공!`);
      setIslogin(true);
      setUsermail(`${data.email}`);
      login(data.email);
      setEmail('');
      dispatch(login({email:data.email}));
      router.push('/');
    } else {
      alert(`LOGIN ERROR`);
    }
  };
  const LogoutHandler = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });
  
    if (res.ok) {
      alert("로그아웃 되었습니다.");
      setIslogin(false);
      setUsermail('');
      dispatch(logout());
    } else {
      alert("로그아웃 실패");
    }
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
        {islogin ? <div className='home-butt2'><div className='user-wellcom'>환영해요 {usermail}님!</div> 
        <button className="login-btn" onClick={LogoutHandler}>로그아웃</button></div>
         :
          <div className='home-butt2'>
            <Link href="/signup">
              <button className="login-btn">등록</button>
            </Link>
            <Link href="/Lo">
              <button className="login-btn">로그인</button>
            </Link>
          </div>
        }
      </header>

      <div className="home-hero">
        <h1 className="home-hero-title">
          등록된 이메일을 입력해주세요!<br />
        </h1>
        <div className="mileage-center">
          <Inbox value={email} handler1={Loginhandler} handler2={Inputhandler} handler3={Blurhandler} />
        </div>
      </div>
    </main>
  );
}
