import React, {useState} from 'react';
import '../../App.css';

const BeatBox = ({children}) => {

    let [responseObj, setResponseObj] = useState({});

    return (
        <div className="BeatBox-layout grid-container">
            {children}
        </div>
    )

}

export default BeatBox;