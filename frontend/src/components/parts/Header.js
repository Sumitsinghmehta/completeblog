import React from "react";
import NavBar from "./NavBar";
const Header =()=> {
    return(	
        	<header className="clearfix header-style5">
    <div className="logo-place">
        <div className="container">
            <div className="inner-logo-place">
                <a className="navbar-brand" href="index.html">
                    Complete Blog
                </a>
            </div>
        </div>
    </div>
<NavBar/>
    
</header> 
);
};

export default Header;