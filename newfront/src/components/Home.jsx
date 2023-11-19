import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  const logoutSubmit = ()=>{
    localStorage.removeItem("userDetails")
    localStorage.removeItem("accessToken")
    navigate('../login')
  }

  const profileSubmit = ()=>{
    navigate('../user-profile')
  }
  
  return (
    <>
    <br />
    <br />
    <button onClick={logoutSubmit}>Logout</button>
    <button onClick={profileSubmit}>got to UserProfile</button>
    </>
  )
}
export default Home

