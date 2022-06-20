import React from "react";
import './terminal.css'
import Draggable from 'react-draggable'
import Actionbar from "./Actionbar";
import TerminalInput from "./TerminalInput";



const Terminal = () => {
    return (
        <Draggable className='centered' >
            <div className="terminal centered">
               <Actionbar/>
               <TerminalInput/>
            </div>
        </Draggable>
    )
}

export default Terminal