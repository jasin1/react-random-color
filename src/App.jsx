import { useState } from 'react'
import './App.css'

function App() {
  const [myColor, setMyColor] = useState(0)
  
  function randomHex(){
    const myHex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i < 6; i++){
     color += myHex[Math.floor(Math.random()*16)];

    }
    document.body.style.backgroundColor = color;
    setMyColor(color);
    console.log(color);
  }

  return (
    <>

      <div className="card">
        <button onClick={randomHex}>
          Random Color
        </button>
      </div>
      <h1>{myColor}</h1>
    </>
  )
}

export default App
