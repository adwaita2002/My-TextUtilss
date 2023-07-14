//import React, { useState } from 'react'

export default function About(props) {

    // const [myText, setmyText] = useState('Dark Mode');
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
        
    // });

    // const clickbutton =()=>{

    //     if(myStyle.color==='black'){ 
    //     setmyStyle(
    //         {
    //             color:'white',
    //     backgroundColor:'black'
       

         
    //         }
    //     )
    //     setmyText('light Mode');
    //     }
    //     else{

    //         setmyStyle(
    //             {
    //                 color:'black',
    //         backgroundColor:'white'
             
    //             }
    //         )
    //         setmyText('Dark Mode');

    //     }
    // }

    

   
  return (
<div>
    <div id="about"   style={{color: props.Mode==='dark' ? 'white' : 'black'}}>

        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"   style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"      style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}   data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={{backgroundColor: props.Mode==='dark' ? '#665959' : 'white', color: props.Mode==='dark' ? 'white' : 'black'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <button className="btn btn-primary my-5" onClick={clickbutton}>{myText}</button> */}
    </div>
      
</div>
  )
}
