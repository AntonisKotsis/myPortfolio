import React from 'react'
import CV from '../../assets/Antonis_Mitos_Kotsis_-_Software_Engineer.pdf'

function ContactButtons() {
  return (
    <div className='contact-buttons'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default ContactButtons