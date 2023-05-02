import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import NavBar from './components/Navbar';
import TextArea from './components/Text';
import Alert from './components/Alert';
import {Route , Routes} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlertState = (message,type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "rgb(5 34 63)";
      showAlertState("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlertState("Light mode has been enabled", "success")
    }
  }
  return (
      <>
      <NavBar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
      <Alert  alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route path = '/' element ={<TextArea heading="Enter Text to Analyze" mode={mode}/>}></Route>
          <Route path='/about' element={<About mode={mode}/>}></Route>
        </Routes>
  </div>
  </>
  )
}
export default App;
