import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


function AdminHome(){
    const navigate=useNavigate()

    const logoutSubmit=()=>{
        localStorage.removeItem("adminDetails")
        localStorage.removeItem("accessToken")
        navigate('../adminlogin')
    }
    const usersSubmit=()=>{
        navigate('../admin-profile')

    }
    const mentorSubmit=()=>{
        navigate('../mentor-list')

    }
    return(
        <>
        <button onClick={logoutSubmit}>Logout </button>
        <br />
        <button onClick={usersSubmit}>USERS</button>
        <br />
        <button onClick={profileSubmit}>MENTORS</button>
        </>
    )
}
export default AdminHome