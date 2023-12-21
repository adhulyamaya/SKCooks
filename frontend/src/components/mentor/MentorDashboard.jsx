import React from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function MentorDashboard() {
    const navigate = useNavigate()

    const logoutSubmit=()=>{
        Cookies.remove("userDetails")
        Cookies.remove("accessToken")
        navigate('../mentorlogin')
    }
    const classmanagement=()=>{
        navigate('../classmanagement')

    }
  return (
    <div>WELCOME MENTOR

        <button onClick={classmanagement}>classmanagement</button>
        <button onClick={logoutSubmit}>logout</button>
    </div>
  )
}

export default MentorDashboard


