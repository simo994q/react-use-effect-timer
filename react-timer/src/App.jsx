import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [count, setCount] = useState(0)

  
  function startTimer() {
    useEffect(() => {
      setTimeout(() => {
        setCount(() => count + 1);
      }, 1000);
    });
  }


  return (
    <>
      <h2>Tid i sekunder:</h2>
      <h3>{count}</h3>
      <button onClick={startTimer()}>Start</button>
    </>
  )
}

export default App
