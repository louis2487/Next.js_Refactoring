'use client';
import './globals.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store'; 
import { logout } from './store/userslice';



export default function Home() {
  const {userlogin, useremail}= useSelector((state: RootState) => state.myuser);

  const dispatch = useDispatch();
  const handler = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include', 
    });
    alert("로그아웃 되었습니다.");
    dispatch(logout());
  };

  return (
    <main className="home-main">
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
        {userlogin ? <div className='home-butt2'><div className='user-wellcom'>환영해요 {useremail}님!</div> 
        <button className="login-btn" onClick={handler}>로그아웃</button></div>
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
          불편한 차량 소모품 관리<br/>
          이제 바로바로 스마트하게 확인해요!
        </h1>
      </div>
    </main>
  );
}