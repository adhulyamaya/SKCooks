import React from 'react'
import {changeName,changeEmail,changePassword,changeBio,changeExpertise,changeExperience,changeIs_approved} from '../../feautures/mentorSlice/mentorSignupSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';

const Mentorssignup= () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mentorsignup = useSelector((state) => state.mentorsignup);

    const mentorsignupSubmit = () => {
      const datas = {
          name: mentorsignup.value.name,
          email: mentorsignup.value.email,
          password: mentorsignup.value.password,
          bio: mentorsignup.value.bio,
          expertise: mentorsignup.value.expertise,
          experience: mentorsignup.value.experience,
          is_approved: mentorsignup.value.is_approved,
      }
      console.log(datas, "mentor nta data aaa ");

      axiosInstance.post('mentorsignup/', datas)
          .then((res) => {
              console.log(res,"mayammmmmmmmmmmmmmmeeeeeeeeee");
              if (res.data.message === "success") {
                console.log(res.data.message)
                  navigate('../mentorlogin');
              }
          })
  }
  return (
    <div>
        <h1>mentorSignup</h1>
                <input type="text" placeholder='Name' onChange={(e) => dispatch(changeName(e.target.value))} /><br />
                <input type="text" placeholder='Email' onChange={(e) => dispatch(changeEmail(e.target.value))} /><br />
                <input type="text" placeholder='bio' onChange={(e) => dispatch(changeBio(e.target.value))} /><br />
                <input type="text" placeholder='expertise' onChange={(e) => dispatch(changeExpertise(e.target.value))} /><br />
                <input type="text" placeholder='experience' onChange={(e) => dispatch(changeExperience(e.target.value))} /><br />
               <input type="password" placeholder='password' onChange={(e) => dispatch(changePassword(e.target.value))}/>
               <input type="text" placeholder='verify' onChange={(e) => dispatch(changeIs_approved(e.target.value))}/>
                <button onClick={mentorsignupSubmit}>mentor Sign Up </button>
                </div>
  )
}


export default Mentorssignup