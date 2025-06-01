'use client';
import './globals.css';
import Link from 'next/link';

export default function Home() {
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
          불편한 차량 소모품 관리<br/>
          이제 바로바로 스마트하게 확인해요!
        </h1>
      </div>
    </main>
  );
}
