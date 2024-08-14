import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/admin-dashboard/profile');
  };
  
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img className='logo' src={assets.logo} alt="Logo" />
        
        <h1>Admin Panel</h1>
      </div>
      <div className='profileicon' onClick={handleProfileClick}>
      <img className='profile' src={assets.profile_icon} alt="Profile" />
    </div>
    </div>
  )
}

export default AdminNavbar
