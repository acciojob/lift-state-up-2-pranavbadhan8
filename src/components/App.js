
import './../styles/App.css';
import React,{ useState } from "react";


const App = () => {
  
  let [input,setInput] = useState("");
      
    function change(event){
      setInput(event.target.value);
    }
   
  return (
    <div className='container'>
        {/* Do not remove the main div */}
        <div className="parent-container">
           <h1>Parent Component</h1>
           <p>{input}</p>

        <div className="child-container">
          <h2>Child component</h2>
          <input onChange={change}/>
        </div>
        </div>  
    </div>
  )
}

export default App
