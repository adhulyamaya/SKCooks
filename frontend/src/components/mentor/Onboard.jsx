import React from 'react'
import {changeFullname,changeEmail,changeBio,changeExpertise,changeExperience,changeAge,changeImage,changeAddress,changeCertificate} from "../../feautures/mentorSlice/mentorOnboardSlice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';
import { useLocation } from 'react-router-dom';

const Onboard= () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mentoronboard = useSelector((state) => state.mentoronboard);
  const location = useLocation();
  const mentorId = location.state?.mentorId || null;
  // const { mentorId } = useParams();
  // console.log (mentorId)
    
  const mentorSubmit = () => {
    const datas = {
        mentor_id: mentorId,
        fullname:mentoronboard.value.fullname,
        email: mentoronboard.value.email,
        bio: mentoronboard.value.bio,
        expertise: mentoronboard.value.expertise,
        experience: mentoronboard.value.experience,
        age: mentoronboard.value.age,
        image: mentoronboard.value.image,
        address: mentoronboard.value.address,
        certificate: mentoronboard.value.certificate,
    }
    console.log(datas, "mentor onboardddd details including id");

    axiosInstance.post('mentoronboard/', datas)
        .then((res) => {
            console.log(res,"yeahhhhhhh");
            if (res.data.message === "success") {
              console.log(res.data.message)
                navigate('../mentorlogin');
            }
        })
}

  return (
    <div>Onboard
                <input type="text" placeholder='full name' onChange={(e) => dispatch(changeFullname(e.target.value))} /><br />
                <input type="text" placeholder='email' onChange={(e) => dispatch(changeEmail(e.target.value))}/>
                <input type="text" placeholder='bio' onChange={(e) => dispatch(changeBio(e.target.value))} /><br />
                <input type="text" placeholder='expertise' onChange={(e) => dispatch(changeExpertise(e.target.value))} /><br />
                <input type="text" placeholder='experience' onChange={(e) => dispatch(changeExperience(e.target.value))} /><br />
                <input type="text" placeholder='age' onChange={(e) => dispatch(changeAge(e.target.value))} /><br />
                <input type="text" placeholder='image' onChange={(e) => dispatch(changeImage(e.target.value))} /><br />
                <input type="text" placeholder='address' onChange={(e) => dispatch(changeAddress(e.target.value))} /><br />
                <input type="text" placeholder='certificate' onChange={(e) => dispatch(changeCertificate(e.target.value))}/>
                <button onClick={mentorSubmit}>mentor Sign Up </button>
    </div>

  )
}
export default Onboard