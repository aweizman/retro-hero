import React from 'react'
import '../../../node_modules/nes.css/css/nes.css'
function VolumeBar(props) {
    var data = props.data;
    return <progress className = 'nes-progress' value = "data"></progress>
}

export default VolumeBar;