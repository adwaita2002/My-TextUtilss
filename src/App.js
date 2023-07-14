
import './App.css';
import Navbar from './component/Navbar';
 import TextForm from './component/TextForm'
 import About from './component/About'
import { useState } from 'react';
import TextUtils from './component/TextUtils'
import { BrowserRouter,Routes, Route } from "react-router-dom"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "reactn-router-dom";





function App() {

   const [Mode, setMode] = useState('light');
   
   

  const toggle=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
     
    }
  }
 // Defult={Mode} toggle={toggle}
  // }

  return (
    
    
    // <div className="body">
    //   <Navbar Title="TextUtils" About="About Us" Mode={Mode}  toggle={toggle}></Navbar>


      // <div className="TextForm">
      //   <TextForm   Mode={Mode}  heading="Compiling Your Text Here"/>
      //   </div>

    
         
          //       <div className="about-container">
          // <About  Mode={Mode}/>
          // </div>



    <BrowserRouter>

      <div className="body">
      <Navbar Title="TextUtils" About="About Us" Mode={Mode}  toggle={toggle}></Navbar>
      </div>

    
       <Routes>

       <Route path="/" element={ <div className="mainBox"> <TextUtils/></div>  }
        />

        <Route path="/Home" element={   <div className="TextForm">
        <TextForm   Mode={Mode}  heading="Compiling Your Text Here"/>
        </div>  }
        />


       
        


        <Route path="/About Us" element={<div className="about-container">
          <About  Mode={Mode}/>
          </div>  }
        />
       </Routes>


    </BrowserRouter>
         
          
         
              
          
  // </div>
   

  
  );
}

export default App;
