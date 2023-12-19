import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to='/' style={{ color: 'black' }}>Home</Link>
            </li>
            <li>
              <Link to='/courses' style={{ color: 'black' }}>All Courses</Link>
            </li>
            <li>
              <Link to='/about' style={{ color: 'black' }}>About</Link>
            </li>
            <li>
              <Link to='/team' style={{ color: 'black' }}>Team</Link>
            </li>
            <li>
              <Link to='/pricing' style={{ color: 'black' }}>Pricing</Link>
            </li>
            <li>
              <Link to='/journal' style={{ color: 'black' }}>Journal</Link>
            </li>
            <li>
              <Link to='/contact' style={{ color: 'black' }}>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
