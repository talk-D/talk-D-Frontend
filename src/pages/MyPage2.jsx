import React from 'react';
import '../styles/MyPage2.css';

function Mypage2Page() {
  return (
    <div className="div-wrapper">
  <div className="div">
    <div className="thememenu">
      <div className="viewtheme">테마 둘러보기</div>
      <div className="thememake">테마 제작</div>
      <div className="mystorage">내 보관함</div>
      <div className="community">커뮤니티</div>
    </div>
    <div className="searchframe">
      <img className="searchimg" alt="Searchimg" src="searchimg.png" />
      <div className="searchtext">테마명 / 작가명 검색하기</div>
    </div>
    <img className="mypagelogo" alt="Mypagelogo" src="logo.png" />
    <div className="mypagetext">마이페이지</div>
    <img className="myprofile" alt="Myprofile" src="myprofileimg.png" />
    <div className="informationmodify-2">회원정보 수정</div>
    <div className="changepw-2">비밀번호 변경</div>
    <div className="myprofile-2-2">내 프로필</div>
    <div className="inquire-2">문의하기</div>
    <img className="mypageline" alt="Mypageline" src="line.png" />
    <div className="mypage-2">마이페이지</div>
    <div className="bottombox-2">
      <div className="changepwtext">비밀번호 변경</div>
      <div className="changepw-wrapper">
        <div className="changepwbtn">비밀번호 변경</div>
      </div>
      <div className="nowpwframe" />
      <div className="newpwframe" />
      <div className="nowpw">현재 비밀번호</div>
        <div className="newpw">새 비밀번호</div>
      </div>
    </div>
  </div>
  );
};
export default Mypage2Page;
