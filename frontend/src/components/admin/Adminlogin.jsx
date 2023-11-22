import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {changeAdminname,changeAdminPassword}from "../../feautures/adminSlice"
import axiosInstance from '../../axios/adminaxios'

const Adminlogin = () => {
    const dispatch =useDispatch()
    const adminlogin=useSelector((state)=>state.adminlogin)
    const navigate =useNavigate()
    const loginSubmit=()=>{
        const datas ={
            username:adminlogin.value.username,
            password:adminlogin.value.password,
        }
        axiosInstance.post('adminlogin/',datas)
        .then((res)=>{
            console.log(res.data)
            const tokens={
                access:res.data.access,
                refresh:res.data.refresh
            }
            localStorage.setItem("adminDetails",JSON.stringify(res.data.userdata))
            localStorage.setItem("accessToken",JSON.stringify(res.data.access))
            if(res.data.message == "success"){
                navigate('../adminhome')
            }
           
        })
    } 
  return (
    <div>
        <input type="text" placeholder='adminname' onChange={(e)=>dispatch(changeAdminname(e.target.value))} />
        <input type="text" placeholder='password' onChange={(e)=>dispatch(changeAdminPassword(e.target.value))} />
        <button onClick={loginSubmit}>Login</button>
    </div>
  )
}

export default Adminlogin
