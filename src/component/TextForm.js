import React, { useState } from 'react'

export default function TextHtmlform(props) {

  const handleUpClick = () =>{
        
        setText(Text.toLocaleUpperCase())
  }
  const handleloClick = () =>{
        
        setText(Text.toLocaleLowerCase());
  }
  const onChange = (event) =>{
        
        setText(event.target.value);
  }

  const  handleclClick= () =>{
        
    setText('');
 }
  const  handleExClick= () =>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
    
 }

 
 
  

    const [Text, setText] = useState('');

  return (

    <>
    
   
    <div>
    
            <div className="mb-3" style={{color: props.Mode==='dark' ? 'white' : 'black'}}>
                <h4>{props.heading}</h4>
          
            <textarea className="HtmlForm-control" id="exampleHtmlformControlTextarea1"   style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}   onChange={onChange} value={Text} rows="8" cols="124"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick} >ConvertToUpperCase</button>
            <button className="btn btn-primary " onClick={handleloClick} >ConvertToLowerCase</button>
            
            <button className="btn btn-primary mx-3"  onClick={handleExClick}>Remove ExtraSpaces</button>
            <button className="btn btn-primary " onClick={handleclClick} >Clear All Text</button>

            <h1 className="Text-about my-3"  style={{color: props.Mode==='dark' ? 'white' : 'black'}}>About Your Text</h1>
        <h5 style={{color: props.Mode==='dark' ? 'white' : 'black'}}> {Text.split(" ").length} Words and {Text.length} Charecter</h5>
        <p  style={{color: props.Mode==='dark' ? 'white' : 'black'}}> {0.008*Text.split(" ").length}sec Take time to read your whole text</p>
        <h6  style={{color: props.Mode==='dark' ? 'white' : 'black'}} >Preview - {Text.length > 0 ? Text : "Please Enter Your Text Upper PopUp Box"}</h6>

    </div>

    <div className="container2">
        {/* <h1>About Your Text</h1>
        <p>123 Words 65688 Charecter</p> */}
    </div>

    </>
  )
}
