import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    name:"",
    email:"",
    password:"",
    bio:"",
    expertise:"",
    experience:"",
    is_approved:"",  
}

const mentorsignupSlice = createSlice(
    {
        name:"mentorsignup",
        initialState:{         
            value:INITITALSTATE
        },
        reducers:{
            changeName:(state,action)=>{
                state.value.name=action.payload
            },
            changeEmail:(state,action)=>{
                state.value.email=action.payload
            },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },
            changeBio:(state,action)=>{
                state.value.bio=action.payload
            },
            changeExpertise:(state,action)=>{
                state.value.expertise=action.payload
            },
            changeExperience:(state,action)=>{
                state.value.experience=action.payload
            },
            changeIs_approved:(state,action)=>{
                state.value.is_approved=action.payload
            },                    
        }        
    }
)

export const {changeName,changeEmail,changePassword,changeBio,changeExpertise,changeExperience,changeIs_approved} = mentorsignupSlice.actions
export default mentorsignupSlice.reducer