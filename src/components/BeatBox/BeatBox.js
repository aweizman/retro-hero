import React, {useState} from 'react';
import '../../App.css';
import '../../../node_modules/nes.css/css/nes.css'

const BeatBox = ({children}) => {

    let [responseObj, setResponseObj] = useState({});

    return (
        <div className="BeatBox-layout grid-container nes-container" style = {{padding: '5px 5px 5px 5px'}}>
            {children}
        </div>
    )

}

export default BeatBox;