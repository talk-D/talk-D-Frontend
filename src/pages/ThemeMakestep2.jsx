import React, { useState, useRef } from 'react';
import '../styles/ThemeMakestep2.css';
import { ChromePicker } from 'react-color';

function ThemeMakestep2Page() {
  const [boxColor, setBoxColor] = useState('#ffffff');
  const [showChromePicker, setShowChromePicker] = useState(false);

  const boxRef = useRef(null);
  const colorPickerFrameRef = useRef(null);
  const ChromePickerRef = useRef(null);

  const handleStep1Click = () => {
    window.location.href = "Step1";
  };

  const handleFrameClick = (e) => {
    if (e.target.classList.contains('bottomframe')) {
      boxRef.current.style.border = 'none';
      colorPickerFrameRef.current.style.visibility = 'hidden';
      setShowChromePicker(false);
    }
  };

  const handleBoxClick = () => {
    boxRef.current.style.border = '3px solid #FF9900';
    colorPickerFrameRef.current.style.visibility = 'visible';
  };

  const handleColorPickerIconClick = () => {
    setShowChromePicker(!showChromePicker);
  };

  const handleColorChange = (color) => {
    setBoxColor(color.hex);
  };

  return (
    <div className="screen2">
      <div className="steps-wrapper">
        <div className="step1frame">
          <div className="step1" id="Step1Btn" onClick={handleStep1Click}>
            STEP1. 테마 정보
          </div>
        </div>
        <div className="step2frame">
          <div className="step2">STEP2. 테마 제작</div>
        </div>
        <div className="step3frame">
          <div className="step3">STEP3. 테마 다운</div>
        </div>
      </div>
      <div className="thumbnail-wrapper">
        <div className="thumbnail">썸네일</div>
      </div>
      <div className="pw-wrapper">
        <div className="pw">비밀번호</div>
      </div>
      <div className="friendlist-wrapper">
        <div className="friendlist">친구 목록</div>
      </div>
      <div className="chattingroom-wrapper">
        <div className="chattingroom">채팅방</div>
      </div>
      <div className="tapbar-wrapper">
        <div className="tapbar">탭바</div>
      </div>
      <div onClick={handleFrameClick} className="bottomframe">
        <div ref={colorPickerFrameRef} className="color-picker-frame">
          <img onClick={handleColorPickerIconClick} alt='색상 선택' src='color-picker.png' className="color-picker-icon" />
          {showChromePicker &&
            <ChromePicker
              ref={ChromePickerRef}
              color={boxColor}
              onChange={handleColorChange}
            />}
        </div>
        {/* 클릭하면 색상 선택기 표시 */}
        <div ref={boxRef} onClick={handleBoxClick} style={{backgroundColor: boxColor}} className="bottombox" />
        <div className="backbtnframe">
          <div className="text-wrapper-2">이전</div>
        </div>
        <div className="nextbtnframe">
          <div className="text-wrapper-2">다음</div>
        </div>
      </div>
      <div className="notification-wrapper">
        <div className="notification">알림창</div>
      </div>
      <div className="leftbox">
        <div className="shape-icon">
          <div className="shapeiconframe">도형</div>
          <img className="shapeicon" alt="shapeicon" src="shapeicon.png" />
        </div>
        <div className="basic-icon">
          <div className="basiciconframe">기본 아이콘</div>
          <img className="basicicon" alt="basicicon" src="basicicon.png" />
        </div>
        <div className="text-icon">
          <div className="texticonframe">텍스트</div>
          <img className="texticon" alt="texticon" src="texticon.png" />
        </div>
        <div className="mystorage-icon">
          <div className="mystorageiconframe">내 보관함</div>
          <img className="mystorageicon" alt="mystorageicon" src="mystorageicon.png" />
        </div>
      </div>
    </div>
  );
};

export default ThemeMakestep2Page;
