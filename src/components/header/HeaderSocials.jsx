import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linked.com" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com" target="_blank"><FaGithub /></a>
    <a href="https://dribbbe.com" target="_blank"><IoLogoDribbble /></a>

    </div>
  )
}

export default HeaderSocials