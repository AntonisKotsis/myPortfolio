import React from 'react'
import ContactButtons from './ContactButtons';
import SocialsComponent from './SocialsComponent';

import './header.css'
import ProfPic from '../../assets/sample-man.png'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1><span className='light-text-span'>I am </span>Antonis Kotsis</h1>
        <h5 className='text-light'>a Software Engineer</h5>
        <ContactButtons />
        <SocialsComponent />

        
        <div className='profile-image'>
          <img src={ProfPic} alt="profile-pic" />
        </div>

      </div>


    </header>

  )
}

export default Header;