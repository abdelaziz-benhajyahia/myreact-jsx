import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import srcImage from "./imageInSrc.jpg"
import './style.css'

function App() {
  return (
    <div className="App">
      <div border="1px solid black" max-width="100vw" >
        <h1 class="title red">Liverpool Football Club</h1>
        <br/>
        <img className='picture1' src={srcImage} alt='src_image' />
        <br/>
        <br/>
        <img className='picture2' src="/imageInPublic.jpg" alt='public_image' />
      </div>
      <video width="320" height="240" controls src="/myvideo.mp4" type="video/mp4" >
      </video> 
    </div>
  );
}

export default App;
