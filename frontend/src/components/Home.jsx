// Home.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/sk logo.png';
import logoz from '../assets/sk logo.png';
import logos from '../assets/Screenshot 2023-11-21 153657.png';
import logor from '../assets/new .png';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [headerText, setHeaderText] = useState('aspiring chefs');

  const logoutSubmit = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('accessToken');
    navigate('../login');
  };

  const profileSubmit = () => {
    navigate('../user-profile');
  };

  useEffect(() => {
    let count = 0;
    const texts = ['Culinary Teams', 'Home Cooks', 'Professionals'];

    const changeHeaderText = () => {
      setHeaderText(<span style={{ color: 'green' }}>{texts[count]}</span>);
      count = (count + 1) % texts.length;
    };

    const intervalId = setInterval(changeHeaderText, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <header>
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1 style={{ color: 'black' }}>SK Cooks trains {headerText} <br/> Offering courses in classic and next-generation technique <br/> Join our Live Class</h1>
          <div className="header-links">
            <button style={{ color: 'black' }}>Course</button>
            <button style={{ color: 'black' }} onClick={profileSubmit}>Profile</button>
            <button style={{ color: 'black' }} onClick={logoutSubmit}>Logout</button>
          </div>
        </div>
      </header>

      <main>
        <section className="home-section">
          <h2>Is SK Cooks For You ?</h2>
          <img src={logos} alt="Image for Section 1" className="section-image" />
          {/* Add content for Section 1 */}
        </section>

        <section className="home-section">
          <h2>Trust Us</h2>
          <img src={logor} className="section-images" />
          {/* Add content for Section 2 */}
        </section>
      </main>

      <footer className="footer">
        
      <div className="left-content">
        {/* Add your left side contents here */}
        <p>Courses</p>
        <p>Tracking</p>
      </div>

      <div className="center-content">
        {/* Add your logo here */}
        <img src={logoz} alt="Logo" />
      </div>

      <div className="right-content">
        {/* Add your right side contents here */}
        <p>Contact Us</p>
        <p>Location</p>
      </div>
    </footer>
    </div>
  );
}

export default Home;
