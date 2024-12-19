import { useState } from 'react';
import './App.css';

function App() {

const[color,setColor]=useState('white');


console.log(color,"color");


const handleGreen = () =>{
  setColor('green')
}
const handleGYellow = () =>{
  setColor('yellow')
}


  return (
    <>
    <div className="app_wrap" style={{backgroundColor:color}}>
      <button className='green' onClick={handleGreen}>Green</button>
      <button style={{background:"yellow"}} className='green' onClick={handleGYellow}>Yellow</button>
    </div>

    </>
  );
}

export default App;
