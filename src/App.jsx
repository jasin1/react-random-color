import { useState } from 'react'
import './App.css'

function App() {
  const [myColor, setMyColor] = useState('#FFFFFF');
  const [textColor, setTextColor]= useState('black');

  function hexToRgb(hex){
    let r = parseInt(hex.substring(1,3),16);
    let g = parseInt(hex.substring(3,5),16);
    let b = parseInt(hex.substring(5,7),16);
    return {r,g,b};
  }

  function calculateLuminance(r, g, b){
    const a = [r, g, b].map(function (v){
      v /=255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055)/ 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function updateTextColor(hex){
    const {r, g, b} = hexToRgb(hex);
    const luminance = calculateLuminance(r, g, b);
    setTextColor(luminance > 0.5 ? 'black': 'white');
  }
  
  function randomHex(){
    const myHex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i < 6; i++){
     color += myHex[Math.floor(Math.random()*16)];

    }
    setMyColor(color);
    updateTextColor(color);
    document.body.style.backgroundColor = color;
    console.log(color);
  }



  return (
    <>

      <div className="card">
        <button onClick={randomHex}>
          Random Color
        </button>
      </div>
      <h1 style={{color: textColor}}>{myColor}</h1>
    </>
  )
}

export default App
