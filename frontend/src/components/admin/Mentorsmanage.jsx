import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mentoraxios from '../../axios/mentoraxios'
import axiosIns from '../../axios/adminaxios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap'

const Mentorsmanage = () => {
   const navigate = useNavigate()
   const homeSubmit=()=>{
    navigate('../home')  
      
} 
const [userdata,setUserdata]=useState([])

useEffect(()=>{
  axiosIns.get('admin-mentor-list/')
  .then((res)=>{
    console.log(res.data);
    setUserdata(res.data.userdata)
  })

},[])

  return (
    <div className='container'>
      <h1>MENTORS</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}> 
        <thead>
            <tr>
                <th>FULLNAME</th> 
                <th>EMAIL</th> 
                <th>EXPERIENCE</th>
                <th>EXPERTISE</th> 
                <th>ADDRESS</th> 
                <th>IMAGE</th>
                <th>CERTIFICATE</th> 
                <th>Approval status</th>                
            </tr>
           {userdata.map((item)=>(
           <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.fullname} </td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.image}</td>
              <td>{item.certificate}</td>
            </tr>
            ))}
            </thead>
      </table>

      <button onClick={homeSubmit}>back to home</button>
    </div>
  )
}

export default Mentorsmanage