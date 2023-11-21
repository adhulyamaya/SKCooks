import React from 'react'

function mentorSignup() {
  return (
    <div>
        <h1>mentorSignup</h1>
                <input type="text" placeholder='Name' onChange={(e) => dispatch(changeName(e.target.value))} /><br />
                <input type="text" placeholder='Email' onChange={(e) => dispatch(changeEmail(e.target.value))} /><br />
                <input type="text" placeholder='bio' onChange={(e) => dispatch(changeBio(e.target.value))} /><br />
                <input type="text" placeholder='expertise' onChange={(e) => dispatch(changeExpertise(e.target.value))} /><br />
                <input type="text" placeholder='experience' onChange={(e) => dispatch(changeExperience(e.target.value))} /><br />
               <input type="password" placeholder='password' onChange={(e) => dispatch(changePassword(e.target.value))}/>
                <button type="submit">Sign Up</button>
                </div>
  )
}

export default mentorSignup