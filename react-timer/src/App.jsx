import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [count, setCount] = useState(0)

  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (isRunning === true) {
        setCount((count) => count + 1);
      }
    }, 1000);
  }, [isRunning, count]);


  return (
    <>
      <h2>Tid i sekunder:</h2>
      <h3>{count}</h3>
      <button onClick={() => {
        if (isRunning === false) {
          setIsRunning(true)
        }
      }}>Start</button>
      <button onClick={() => {
        if (isRunning === true) {
          setIsRunning(false)
        }
      }}>Stop</button>
      <button onClick={() => {
        if (isRunning === true) {
          setIsRunning(false)
          setCount(0)
        } else {
          setCount(0)
        }
      }}>Nulstil</button>
    </>
  )
}

export default App
