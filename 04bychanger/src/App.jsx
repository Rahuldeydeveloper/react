import { useState } from "react";
function App() {
    const [color, setColor] = useState('white'); // Initial color
  
    const handleColorChange = (newColor) => {
      setColor(newColor);
    };
    return(
         <div 
        style={{ backgroundColor: color, height: '100vh' }} // Fullscreen background
      >
        <div 
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-md" 
        > 
          <button 
            onClick={() => handleColorChange('red')} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Red
          </button>
          <button 
            onClick={() => handleColorChange('green')} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Green
          </button>
          <button 
            onClick={() => handleColorChange('blue')} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Blue
          </button>
          <button 
            onClick={() => handleColorChange('yellow')} 
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Yellow
          </button>
          <button 
            onClick={() => handleColorChange('white')} 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-2"
          >
            White
          </button>
        </div>
      </div>
    );
  }

export default App