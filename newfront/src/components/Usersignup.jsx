import React from 'react';
import { changeUsername, changeName, changeEmail, changePhone, changeImage, changePassword } from "../feautures/signupSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';

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
            image: signup.value.image,
            password: signup.value.password,
        }
        console.log(datas, "ITHAN SANAMmmmm");

        axiosInstance.post('signup/', datas)
            .then((res) => {
                console.log(res);
                if (res.data.message === "success") {
                    navigate('../login');
                }
            })
    }

    return (
        <div style={{
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage:"",
        }}>
            <div style={{
                backgroundColor: "#76b852",
                margin: '20px auto',
                padding: '60px',
                border: '6px solid #ccc',
                borderRadius: '5px',
                width: '50%',
                height:'40%'
            }}>
                <input type="text" placeholder='Username' onChange={(e) => dispatch(changeUsername(e.target.value))} /><br />
                <input type="text" placeholder='Name' onChange={(e) => dispatch(changeName(e.target.value))} /><br />
                <input type="text" placeholder='Email' onChange={(e) => dispatch(changeEmail(e.target.value))} /><br />
                <input type="number" placeholder='phone' onChange={(e) => dispatch(changePhone(e.target.value))} /><br />
                <input type="text" placeholder='Image' onChange={(e) => dispatch(changeImage(e.target.value))} /><br />
                <input type="password" placeholder='password' onChange={(e) => dispatch(changePassword(e.target.value))} /><br />
                <button style={{
                    backgroundColor: 'black',
                    color: '#fff',
                    border: 'none',
                    paddingRight:"30",
                    padding: '10px 20px',
                    cursor: 'pointer'
                }} onClick={signupSubmit}>
                    Signup
                </button>
            </div>
        </div>
    )
}

export default Usersignup;

   