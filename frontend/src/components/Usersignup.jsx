import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { changeUsername, changeName, changeEmail, changePhone, changePassword } from "../feautures/signupSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';
import './Usersignup.css'; // Import a separate CSS file for styling
import logo from '../assets/sk logo.png';

const Usersignup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = useSelector((state) => state.signup);

    const signupSubmit = () => {
        const datas = {
            username: signup.value.username,
            name: signup.value.name,
            email: signup.value.email,
            phone: signup.value.phone,
            password: signup.value.password,
        };

        axiosInstance.post('signup/', datas)
            .then((res) => {
                console.log(res);
                if (res.data.message === "success") {
                    navigate('../login');
                }
            });
    };

    return (
        <div className="background-container">
          <div className="signup-container">
            <img src={logo} alt="Logo" className="signup-logo" />
            <div className="signup-form">
              <p>Are you a mentor {'>>>'}<Link to="/mentorlogin"> Login here</Link></p  >
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => dispatch(changeUsername(e.target.value))}
              />
              <br />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => dispatch(changeName(e.target.value))}
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => dispatch(changeEmail(e.target.value))}
              />
              <br />
              <input
                type="number"
                placeholder="Phone"
                onChange={(e) => dispatch(changePhone(e.target.value))}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => dispatch(changePassword(e.target.value))}
              />
              <br />
              <button className="signup-button" onClick={signupSubmit}>
                Signup
              </button>
              <br />
              <p>
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      );
};

export default Usersignup;
