import React, {useState} from 'react';
import '../../App.css';

const Options = ({children}) => {

    let [responseObj, setResponseObj] = useState({});

    return (
        <div className="Options-menu">
            {children}
        </div>        
    )

}

export default Options;