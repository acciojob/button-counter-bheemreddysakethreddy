
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
 const[count, setCount] = useState(0)
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={()=>setCount(prev=>prev+1)}>incriment</button>
    </div>
  )
}

export default App
