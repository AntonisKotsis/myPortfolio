import React from 'react'
import './about.css'
import {BiAward} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'
import SAMPLE_IMG from '../../assets/1631375990116.jpeg'
import SUMMARY from './summary'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className=" container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={SAMPLE_IMG} alt="Sample" />
          </div>
        </div>

        <div className="about_content">
          <div className="cards">
            {/* Card for experience */}
            <article className="card">
              <BiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            {/* Card for Education */}
            <article className="card">
              <AiOutlineBook className='about_icon'/>
              <h5>Education</h5>
              <small>BSc & MSc </small><br/>
              <small> Software Engineer</small>
            </article>

            {/* Card for Projects */}
            <article className="card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>

          </div>

          <p>{SUMMARY}</p>
          <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About;