import React, { useState, useEffect } from "react";
import './styles.css'
import axios from 'axios'


function App() {
  const [data,setdata]=useState([])
  const [counter,secounter]=useState(0)
  useEffect(()=>{
    if(counter==5 || counter==10){
      axios.get("https://api.quotable.io/quotes/random").then((Response)=>{
        console.log(Response.data)
        setdata(Response.data[0].content)
      })
    }
    
  },[counter])
  function increment(){
   secounter(counter<10?counter+1:counter)
  }
  function decrement(){
    secounter(counter>0?counter-1:counter)
}
  
  return (
    <div className="counter-widget">
      <div className="count">{counter}</div>
      <button className="increment" onClick={increment}>Increment</button>
      <button className="decrement" onClick={decrement}>Decrement</button>
      
       

       
            <div className="quote" >Random Quote:{data}</div>
       
      

       

    </div>
  );
}

export default App;
