import './App.css';
import React, { useEffect, useState } from "react";

function Endpoint() {
  const [x, setX] = useState(0)

  useEffect(() => {
    fetch("/test").then(response => 
      response.json().then(data => {
        console.log(data)
        setX(data.test);
      })
    );
  }, []); 

  return (
    <div className="App">
      x is {x}
    </div>
  );
}

export default Endpoint;