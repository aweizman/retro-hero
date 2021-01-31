import React, { useState } from 'react'
import '../../App.css'
import '../../../node_modules/nes.css/css/nes.css'
function PlayerButton(){
    const [playing, togglePlaying] = useState(false);
    const handleClick = (event) => {
        togglePlaying(!playing);
    }
    return <button type = "button" onClick = {handleClick} className = 'nes-btn'>
        <div className = {playing ? 'pause' : 'play'}></div>
    </button>
}
export default PlayerButton;