
import './../styles/App.css';
import React,{ useState } from "react";


const App = () => {
  
  let [input,setInput] = useState("Selected Option :");
      
    function change1(){
      setInput("Selected Option : Option 1");
    }

    function change2(){
      setInput("Selected Option : Option 2")
    }
   
  return (
    <div className='container'>
        {/* Do not remove the main div */}
        <div className='parent'>
           <h1>Parent Component</h1>

        <div className='child1'>
          <h2>Child component 1</h2>
          <button onClick={change1}>Option 1</button>
        </div>

        <div className='child2'>
          <h2>Child component 2</h2>
          <button onClick={change2}>Option 2</button>
        </div>
           <p>{input}</p>  
      </div>
    </div>
  )
}

export default App
