import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiTypography} from "./components/muiTypography";
import {MuiButton} from "./components/MuiButton";

function App() {
  return (
    <div className="App">
     <h1>MUI</h1>
     <MuiTypography/>
     <MuiButton/>
    </div>
  );
}

export default App;
