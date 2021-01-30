import React from 'react';
import _ from 'lodash';
import '../../App.css';

class Key extends React.Component {
    sharpNote = (note) => { // Check length of name, if longer than 2 it is sharp
        return note.length > 2;
    }

    render() {  
        let keyName = "key";    
        const sharpNote = this.sharpNote(this.props.note);  // Checks if sharp
        if(sharpNote) { // If sharp, adds sharp to name
            keyName += " sharp";
        }

        let key;
        if (sharpNote) {    // If sharp the new name will be key sharp, else it will just be key
            key = (<div className={keyName}/>);
        } else {
            key = (
                <div className={keyName}/>
            );
        }
        return key;
    }
}

export default Key;