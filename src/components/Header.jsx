
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({
    handleThemeMakeClick: handleThemeMakeClickProp,
    handleViewthemeClick: handleViewthemeClickProp,
    handleMyStorageClick: handleMyStorageClickProp,
    handleCommunityClick: handleCommunityClickProp,
    handleMainClick
}) => {
    const [themeMakeClicked, setThemeMakeClicked] = useState(false);
    const [viewThemeClicked, setViewThemeClicked] = useState(false);
    const [myStorageClicked, setMyStorageClicked] = useState(false);
    const [communityClicked, setCommunityClicked] = useState(false);

    const handleThemeMakeClick = () => {
        handleThemeMakeClickProp();
        setThemeMakeClicked(true);
    };

    const handleViewthemeClick = () => {
        handleViewthemeClickProp();
        setViewThemeClicked(true);
    };

    const handleMyStorageClick = () => {
        handleMyStorageClickProp();
        setMyStorageClicked(true);
    };

    const handleCommunityClick = () => {
        handleCommunityClickProp();
        setCommunityClicked(true);
    };

    const handleSignUpClick = () => {
        window.location.href = "Login";
    };

    return (
        <div className="header">
            <div className="header1">
                <img className="logo" alt="Logo" src="logo.png" id="mainlink" onClick={handleMainClick} />
                <div className="searchframe">
                    <img className="searchimg" alt="Searchimg" src="searchimg.png" />
                    <div className="searchtext">테마명 / 작가명 검색하기</div>
                </div>
                <div className="headersignup" id="SignUpLink" onClick={handleSignUpClick}>로그인/회원가입 </div>
                <img className="myprofile" alt="Myprofile" src="myprofileimg.png" />
            </div>
            <div className="navbar">
                <div className={`thememake ${themeMakeClicked ? 'clicked' : ''}`} onClick={handleThemeMakeClick}>
                    테마 제작
                </div>
                <div className={`viewtheme ${viewThemeClicked ? 'clicked' : ''}`} onClick={handleViewthemeClick}>
                    테마 둘러보기
                </div>
                <div className={`mystorage ${myStorageClicked ? 'clicked' : ''}`} onClick={handleMyStorageClick}>
                    내 보관함
                </div>
                <div className={`community ${communityClicked ? 'clicked' : ''}`} onClick={handleCommunityClick}>
                    커뮤니티
                </div>
            </div>
        </div>
    );
};

export default Header;
