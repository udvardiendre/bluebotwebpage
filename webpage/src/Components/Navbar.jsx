 import React from 'react'
 import { Link } from 'react-router-dom'

 import logo from '../Media/logoBB2.png'
 
 const Navbar = () => {
   
   return (
     <div id="navBar">
         <nav id="navMainDiv" className='navMainDiv'>
             <div id="logoDiv">
                 <Link to="/">
                    <img src={logo} alt="logo" />
                 </Link>
             </div>
             <ul id="navList">
                 <li><Link to="/welcome" >Kezdőlap</Link></li>
                 <li><Link to="/aboutUs" >Rólunk</Link></li>
                 <li><Link to="/reference" >Referencia</Link></li>
                 <li><Link to="/contatcUs" >Kapcsolat</Link></li>
             </ul>
         </nav>
     </div>
   )
 }
 
 export default Navbar