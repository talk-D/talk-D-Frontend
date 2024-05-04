import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Step1.css';

export const Step1Page = () => {
  const [themeInfo, setThemeInfo] = useState({
    korNameframe: '',
    engNameframe: '',
    themeID: '',
    themeversion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setThemeInfo({
      ...themeInfo,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('백엔드로 데이터 보내는 URL', {
        korNameframe: themeInfo.korNameframe,
        engNameframe: themeInfo.engNameframe
      });

      const data = response.data;
      setThemeInfo({
        ...themeInfo,
        themeID: data.themeID,
        themeversion: data.themeversion
      });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    const fetchThemeInfo = async () => {
      try {
        const response = await axios.get('백엔드에서 데이터를가져오는 URL');
        const data = response.data;
        setThemeInfo({
          ...themeInfo,
          themeID: data.themeID,
          themeversion: data.themeversion
        });
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchThemeInfo(); 
  }, []);

  return (
    <div className="div-wrapper">
      <div className="div">
        <div className="thememenu">
          <div className="viewtheme">테마 둘러보기</div>
          <div className="thememake">테마 제작</div>
          <div className="mystorage">내 보관함</div>
          <div className="community">커뮤니티</div>
        </div>
        <div className="overlap">
          <img className="searchimg" alt="Searchimg" src="searchimg.png" />
          <div className="searchtext">테마명 / 작가명 검색하기</div>
        </div>
        <img className="logo" alt="Logo" src="logo.png" />
        <div className="step1mypage">마이페이지</div>
        <img className="myprofileimg" alt="Myprofileimg" src="myprofileimg.png" />
        <div className="overlap-group">
            <div className="step1nextbtn" onClick={handleSubmit}> 
              <div className="step1nexttext">다음</div>
          </div>
          <div className="themeinfo">테마 정보</div> 
          <div className="themename-korframe" />
          <input
          type="text"
          className="themename-korframe"
          name="korNameframe"
          value={themeInfo.korNameframe}
          onChange={handleChange}
          style={{
            border: 'none',
            fontSize: '20px', 
            position: 'absolute', 
            left: '530px', 
            top: '339px', 
          }}
        />
          <div className="themename-kor">테마 이름(한글){themeInfo.korName}</div> {/*사용자에게 입력 받아서 백엔드에 데이터 옮길 때 id는 korNameframe*/}
        <div className="themename-engframe" />
        <input
          type="text"
          className="themename-engframe"
          name="engNameframe"
          value={themeInfo.engNameframe}
          onChange={handleChange}
          style={{
            border: 'none',
            fontSize: '20px', 
            position: 'absolute', 
            left: '530px', 
            top: '433px', 
          }}
        />
          <div className="themename-eng">테마 이름(영문){themeInfo.engName}</div> {/*사용자에게 입력 받아서 백엔드에 데이터 옮길 때 id는 engNameframe*/}
        <div className="themeIdframe">{themeInfo.themeID}</div>
          <div className="themeID">테마ID</div> {/*백엔드에서 데이터 받을 때 id는 themeId로 넘겨줄 거임*/}
          <div className="themeversionframe">{themeInfo.themeversion}</div>
          <div className="themeversion">테마 버전</div> {/*백엔드에서 데이터 받을 때 id는 themeVersion으로 넘겨줄 거임*/}
        </div>
        <div className="step-wrapper">
          <div className="step">STEP 1. 테마 정보</div>
        </div>
        <div className="overlap-2">
          <div className="step-2">STEP 2. 테마 제작</div>
        </div>
        <div className="thumbnail-wrapper">
          <div className="step1thumbnail">썸네일</div>
        </div>
        <div className="pw-wrapper">
          <div className="pw">비밀번호</div>
        </div>
        <div className="freindlist-wrapper">
          <div className="freindlist">친구 목록</div>
        </div>
        <div className="chattingroom-wrapper">
          <div className="step1chattingroom">채팅방</div>
        </div>
        <div className="tapbar-wrapper">
          <div className="step1tapbar">탭바</div>
        </div>
        <div className="overlap-3">
          <div className="step-2">STEP 3. 테마 다운</div>
        </div>
        <div className="notification-wrapper">
          <div className="notification">알림창</div>
        </div>
      </div>
    </div>
  );
};
export default Step1Page;


