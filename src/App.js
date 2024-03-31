import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Community from './pages/Community';
import Community1 from './pages/Community1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community1' element={<Community1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
