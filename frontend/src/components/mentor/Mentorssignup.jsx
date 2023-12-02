import React from 'react'
import {changeName,changePassword,} from '../../feautures/mentorSlice/mentorSignupSlice'
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
          password: mentorsignup.value.password,
      }
      console.log(datas, "mentor nta data aaa ");

      axiosInstance.post('mentorsignup/', datas)
          .then((res) => {
            const mentorId = res.data.mentor_id;
            
              console.log('Mentor ID:', mentorId);
              console.log(res,"response from BACKEND");
              if (res.data.message === "success") {
                  console.log(res.data.message)
                  navigate('../mentoronboard',{ state: { mentorId } });
              }
          })
  }
  return (
    <div>
        <h1>mentorSignup</h1>
                <input type="text" placeholder='Name' onChange={(e) => dispatch(changeName(e.target.value))} /><br />
                <input type="password" placeholder='password' onChange={(e) => dispatch(changePassword(e.target.value))}/>
                <button onClick={mentorsignupSubmit}>mentor Sign Up </button>
                </div>
  )
}
export default Mentorssignup