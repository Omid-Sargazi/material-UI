import React from 'react';
import MuiTypography from './components/newcomponents/MuiTypography';
import './App.css';
import ButtonMUI from './components/newcomponents/ButtonMUI';
import ButtonGroup from './components/newcomponents/buttonGroup';
import ToggleButtonMUI from './components/newcomponents/ToggleButtonMUI';
import TextFieldMUI from './components/newcomponents/TextField';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import MouseCountainer from './components/useEffect/MouseCountainer';
import DataFetching from './components/DataFetching/DataFetching';

function App() {
  return (
    <div className="App">
     {/* <MuiTypography/> */}
     {/* <ButtonMUI/> */}
     {/* <ButtonGroup/> */}
     {/* <ToggleButtonMUI/> */}
     {/* <TextFieldMUI/> */}
     {/* <UseState/> */}
     {/* <UseReducer/> */}
     {/* <MouseCountainer/> */}
     <DataFetching/>
    </div>
  );
}

export default App;
