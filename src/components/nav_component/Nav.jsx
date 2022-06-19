import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><MdOutlineHomeRepairService/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav;