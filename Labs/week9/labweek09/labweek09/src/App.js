import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   const [userInfo, setUserInfo] = useState({
    name: "Piyush Patel",
    stid: 101410303,
    clg: "George Brown College, Toronto",
  });

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="React Logo with Text" style={{ width: '400px', margin: '10px' }} />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
       <h2>Welcome to FullStack Development - I</h2>
       <h3>React JS Programming Week09 Lab Excercise</h3>
       <p><strong> {userInfo.stid} </strong></p>
       <p><strong><h5>{userInfo.name}</h5></strong></p>
       <p><strong> {userInfo.clg} </strong></p>
      </div>  
      </header>
    </div>
  );

}

export default App;