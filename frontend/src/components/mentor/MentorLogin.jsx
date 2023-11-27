import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';

const Userlogin = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginSubmit = () => {
    const data = {
      name: name,
      password: password
    };

    axiosInstance.post('mentorlogin/', data)
      .then((res) => {
        console.log(res.data);
        const tokens = {
          access: res.data.access,
          refresh: res.data.refresh
        };
        localStorage.setItem("userDetails", JSON.stringify(res.data.userdata));
        localStorage.setItem("accessToken", JSON.stringify(res.data.access));
        if (res.data.message === "success")
          navigate('../home');
      });
  };

  return (
    <div className="background-container">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <input placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
          <input placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="login-button" onClick={loginSubmit}>
            Login
          </button>
          {/* <p>Already have an account? <Link to="/">SignUp here</Link></p> */}
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
