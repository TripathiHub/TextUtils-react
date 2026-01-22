 import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
 // BrowserRouter as Router,
 // Route,
 // Routes
// } from "react-router-dom"

function App() {
  const [mode,setMode]=useState('light');
  const [modeText,setModeText]=useState("Dark Mode")
   const [alert,setAlert]=useState(null)
   const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
   }
   const toggleMode=()=>{
if(mode==='light'){
  setMode('dark')
  setModeText("Light Mode")
  document.body.style.backgroundColor = '#042743'
  showAlert("Dark Mode has been Enabled","success")
}else{
  setMode('light')
  setModeText("Dark Mode")
  document.body.style.backgroundColor= 'white'
  showAlert("Light Mode has been Enabled","success")
}
}
  return (
  <>
 {/*<Router>*/}
   <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} modeText={modeText}/>
  <Alert alert={alert}/>
<div className="container my-3">
   {/*<Routes>*/}
  {/*<Route path="/about" element={<About />} />*/}
         {/* <Route path="/" element={ */}
     <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    {/* </Routes>*/}
     </div>
    {/* </Router>*/}
  </>
  );
}

export default App;
