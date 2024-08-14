import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/User/UserDashboard';
import Login from './components/LoginPopup/Login';
import Signup from './components/LoginPopup/Signup';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import First from './pages/first/first';

AOS.init();

const App = () => {
  return (
    
      <div className='loosu'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/first" element={<First />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard/*" element={<AdminDashboard/>}/>
          <Route path="/user-dashboard/*" element={<UserDashboard/>}/>
          <Route path="/footer" element={<Footer />}/>
        </Routes>
      </div>
  );
};

export default App;
 