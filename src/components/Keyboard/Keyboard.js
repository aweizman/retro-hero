import React, {useState} from 'react';
import '../../App.css';
// Import the react-native-sound module
var Sound = require('react-native-sound');
 
// Enable playback in silence mode
Sound.setCategory('Playback');

const Keyboard = () => {

    let [responseObj, setResponseObj] = useState({});

    function playSound() {
        var C4 = new Sound('sounds/C-4.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
        });

    }

    return (
        <div className="Keyboard-layout">
            <Button
                title = "test button"
                onPress={() => playSound()} 
            />
        </div>
    )

}

export default Keyboard;