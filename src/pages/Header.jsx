import React from 'react';
import '../styles/Header.css';

const Header = ({
    handleThemeMakeClick,
    handleViewthemeClick,
    handleMyStorageClick,
    handleCommunityClick,
    handleMainClick
}) => {
    return (
        <div className="header">
            <div className="thememenu"> 
                <div className="thememake" id="ThemeMakeBtn" onClick={handleThemeMakeClick}>
                    테마 제작
                </div> 
                <div className="viewtheme" id="ViewThemeBtn" onClick={handleViewthemeClick}>
                    테마 둘러보기
                </div> 
                <div className="mystorage" id="MyStorageBtn" onClick={handleMyStorageClick}>
                    내 보관함
                </div> 
                <div className="community" id="CommunityBtn" onClick={handleCommunityClick}>
                    커뮤니티
                </div> 
            </div> 
            <div className="searchframe"> 
                <img className="searchimg" alt="Searchimg" src="searchimg.png" /> 
                <div className="searchtext">테마명 / 작가명 검색하기</div> 
            </div> 
            <img className="logo" alt="Logo" src="logo.png" id="mainlink" onClick={handleMainClick}/> 
        </div>
    );
}

export default Header;
