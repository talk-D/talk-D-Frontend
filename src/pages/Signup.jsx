import React from 'react';
import '../styles/Signup.css';

function SignupPage() {
  const handleSignupLogoClick = () => {
    window.location.href = "main";
};
    return (
    <div className="screen">
  <div className="div">
    <img className="signuplogo" alt="Logo" src="logo.png" 
    id="MainLink" onClick={handleSignupLogoClick}/>
    <div className="emailframe_1">
      <div className="email_1">이메일</div>
      <img className="emailicon" alt="Emailicon" src="emailicon.png" />
    </div>
    <div className="pwframe_1">
      <img className="pwicon" alt="Pwicon" src="pwicon.png" />
      <div className="pw_1">비밀번호(8자 이상)</div>
    </div>
    <div className="nameframe">
      <div className="name">이름</div>
      <img className="nameicon" alt="Nameicon" src="emailicon.png" />
    </div>
    <div className="signup_2">회원가입</div>
    <div className="signup_2btnframe">
      <div className="signup_2btn">회원가입</div>
    </div>
    <div className="nicknameframe">
      <div className="nickname">닉네임</div>
      <img className="nicknameicon" alt="Nicknameicon" src="nicknameicon.png" />
    </div>
    <div className="pwcheckframe">
      <img className="pwcheckicon" alt="Pwcheckicon" src="pwicon.png" />
      <div className="pwcheck">비밀번호 확인</div>
    </div>
  </div>
</div>
    );
};
export default SignupPage;
