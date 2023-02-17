import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
let [text1, setText1] = useState("OFF");
let [text2, setText2] = useState("ON");

function handleClick(){
  setText1((state) => (state === "ON" ? "OFF" : "ON"));
  setText2((state) => (state === "ON" ? "OFF" : "ON"));
}

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {text1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {text2}
      </button>
    </div>
  );
}


export default App;
