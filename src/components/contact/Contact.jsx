import React from 'react'
import './contact.css'
import { TfiEmail } from "react-icons/tfi";
import { RiMessengerLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
   <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
      <TfiEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5> gunaguna6142@gmail.com</h5>
        <a href="mailto:gunaguna@gmail.com" target="_blank"> Send a message</a>
      </article>
      <article className="contact__option">
      <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5> Guna</h5>
        <a href="mailto:gunaguna6142@gmail.com" target="_blank"> Send a message</a>
      </article>
      <article className="contact__option">
      <SiWhatsapp className='contact__option-icon' />
        <h4>WhatsApp</h4>
        <h5>+91 6382742557</h5>
        <a href="https://wa.me/6382742557?" target="_blank"> Send a message</a>
      </article>

    </div>
    {/* END OF OPTION */}
    <form action="">
      <input type="text" name='name' placeholder='Your Full Nume ' required/>
      <input type="email" name='email' placeholder='Your Email ' required/>
      <textarea name="massage"  rows="7" placeholder='You Message'></textarea>
      <button type='submit' className='btn btn-primary'> Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact