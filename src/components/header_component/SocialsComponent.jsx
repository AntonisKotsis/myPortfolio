import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const SocialsComponent = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/antonis-kotsis-aa0814187" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/AntonisKotsis" target='_blank'><BsGithub/></a>
            {/* <a href="https://facebook.com" target='_blank'><BsFacebook/></a> */}
        </div>
    )
}

export default SocialsComponent