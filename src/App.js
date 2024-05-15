import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Community from './pages/Community';
import Community1 from './pages/Community1';
import Community2 from './pages/Community2';
import Step1 from './pages/Step1';
import ThemeMakestep2 from './pages/ThemeMakestep2';
import MyPage from './pages/MyPage';
import MyPage2 from './pages/MyPage2';
import MyPage3 from './pages/MyPage3';

function App() {
  // Header 컴포넌트 내에서 사용할 클릭 핸들러 함수들 정의
  const handleThemeMakeClick = () => {
    window.location.href = "thememakestep2";
  };

  const handleViewthemeClick = () => {
    window.location.href = "viewtheme";
  };

  const handleMyStorageClick = () => {
    window.location.href = "mystorage";
  };

  const handleCommunityClick = () => {
    window.location.href = "community";
  };

  const handleMainClick = () => {
    window.location.href = "";
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          handleThemeMakeClick={handleThemeMakeClick}
          handleViewthemeClick={handleViewthemeClick}
          handleMyStorageClick={handleMyStorageClick}
          handleCommunityClick={handleCommunityClick}
          handleMainClick={handleMainClick}
        />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main2' element={<Main2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community1' element={<Community1 />} />
          <Route path='/community2' element={<Community2 />} />
          <Route path='/step1' element={<Step1 />} />
          <Route path='/thememakestep2' element={<ThemeMakestep2 />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/mypage2' element={<MyPage2 />} />
          <Route path='/mypage3' element={<MyPage3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
