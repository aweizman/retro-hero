import './App.css';
import BeatBox from "./components/BeatBox/BeatBox";
import Keyboard from "./components/Keyboard/Keyboard";
import Options from "./components/Options/Options";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Retro Hero
        </h1>
      </header>

      <main>
        <p>Lorem ipsum ut dolor et asd;lkjasd;flkj</p>
        <div>
          <div style={{ display: 'flex', height: 200}}>
            <BeatBox/>
            <Keyboard/>
          </div>
          <br></br>
          <div style={{display: 'flex', height: 150}}>
            <Options/>
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
