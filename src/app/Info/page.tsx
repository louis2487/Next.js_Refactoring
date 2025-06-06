'use client';
import '../globals.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'; 
import { logout } from '../store/userslice';

export default function Info() {
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
    <main className="Info-main">
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
          홈페이지 상단 바에서 점검을 눌러보세요<br/>
          소모품의 점검 여부와 앞으로의 예상 교환 시기, 예상 주행거리 알려드려요!
        </h1>
      </div>
    </main>
  );
}
