import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { changePassword, changeUsername } from "../feautures/loginslice";
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Userlogin.css'; // Import the CSS file for styling
import Cookies from 'js-cookie';

const Userlogin = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const navigate = useNavigate();

  const loginSubmit = () => {
    const datas = {
      username: login.value.username,
      password: login.value.password
    };

    axiosInstance.post('login/', datas)
      .then((res) => {
        console.log(res.data);
        const tokens = {
          access: res.data.access,
          refresh: res.data.refresh
        };
        Cookies.set("userDetails", JSON.stringify(res.data.userdata));
        Cookies.set("accessToken", JSON.stringify(res.data.access));
        if (res.data.message === "success")
          navigate('../');
      });
  };

  return (
    <div className="background-container">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <input placeholder='username' onChange={(e) => dispatch(changeUsername(e.target.value))} />
          <input placeholder='password' type="password" onChange={(e) => dispatch(changePassword(e.target.value))} />
          <button className="login-button" onClick={loginSubmit}>
            Login
          </button>

          <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialResponseDecoded);
              console.log(credentialResponse);

              axiosInstance.post('google-login/', {
                googleToken: credentialResponseDecoded,
              })
                .then((res) => {
                  console.log(res.data, "weeeeeeeee");
                  const tokens = {
                    access: res.data.access,
                    refresh: res.data.refresh,
                  };
                  localStorage.setItem('userDetails', JSON.stringify(res.data.userdata));
                  localStorage.setItem('accessToken', JSON.stringify(res.data.access));
                  if (res.data.message === 'success') {
                    navigate('../');
                  }
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          </div><br />
          <p>Already have an account? <Link to="/signup">SignUp here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
