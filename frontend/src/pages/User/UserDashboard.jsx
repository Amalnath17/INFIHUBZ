import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import LoginPopup from '../../components/LoginPopup/LoginPopup';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Footer from '../../components/Footer/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Navbar from '../../components/Navbar/Navbar';


const UserDashboard = () => {
    const [showLogin, setShowLogin] = useState(false);
    const location = useLocation();
    const skipFooter = showLogin || location.pathname === '/cart';

    return (
        <AuthProvider>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <Navbar setShowLogin={setShowLogin} />
            <div className='user-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                </Routes>
                {!skipFooter && <Footer />}
                <ScrollToTopButton />
            </div>
        </AuthProvider>
    );
};

export default UserDashboard;
