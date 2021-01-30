import React, {useState} from 'react';
import _ from 'lodash';
import Key from '../Key/Key.js'
import '../../App.css';
import NOTES from '../global/notes.js'

class Keyboard extends React.Component {
    constructor(props) {    // Keyboard constructor
        super(props);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {    // Maps each note to a key
            return (
                <Key
                    key={index}
                    note={note}
                />
            );
        });

        return(
            <div className="keyboard">
                {keys}
            </div>
        );
    }
}

export default Keyboard;