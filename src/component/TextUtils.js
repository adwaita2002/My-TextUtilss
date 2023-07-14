import React from 'react'
import {Link} from 'react-router-dom';


export default function TextUtils() {
  return (
    <div>

        <div>
        <marquee
            direction="up"
            width="200"
            height="00"
            behavior="alternate"
            loop="1"
            />
        <marquee behavior="alternate">WeLCoMe tO mY TeXtUtILs!!</marquee>
        
           
        
        </div>
     

      {/* <a href="Home"><div className="btn btn-primary"> Go To Home Page</div></a> */}
      <Link to={"/Home"}><div className="btn btn-primary"> Go To Home Page</div></Link>

    </div>
  )
}
