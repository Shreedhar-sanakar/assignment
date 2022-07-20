import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/signup" />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
