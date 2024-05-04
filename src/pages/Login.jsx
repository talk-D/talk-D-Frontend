import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function LoginPage() {
  const handleSignupClick = () => {
    window.location.href = "signup";
  };
  const handleLoginBtnClick = async () => {
    try {
      const response = await axios.post('백엔드로 데이터 보내는 URL', {
        email: email,
        password: password
      });
      // 로그인 성공 시에만 메인 페이지로 이동
      window.location.href = "main2";
    } catch (error) {
      console.error('로그인 에러:', error);
      // 로그인 실패 시에는 현재 창에 머무르도록 함
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="screen">
      <div className="loginentire">
        <div className="emailframe">
          <input
            type="text"
            className="emailinput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            style={{
              border: 'none',
              fontSize: '20px', 
              position: 'absolute', 
              left: '24px', 
              top: '16px', 
            }}
          />
        </div>
        <img className="logoimg" alt="Logoimg" src="logo.png" />
        <img className="loginline" alt="Loginline" src="line.png" />
        <div className="logintext">로그인</div>
        <div className="pwframe">
          <input
            type="password"
            className="pwinput" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            style={{
              border: 'none', 
              fontSize: '20px', 
              position: 'absolute', 
              left: '24px', 
              top: '16px', 
            }}
          />
        </div>
        <div className="searchpw">비밀번호 찾기</div>
        <div className="searchid">아이디 찾기</div>
        <img className="kakaologinimg" alt="Kakaologinimg" src="kakaologinimg.png" />
        <div className="signup" id="signup" onClick={handleSignupClick}>
          이메일로 회원가입하기
        </div>
        <div className="loginbtnframe">
          <div className="loginbtntext" id="main2Link" onClick={handleLoginBtnClick}>
            로그인</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
