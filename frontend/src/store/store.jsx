import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../feautures/loginslice';
import signupReducer from '../feautures/signupSlice';
import adminloginReducer from '../feautures/adminSlice';
import createUserReducer from '../feautures/createSlice';
import editUserReducer from '../feautures/editSlice'
import mentorSignupReducer from "../feautures/mentorSlice/mentorSignupSlice"

const store=configureStore({
    reducer:{
      login:loginReducer,
      signup:signupReducer,
      adminlogin:adminloginReducer,
      createuser:createUserReducer,
      edituser:editUserReducer,
      mentorsignup:mentorSignupReducer
      
    },
  });

export default store