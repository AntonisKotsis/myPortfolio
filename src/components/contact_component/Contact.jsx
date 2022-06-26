import React from 'react';
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container ">
        <div className="contact_options">
          {/* Email contact button */}
          <article className='contact_option'>
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>fakemail@mymail.com</h5>
            <a href="mailto:fakemail@mymail.com">Send me a mail</a>
          </article>
          {/* Messenger contact button */}
          <article className='contact_option'>
            <RiMessengerLine className='contact_option_icon' />
            <h4>Messenger</h4>
            <h5>fakeAccount</h5>
            <a href="https://facebook.com" target='_blank'>Send me a message</a>
          </article>
          {/* Whatsapp contact button */}
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456" target='_blank'>Send me a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" placeholder='Message' rows="7" required></textarea>
          <button className='btn btn-primary' type='submit'>Send</button>
        </form>
      </div>


    </section>
  )
}

export default Contact;