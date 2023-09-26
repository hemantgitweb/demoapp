import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='navbar_ul'>
            <li><Link to="home" >Home</Link></li>
            <li><Link to="about-us" >About us</Link></li>
            <li><Link to="contact-us" >Contact us</Link></li>
            <li><Link to="blogs" >Blogs</Link></li>
        </ul>
    </div>
  )
}

export default Navbar