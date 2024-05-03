import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiTypography} from "./components/muiTypography";
import {MuiButton} from "./components/MuiButton";
import {MuiTextField} from "./components/MuiTextField";
import {MUISelect} from "./components/MUISelect";
import RadioButton from './components/RadioButton';
import CheckBox from './components/CheckBox';

function App() {
  return (
    <div className="App">
     <h1>MUI</h1>
     <MuiTypography/>
     <MuiButton/>
     <br/>
     <br/>
     <br/>
     <hr/>
     <h1>Text Field</h1>
     <hr/>
     <MuiTextField/>
     <br/>
     <hr/>
     <h1>Select Components</h1>
     <hr/>
     <MUISelect/>
     <hr/><br/>
     <RadioButton/>
     <hr/><br/>
     <h1>CheckBox</h1>
     <CheckBox/>
    </div>
  );
}

export default App;
