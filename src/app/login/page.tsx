'use client';
import '../globals.css';

export default function login() {
  return (
    <main className="home-main">
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
          차량 등록 후 체크리스트를 작성하면<br className="hidden-md" />
          점검 여부, 예상 교체 주기 및 거리를 알려드려요~!
        </h1>
      </div>
    </main>
  );
}
