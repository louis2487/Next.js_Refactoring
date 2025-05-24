'use client';
import '../globals.css';

export default function Question() {
  return (
    <main className="Question-main">
      <header className="home-header">
        <div className="header-title">SmartGauge</div>
        <nav>
          <ul className="header-nav">
            <li><a href="/" className="nav-link">홈</a></li>
            <li><a href="/Info" className="nav-link">소개</a></li>
            <li><a href="/R1" className="nav-link">점검</a></li>
            <li><a href="/Question" className="nav-link">문의</a></li>
          </ul>
        </nav>
        <button className="login-btn">
          로그인
        </button>
      </header>

      <div className="home-hero">
        <h1 className="home-hero-title">
          문의하고 싶은 내용이 있다면<br />
          36y4ws7@naver.com 로 메일 보내주세요!
        </h1>
      </div>
    </main>
  );
}
