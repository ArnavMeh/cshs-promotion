import React from 'react';

import logo from "../images/logo.png";


const Navbar = () => {
    const block = {
         
        display:"flex",
        justifyContent:"spaceBetween",
        alignItems:"center"
    }

    return (
        <div style={{display:"flex", justifyContent:"space-between", background:"#aaaaaa", margin:"-10px", alignItems:"center", padding:"25px 50px 25px 50px"}}>
            {[1,2,3,4,5].map(() => 
                <div style={block}>
                    <img src={logo} style={{height:"60px", marginRight:"10px"}}></img>
                    <div style={{color:"white", fontWeight:"600", fontSize:"20px"}}>HSE CS</div>
                </div>
            )}
        </div>
    )
}

export default Navbar
