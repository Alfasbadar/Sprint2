import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import Items from '../Items/Items';
import Billing from '../Billing/Billing';
import Analytics from '../Analytics/Analytics';
import About from '../About/About';

const Home = ({ user }) => {
  console.log(user);
  return (
    <div className="home-container">
      <div className="action-bar">
        <div className="company-name">Company Name</div>
        <div className="action-buttons">
          <div className="profile-button">Profile</div>
          <div className="logout-button">Logout</div>
        </div>
      </div>
      <div className="content">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="body">
          <Routes>
            <Route path="/" element={<h2>Welcome, {user.email}</h2>} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/items" element={<Items />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
