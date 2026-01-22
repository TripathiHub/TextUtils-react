
import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
// console.log("Onchange"); it was just for understanding
setText(event.target.value);
    }
    const handleClearAll=()=> {
     if(window.confirm("Are you sure you want TO CLEAR ALL")){
          setText("");
      }
        props.showAlert("Cleared All","warning")
    }
    const handleCopy=()=> {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard","success")
    }
    const handleUPClick=()=>{
     //  console.log("Uppercase was clcicked "+ text); it was just for understanding
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Done","success")
       
    }
    const handleLowerClick=()=>{
      console.log("lower case clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("lowercase Done","success")
    }
    const handleCountWord=()=>{
     let words=text.trim().split(/\s+/);
     let wordcount=text.trim()===""? 0 :words.length;
    //  console.log(wordcount);
      setText("The total words are: "+ wordcount);
      props.showAlert("Counted Perfectly","success")
    }
    const[text,setText]=useState('Enter text here');
   // text="new text"; wrong way to  change state
  // setText("new text");correct way to change state
  return (
    <>
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
      </div>
        
<div className="mb-3" style={{color:props.mode==='dark'?'042743':'white'}}>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}id="myBox" rows="5"></textarea>
</div>
  <button className="btn btn-primary mx-1" onClick={handleUPClick} disabled={text.length=== 0} style={{color:props.mode==='dark'?'042743':'white'}}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerClick} disabled={text.length=== 0} style={{color:props.mode==='dark'?'042743':'white'}}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleCountWord} disabled={text.length=== 0} style={{color:props.mode==='dark'?'042743':'white'}}> Count total words</button>
<button className="btn btn-primary mx-1" onClick={handleClearAll} disabled={text.length=== 0} style={{color:props.mode==='dark'?'yellow':'black'}}>Clear All</button>
<button className="btn btn-primary mx-1" onClick={handleCopy} disabled={text.length=== 0} style={{color:props.mode==='dark'?'042743':'white'}}>Copy to clipboard</button>
<div className="container my-1" style={{color:props.mode==='dark'?'white':'black'}}>
   <h2>Text Summary</h2>
    <p>Words: {text.trim()===""? 0 :text.trim().split(/\s+/).length}, Character: {text.length} </p>
   <p>Average Time To Read(min): {0.008 * text.split("").length}</p>
   <h2>Preview</h2>
   <p>{text}</p>
</div>
    </div>
    </>
  )
}
