import React from 'react';
import '../styles/Main.css';

function MainPage() {
    const handleLoginClick = () => {
        window.location.href = "login";
    };

    const handleThemeWatchClick = () => {
        window.location.href = "themewatch.html";
    };

    const handleThemeMakeClick = () => {
        window.location.href = "thememake.html";
    };

    const handleCommunityClick = () => {
        window.location.href = "community";
    };

    const handleThemeSaveClick = () => {
        window.location.href = "themesave.html";
    };

    return (
        <div className="entire">
            <div className="searchbg">
                <div className="logo">
                </div>
                <div className="searchframe">
                    <div className="searchtext">
                        테마명 / 작가명 검색하기
                    </div>
                    <div className="search">
                        <img className="serchimg" />
                    </div>
                </div>
                <div className="login" id="loginLink" onClick={handleLoginClick}>
                    로그인 / 회원가입
                </div>
            </div>
            <div className="thememenu">
                <span className="themewatch" id="ThemeWatchBtn" onClick={handleThemeWatchClick}>
                    테마 둘러보기
                </span>
                <span className="thememake" id="ThemeMakeBtn" onClick={handleThemeMakeClick}>
                    테마 제작
                </span>
                <span className="community" id="CommunityBtn" onClick={handleCommunityClick}>
                    커뮤니티
                </span>
                <span className="themesave" id="ThemeSaveBtn" onClick={handleThemeSaveClick}>
                    내 보관함
                </span>
            </div>
            <div className="uploadbg">
                <div className="myuploadthemeframe">
                    <span className="myuploadtheme">
                        내가 올린 테마 모아보기
                    </span>
                </div>
                <div className="themelikeframe">
                    <span className="themelike">
                        좋아요한 테마 모아보기
                    </span>
                </div>
                <div className="themeuploadfrmae">
                    <span className="themeupload">
                        테마 올리기
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MainPage;


