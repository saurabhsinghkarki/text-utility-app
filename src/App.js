
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
 setAlert({
  msg:message ,
  type: type
 })
 setTimeout(()=>{
  setAlert(null)
 },1500);
  }
  const toggleMode = ()=>{
  if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
    showAlert("Dark mode has been enabled" , "success")

  }
  else{
    setMode('light'); 
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("Light mode has been enabled" , "success")
     

  }
}

  return (
    <>
<Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container'>
<TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
</div>
</>
  );
}

export default App;
