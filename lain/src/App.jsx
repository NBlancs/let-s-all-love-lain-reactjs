import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ASCIIText from './ASCIIText';
import './App.css';
import MatrixRain from './MatrixRain';
import AudioPlayer from './AudioPlayer';

function App() {
  return (
    <>
    <AudioPlayer />
    <MatrixRain />
    <ASCIIText
      text="♥Lain♥"
      enableWaves={true}
      asciiFontSize={8}
    />
    
    </>
  );
}

export default App
