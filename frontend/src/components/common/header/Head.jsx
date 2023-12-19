import React from "react"
import { useNavigate } from 'react-router-dom';


const Head = () => {

  const navigate = useNavigate(); 

  const logoutSubmit = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('accessToken');
    navigate('../login');
  };

  const profileSubmit = () => {
    navigate('../user-profile');
  };


  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <h1 style={{ color: 'darkgreen' }}>S <span style={{ color: 'red' }}>K &nbsp;</span><span style={{ color: 'black' }}>Cooks</span></h1>
            <span style={{ color: 'grey' }}>ONLINE CULINARY EDUCATION & LEARNING</span>
          </div>

          <div>
          <button style={{ color: 'black' , backgroundColor: 'transparent' }} onClick={profileSubmit}>Profile</button>
            <button style={{ color: 'black',backgroundColor: 'transparent' }} onClick={logoutSubmit}>Logout</button>

          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
