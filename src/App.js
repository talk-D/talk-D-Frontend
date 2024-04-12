import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
