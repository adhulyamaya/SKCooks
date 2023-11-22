import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


function AdminHome(){
    const navigate=useNavigate()

    const logoutSubmit=()=>{
        localStorage.removeItem("adminDetails")
        localStorage.removeItem("accessToken")
        navigate('../adminlogin')
    }
    const profileSubmit=()=>{
        navigate('../admin-profile')

    }
    return(
        <>
        <button onClick={logoutSubmit}>Logout </button>
        <button onClick={profileSubmit}>admin profile</button>
        </>
    )
}
export default AdminHome