import React, { useState } from 'react'
import '../../App.css'
import '../../../node_modules/nes.css/css/nes.css'
function AdvanceButton(){
    const handleClick = (event) => {
    
    }
    return <button type = "button" onClick = {handleClick} className = 'nes-btn'>
        <div style = {{fontSize : '14px', fontWeight :'bolder', padding : '0,0,0,0'}}>&rarr;</div>
    </button>
}
export default AdvanceButton;