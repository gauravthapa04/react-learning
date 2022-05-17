import React from 'react';
import WithoutButtonInput from './Components/WithoutButtonInput';
import WithButtonInput from './Components/WithButtonInput';
import WithoutRef from './Components/WithoutRef';
import InputUppercase from './Components/InputUppercase';
import InputLowercase from './Components/InputLowercase';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  //const REACT_VERSION = React.version;
  //console.log(REACT_VERSION);
  return (
    <>  
        <WithButtonInput />
        <WithoutRef />
        <WithoutButtonInput />
        <InputUppercase />
        <InputLowercase />
    </>
  );
}

export default App;
