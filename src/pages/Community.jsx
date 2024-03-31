import React from "react";
import '../styles/Community.css';

function CommunityPage() {
  return (
    <div className="screen">
      <div className="div">
        <img className="logo" alt="Logo" src="logo.png" />
        <div className="searchframe">
          <div className="searchtext">테마명 / 작가명 검색하기</div>
          <img className="searchimg" alt="Searchimg" src="searchimg.png" />
        </div>
        <div className="mypage">마이페이지</div>
        <img className="profileimg" alt="Profileimg" src="profileimg.png" />
        <div className="thememenu">
          <div className="themewatch">테마 둘러보기</div>
          <div className="thememake">테마 제작</div>
          <div className="themesave">내 보관함</div>
          <div className="community">커뮤니티</div>
        </div>
        <div className="requesttheme">테마요청</div>
        <div className="allpost">전체글</div>
        <div className="promotion">홍보</div>
        <div className="talk">잡담</div>
        <div className="information">정보</div>
        <img className="line" alt="Line" src="line.png" />
        <div className="postingframe">
          <div className="postingtitle"> 제가 테마를 만들어봤어요&gt;&lt;</div>
          <div className="postingtopic">[홍보]</div>
          <div className="postingdate"> 2024. 03. 12. 16:32</div>
        </div>
        <div className="pagenumber">
          <span className="text-wrapper-2"> 1&nbsp;&nbsp;2&nbsp;&nbsp;</span>
          <span className="text-wrapper-3">3</span>
          <span className="text-wrapper-2">&nbsp;&nbsp;4&nbsp;&nbsp;5&nbsp;&nbsp;</span>
        </div>
        <div className="frontbtn">&lt;&lt;</div>
        <div className="frontbtn-2">&lt;</div>
        <div className="backbtn">&gt;&gt;</div>
        <div className="backbtn-2">&gt;</div>
        <div className="posting-wrapper">
          <div className="posting">게시글 작성</div>
        </div>
        <div className="viewmypost-wrapper">
          <div className="viewmypost">내가 쓴 글 보기</div>
        </div>
      </div>
    </div>
  );
};
export default CommunityPage;
