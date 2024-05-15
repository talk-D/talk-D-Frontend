import React from 'react';
import '../styles/Main2.css';

function Main2Page() {
    const handleMainClick = () => {
        window.location.href = "";
    };

    const handleMyPageClick = () => {
        window.location.href = "mypage";
    };

    const handleViewthemeClick = () => {
        window.location.href = "viewtheme";
    };

    const handleThemeMakeClick = () => {
        window.location.href = "thememakestep2";
    };

    const handleCommunityClick = () => {
        window.location.href = "community";
    };

    const handleMyStorageClick = () => {
        window.location.href = "mystorage";
    };

    return (
        <div className="screen"> 
            <div className="div"> 
                <div className="bottomframe"> 
                    <div className="hottheme2">실시간 핫한 테마를&nbsp;&nbsp;만나보세요!</div> 
                    <div className="todaytheme2">오늘의 인기 테마</div> 
                </div> 
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
                    <div className="community"id="CommunityBtn" onClick={handleCommunityClick}>
                    커뮤니티
                    </div> 
                </div> 
                <div className="searchframe"> 
                    <img className="searchimg" alt="Searchimg" src="searchimg.png" /> 
                    <div className="searchtext">테마명 / 작가명 검색하기</div> 
                </div> 
                <img className="logo" alt="Logo" src="logo.png" id="mainlink" onClick={handleMainClick}/> 
                <div className="mypage" id="mypageLink" onClick={handleMyPageClick}>
                    마이페이지
                    </div>
                <img className="myprofileimg" alt="Myprofileimg" src="myprofileimg.png" />
            </div> 
        </div> 
    ); 
};
export default Main2Page;