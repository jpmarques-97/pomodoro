import './App.css';
import Pomodoro from './Pomodoro';
//import MultiPlayer from './MultiPlayer'
//<MultiPlayer
//  urls={[
//    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
//  ]}
///>


function App() {

  return (
    
    <div className="App">
      <div className='spotify'>          
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E38M5jGJst2u8?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
      </div>
      <audio className="audio-element">
        <source src="https://www.fesliyanstudios.com/play-mp3/4383"></source>
      </audio>
      <Pomodoro/>
    </div>
    
  );
}

export default App;
