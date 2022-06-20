import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeItem,setActiveItem]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveItem('#')} className={activeItem==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveItem('#about')} className={activeItem==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveItem('#experience')} className={activeItem==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActiveItem('#portfolio')} className={activeItem==='#portfolio' ? 'active' : ''}><MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={()=>setActiveItem('#contact')} className={activeItem==='#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav;