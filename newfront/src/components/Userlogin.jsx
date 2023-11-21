import React from 'react'
import {changePassword,changeUsername} from "../feautures/loginslice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';




const Userlogin = () => {
    const dispatch=useDispatch()
    const login=useSelector((state)=>state.login)
    const navigate =useNavigate()

    const loginSubmit=()=>{
      const datas={
        username:login.value.username,
        password:login.value.password
      }
      axiosInstance.post('login/',datas)
      .then((res)=>{
        console.log(res.data)
        const tokens = {
          access : res.data.access,
          refresh : res.data.refresh
        }
        localStorage.setItem("userDetails",JSON.stringify(res.data.userdata))
        localStorage.setItem("accessToken",JSON.stringify(res.data.access))
        if (res.data.message == "success")
        navigate('../home')

      })
    }
   


  return (
    <div>
        <input  placeholder='username' onChange={(e)=>dispatch(changeUsername(e.target.value))}/>    
        <input placeholder='password' type="password" onChange={(e)=>dispatch(changePassword(e.target.value))} />
       <button onClick={loginSubmit}>Login</button>
       


      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded);
          console.log(credentialResponse);

          
          axiosInstance.post('google-login/', {
            googleToken: credentialResponseDecoded,
          })
            .then((res) => {
              console.log(res.data,"weeeeeeeee")
              const tokens = {
                access: res.data.access,
                refresh: res.data.refresh,
              };
              localStorage.setItem('userDetails', JSON.stringify(res.data.userdata));
              localStorage.setItem('accessToken', JSON.stringify(res.data.access));
              if (res.data.message === 'success') {
                navigate('../home');
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

      
      
    </div>
  )
}

export default Userlogin

