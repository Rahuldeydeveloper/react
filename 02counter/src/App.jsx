import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]  = useState(15)
  const addValue = () => {
    //counter = counter + 1
    if(counter < 20){
    setCounter(prevCounter => prevCounter + 1) 
  }
}
  const removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
  }
}

  return (
    <>
    <h1>rahul aur react</h1>
    <h2>counter value: {counter}</h2>
    <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
