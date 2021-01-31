import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import '../../../node_modules/nes.css/css/nes.css'

function BeatBoxKey() {
    const [clicked, toggleClicked] = useState(false);
    const handleClick = (event) => {
        toggleClicked(!clicked);
    }
    return <button type = "button" onClick = {handleClick} className = {'grid-item nes-btn' + (clicked ? ' is-success' : '')}></button>
}

export default BeatBoxKey;