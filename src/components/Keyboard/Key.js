import React, {useState} from 'react';
import _ from 'lodash';
import '../../App.css';
import {NOTE_TO_KEY} from '../global/notes';

class Key extends React.Component {
    sharpNote = (note) => { // Check length of name, if longer than 2 it is sharp
        return note.length > 2;
    }
    keyPressed = (note, keysPressed) => {
        return _.includes(keysPressed, NOTE_TO_KEY[note]);
    }

    render() {  
        let keyName = "key";    
        const sharpNote = this.sharpNote(this.props.note);  // Checks if sharp
        const keyPressed = this.keyPressed(this.props.note, this.props.keysPressed);
        if(sharpNote) { // If sharp, adds sharp to name
            keyName += " sharp";
        }
        if(keyPressed) {
            keyName += " pressed";
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