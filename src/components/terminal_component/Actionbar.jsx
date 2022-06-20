import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdMinimize } from 'react-icons/md'
import { VscChromeMaximize } from 'react-icons/vsc'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './terminal.css'
const Actionbar = () => {
    return (
        <div className="actionBar">

            <div className="left_icons">
                <a href=""><GiHamburgerMenu /></a>
            </div>

            <div className="right_icons">
                <a href=""><MdMinimize /></a>
                <a href=""><VscChromeMaximize /></a>
                <a href=""><AiOutlineCloseCircle /></a>
            </div>

        </div>
    )
}

export default Actionbar