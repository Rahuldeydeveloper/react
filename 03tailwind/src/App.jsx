import { useState } from 'react';
import './App.css';
import Card from './component/card'; // Corrected import statement

function App() {
  const [count, setCount] = useState(0);

  // Example of a JavaScript object
  let myObj = {
    username: "Rahul",
    age: 23,
  };

  // Example of a JavaScript array
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" /> 
      <Card username="Rahul" /> 
    </>
  );
}

export default App; 