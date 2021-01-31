import React, {useState} from 'react';
import _ from 'lodash';
import Key from './Key.js'
import '../../App.css';
import {NOTES} from '../global/notes.js';
import {KEY_TO_NOTE} from '../global/notes.js';

class Keyboard extends React.Component {
    constructor(props) {    // Keyboard constructor
        super(props);
        this.state = {
            keysPressed: [],
        };
    }

    playNote = (note) => {
        if(!_.isEmpty(note)) {  // Ensure pressing a key
            const noteSound = new Audio(document.getElementById(note).src);
            noteSound.play();
        }
    }

    handleKeyDown = (event) => {
        if(event.repeat) {  // Check if repeating
            return;
        }
        const key = event.key;
        const newlyPressedKeys = [...this.state.keysPressed];
        if(!newlyPressedKeys.includes(key)) {   // Make sure that its not already pressed
            newlyPressedKeys.push(key);
        }
        this.setState({
            keysPressed: newlyPressedKeys,
        })
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.keysPressed.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({   // Get index of pressed key
                keysPressed: state.keysPressed.splice(index, 1) // Remove the key
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {    // Maps each note to a key
            return (
                <Key
                    key={index}
                    note={note}
                    keysPressed = {this.state.keysPressed}
                />
            );
        });

        const mp3Files = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id={note}
                    key={index}
                    src={`../../../sounds/${note}.mp3`}
                    />
            );
        });
        

        return(
            <div className="keyboard">
                {keys}
                <div>
                {mp3Files}
                </div>
            </div>
        );
    }
}

export default Keyboard;