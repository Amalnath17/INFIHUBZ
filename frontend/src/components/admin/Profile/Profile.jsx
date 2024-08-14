import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    custName: '',
    firstName: '',
    lastName: '',
    email: '',
    nickname: '',
    website: '',
    telePhone: '',
    phone: '',
    twitter: '',
    facebook: '',
    google: '',
    country: '',
    city: '',
    biographical: '',
    faceImage: '',
    licenseImage: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({ ...formData, [name]: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file); // This converts the file to a base64 string
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8088/chiefs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorResponse = await response.text(); // Get error response text for logging
        throw new Error(`Network response was not ok: ${response.status} - ${errorResponse}`);
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit} className='grid-content'>
        <div className="form-group">
          <label>Homie Name</label>
          <input type="text" name="custName" value={formData.custName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Nickname (Restaurant Name) *</label>
          <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input type="tel" name="telePhone" value={formData.telePhone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Facebook</label>
          <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Google +</label>
          <input type="text" name="google" value={formData.google} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Biographical Info</label>
          <textarea name="biographical" value={formData.biographical} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Picture with Clear Face</label>
          <input type="file" name="faceImage" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>ID Proof</label>
          <input type="file" name="licenseImage" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
