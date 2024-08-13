import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active': ''}><FaHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active': ''}><FaUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experienc')}className={activeNav === '#experienc' ? 'active': ''}><IoBookOutline /></a>
      <a href="#services" onClick={() => setActiveNav('#service')}className={activeNav === '#service' ? 'active': ''}><RiServiceLine /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active': ''}><BiMessageDetail /> </a>
    </nav>
  )
}

export default Nav