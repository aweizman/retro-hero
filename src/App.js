import './App.css';
import BeatBox from "./components/BeatBox/BeatBox";
import BeatBoxKey from './components/BeatBox/BeatBoxKey'
import Keyboard from "./components/Keyboard/Keyboard";
import Options from "./components/Options/Options";
import PlayerButton from "./components/Options/PlayerButton"
import VolumeBar from './components/Options/VolumeBar'
import AdvanceButton from './components/Options/AdvanceButton'
import RevertButton from './components/Options/RevertButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Retro Hero
        </h1>
      </header>

      <main>
        <p>Preserving retro games through music! Use your keyboard to play the 8-bit piano, middle C starts on 'g'</p>
        <div>
          <div style={{ display: 'flex', height: 200}}>
            <BeatBox>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>
              <BeatBoxKey></BeatBoxKey>

       
            </BeatBox>            

            <Options>
              <RevertButton/>
              <PlayerButton/>
              <AdvanceButton/>
            </Options>

          </div>
          <br></br>
          <div style={{display: 'flex', height: 813}}>
            <Keyboard/>
          </div>          
        </div>
        


      </main>
      
      <footer>
        <p>Created by: Adam Weizman, Quinlan Daily, Xuanting Liu, & Zach Curran</p>
        <a href = "https://github.com/aweizman/retro-hero" target="_self">
            <img src = "githubtransparent.png" alt = "Github Repo" height = "50" width = "50" border = "0"></img>
        </a>
      </footer>

    </div>
  );
}

export default App;
