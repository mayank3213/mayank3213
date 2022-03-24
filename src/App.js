import React, {  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'; 
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/counter';
import onClick from './Component/onClick';


function App() {
  return (

    <>
    
    
    <div className="App">

        <Greet name = "Bruce"  heroname="BAtman"/>     
        <Greet name="Mak" heroname="spiderman"/>
         <button>Action</button>  
      <Greet/>
        <Greet name="sok " heroname="wonder women"/>             
             <Message/>
       
        
       <onClick/>
       <Welcome name = "Bruce"  heroname="BAtman"/>
       <Welcome name = "SIM"  heroname="RRR"/>
      
           <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        
        
        <p>
          Hello Mayank 
          
          
          <Greet name ="bruce" heroname="batman" /> 
          <Welcome name ="Mak"  heroname1="Superman"/> 
          <Hello name ="Lce"  heroname2="spiderman"/>  
        
           

           
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}


export default App;
