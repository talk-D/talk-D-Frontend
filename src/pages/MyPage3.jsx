
import React from 'react';
import '../styles/Main.css';

function MyPage3Page() {
    return (
        <div className="div-wrapper">
  <div className="div">
    <div className="thememenu">
      <div className="community">커뮤니티</div>
      <div className="mystorage">내 보관함</div>
      <div className="thememake">테마 제작</div>
      <div className="viewtheme">테마 둘러보기</div>
    </div>
    <div className="overlap">
      <img className="searchimg" alt="Searchimg" src="searchimg.png" />
      <div className="searchtext">테마명 / 작가명 검색하기</div>
    </div>
    <img className="mypagelogo" alt="Mypagelogo" src="logo.png" />
    <div className="mypagetext">마이페이지</div>
    <img className="myprofile" alt="Myprofile" src="myprofile.png" />
    <div className="changepw">비밀번호 변경</div>
    <div className="informationmodify">회원정보 수정</div>
    <div className="text-wrapper">내 프로필</div>
    <div className="inquire">문의하기</div>
    <img className="mypageline" alt="Mypageline" src="line.png" />
    <div className="mypage">마이페이지</div>
    <div className="overlap-group">
      <img className="profileimage" alt="Profileimage" src="profileimage.png" />
      <div className="ID">톡디 @talkD</div>
      <div className="information">난 개발자가 될테야</div>
      <div className="overlap-2">
        <div className="overlap-3">
          <div className="follow">팔로우</div>
          <div className="text-wrapper-2">100</div>
        </div>
        <div className="overlap-4">
          <div className="following">팔로잉</div>
          <div className="text-wrapper-3">100</div>
        </div>
        <div className="overlap-5">
          <div className="heart">찜</div>
          <div className="text-wrapper-4">100</div>
        </div>
      </div>
      <img className="line" alt="Line" src="line.png" />
    </div>
  </div>
</div>
    );
};
export default MyPage3Page;
