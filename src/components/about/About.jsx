import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { ImFolderOpen } from "react-icons/im";
const About = () => {
  return (
    <section id='about'>
   <h5>Get to Know </h5>
   <h2> About Me</h2>
   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image"/>
      </div>

    </div>
     <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
          <h5>Course</h5>
          <small> Full stack developer</small>
     </article>

     <article className='about__card'>
        <ImFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small> 10+Completed</small>
     </article>
</div>
<p>
  Hello, I'm Gumasekaran ,a web developer and Actively Seeking full time Opportunities.Beyond work,you'll find me i am a quick learner
  ,adding a touch  of creativity to both my professional and personal life. 
</p>

     <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
   </div>


    </section>
  )
}

export default About