import React from 'react';
import { Link } from "react-router-dom";
import SignedInLinks from "../layout/SignedInLInks";
import SignedOutLinks from "../layout/SignedOutLinks";

const Navbar = () => {
  return (
   <nav className="nav-wrapper grey darken-3">
     <div className="container">
       <Link to="/" className="brand-logo">Redux-App</Link>
       <SignedInLinks />
       <SignedOutLinks />
     </div>
   </nav>
  )
}

export default Navbar
