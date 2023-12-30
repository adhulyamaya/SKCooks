import React from 'react'
import MentorHeaders from "./MentorHeader";
import { useNavigate,Link } from 'react-router-dom';

function ClassManagement() {
  const navigate=useNavigate()

  const addClassSubmit=()=>{
    navigate('../addclass')
  }







  return (
    <div>
      <MentorHeaders/>
      ClassManagement
        <>
        <Link to="/addclass" className='btn btn-success my-3'>Create+</Link>
    {/* <button >ADD</button> */}
    {/* <button>EDIT</button>
    <button>DELETE</button> */}
    </>
    </div>
  )
}
export default ClassManagement