import React from 'react';
import '../styles/MyPage.css';

function MypagePage() {
  const handleChangePwClick = () => {
    window.location.href = "mypage2";
};
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
        <div className="modifyframe">
          <div className="modify-btn-wrapper">
            <div className="modify-btn">회원정보 수정</div>
          </div>
          <div className="emailtext-wrapper">
            <div className="emailtext">talkD@naver.com</div>
          </div>
          <div className="informationtext-wrapper">
            <div className="informationtext">톡디 사랑해요</div>
          </div>
          <div className="nicknametext-wrapper">
            <div className="nicknametext">톡디</div>
          </div>
          <div className="i-dtext-wrapper">
            <div className="i-dtext">@talkD</div>
          </div>
          <div className="ID">아이디</div>
          <div className="email">이메일</div>
          <div className="information">한 줄 소개</div>
          <div className="nickname">닉네임</div>
          <img className="img" alt="Myprofile" src="myprofileimg.png" />
          <div className="changepicture-wrapper">
            <div className="text-wrapper1">사진 변경</div>
          </div>
          <div className="deletepicture-wrapper">
            <div className="text-wrapper1">사진 삭제</div>
          </div>
        </div>
        <div className="informationmodify">회원정보 수정</div>
        <div className="changepw" id="changepwLink" onClick={handleChangePwClick}>
          비밀번호 변경
          </div>
        <div className="myprofile-2">내 프로필</div>
        <div className="inquire">문의하기</div>
        <img className="mypageline" alt="Mypageline" src="line.png" />
        <div className="mypage-2">마이페이지</div>
      </div>
    </div>
  );
}

export default MypagePage;
