import React from 'react';
import logo from "../images/logo.png";
import hseapps from  '../images/hseapps.png'
import hsecourses from '../images/courses.png'
import hseclubs from '../images/clubs.png'
import {Button, Menu} from 'antd';


const block = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    minWidth:"150px"
}



const Navbar = () => {
    
    return (
        <div style={{
            display:"flex", 
            justifyContent:"space-between", 
            background:"#bbbbbb", 
            alignItems:"center", 
            padding:"20px 40px 20px 40px",
            margin:"0 -5px 0 -5px"
        }}>
            
            <div style={block}>
                <img src={logo} style={{height:"45px", filter: "brightness(0) invert(1) drop-shadow(0 2px #b5daff)"}}/>
                <div style={{color:"white", fontWeight:"500", fontSize:"25px"}}>HSE CS</div>
            </div>

            <div style={{...block, height:"30px"}}>
                <Menu mode="horizontal" style={{backgroundColor:"transparent", color: "white", borderBottom:"none", fontSize:"16px"}}>
                    <Menu.Item style={{color:"white"}}>
                        <img src={hsecourses} style={{width:"20px", marginBottom:"4px"}}/>
                        &nbsp; Courses
                    </Menu.Item>
                    <Menu.Item style={{color:"white"}}>
                        <a href="https://hseapps.org" style={{color:"white"}} target="_blank">
                            <img src={hseapps} style={{width:"20px", marginBottom:"4px", filter: "brightness(0) invert(1) drop-shadow(0 2px #b5daff)"}}/>
                            &nbsp; HSE Apps
                        </a>
                    </Menu.Item>
                    <Menu.Item style={{color:"white"}}>
                        <img src={hseclubs} style={{width:"20px", marginBottom:"4px"}}/>
                        &nbsp; Clubs
                    </Menu.Item>
                    <Menu.Item style={{color:"white"}}>
                        <span style={{display: "inline-block", transform: "rotate(45deg) scale(1.2, .9)", filter: "drop-shadow(0 2px #b5daff)", color: "white"}}>
                            ?
                        </span>
                        &nbsp; FAQ
                    </Menu.Item>
                </Menu>
            </div>

            <div style={{...block, justifyContent: "flex-end"}}>
                <Button ghost shape="round">
                    Contact Us
                </Button>
            </div>
        </div>
    )
}

export default Navbar
