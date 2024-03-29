import React from 'react';
import '../styles/Login.css';

function LoginPage() {
    return (
        <div className="loginentireframe">
            <div className="logo">
                {/* 로고 이미지 또는 텍스트를 여기에 추가 */}
            </div>
            <div className="logintext">
                로그인 
            </div>
            <div className="emailframe">
                <span className="emailtext">
                    이메일                
                </span>
                {/* 이메일 입력 필드 */}
            </div>
            <div className="pwframe">
                <span className="pwtext">
                    비밀번호               
                </span>
                {/* 비밀번호 입력 필드 */}
            </div>
            <div className="loginframe">
                <button className="login">
                    로그인
                </button>
                {/* 로그인 버튼 */}
            </div>
            <div className="widthline">
                {/* 수평 라인 */}
            </div>
            <div className="membershiptext">
                회원가입
            </div>
            <div className="imgframe">
                <div className="naverimg">
                    {/* 네이버 이미지 */}
                </div>
                <div className="kakaotalkimg">
                    {/* 카카오톡 이미지 */}
                </div>
                <div className="googleimg">
                    {/* 구글 이미지 */}
                </div>
            </div>
            <div className="signupemail">
                이메일로 가입하기
            </div>
            <div className="emailpwsearchframe">
                <div className="searchid">
                    아이디 찾기
                </div>
                <div className="lengthline">
                    {/* 수직 라인 */}
                </div>
                <div className="searchpw">
                    비밀번호 찾기
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
