
import {
     Link, 
} from "react-router-dom";
import React,{useEffect} from 'react'; 
import tawkTo from "tawkto-react";
const tawkToPropertyId = '60b4ba50de99a4282a1a84b9'

// Direct Chat Link https://tawk.to/chat/60b4ba50de99a4282a1a84b9/f8ed17a4487c54b4c1f19b45ed4bd1df28b33e5e

const tawkToKey = '1f70vfjpo'


  export default function Footer(props){
    useEffect(() => {
      // tawkTo(tawkToPropertyId, tawkToKey)
    
    }, [])
    return (<>
    
    <footer>
<div class="footer">
{/* <div class="rows">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div> */}

<div class="rows">
<ul>
 
<li><Link to="/privacy-policy">Privacy Policy</Link></li>
 
</ul>
</div> 

<div class="rows">
 Copyright © 2021 Rtflive - All rights reserved
</div>
</div>
</footer>

    
    </>)
}