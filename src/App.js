import React, { useState } from 'react';
import './App.css';
import Wrapper from './Views/Wrapper';
import Navbar from './Components/Navbar';

function App() {

  const[name,setName]= useState([]);

  return (
    <div className="App">
      <Navbar nombre={name}/>
      <Wrapper name={name} setName={setName}/>
    </div>
  );
}

export default App;
