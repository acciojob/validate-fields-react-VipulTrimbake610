
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [a,setA] = useState({name:"",pwd:""});
  let [error, setError] = useState("");
  function handleClick(){
    if(a.name==="" || a.pwd === ""){
      setError("Both username and password are required.");
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="">Username:</label>
        <input type="text" onChange={(e)=>setA({...a,name:e.target.value})} />
        
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e)=>setA({...a,pwd:e.target.value})}/>
        <p id="errorMessage" style={{color:"red"}}>{error}</p>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default App
