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

        C4.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
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