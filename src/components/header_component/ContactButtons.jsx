import React from 'react'
import CV from '../../assets/algorithms_certificate.pdf'

function ContactButtons() {
  return (
    <div className='contact-buttons'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default ContactButtons