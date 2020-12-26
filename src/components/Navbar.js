import React, {useState} from 'react';

import logo from "../images/logo.png";
import hseapps from  '../images/hseapps.png'
import hsecourses from '../images/courses.png'
import hseclubs from '../images/clubs.png'
import hseprojects from '../images/projects.png'

import Clubs from './Clubs'
import Courses from './Courses'
import Projects from './Projects'

import {Button, Menu} from 'antd';
const block = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    minWidth:"150px"
}



const Navbar = () => {

    const [tab, setTab] = useState(1);

    return (
        <div className="App">
            <div style={{
                display:"flex", 
                justifyContent:"space-between", 
                background:"#bbbbbb", 
                alignItems:"center", 
                padding:"20px 40px 20px 40px",
                margin:"0 -5px 0 -5px",
                width:"100%"
            }}>
                
                <div style={block}>
                    <img src={logo} style={{height:"45px", filter: "brightness(0) invert(1) drop-shadow(0 2px #b5daff)"}}/>
                    <div style={{color:"white", fontWeight:"500", fontSize:"25px"}}>HSE CS</div>
                </div>

                <div style={{...block, height:"30px"}}>
                    <Menu 
                        mode="horizontal" 
                        style={{backgroundColor:"transparent", color: "white", borderBottom:"none", fontSize:"16px", width:"500px"}}
                        onClick={(e) => {
                            setTab(e.key)
                            console.log(e)
                        }}
                        defaultActiveFirst={tab}
                    >
                        <Menu.Item style={{color:"white"}} key={1}>
                            <img src={hsecourses} style={{width:"20px", marginBottom:"4px"}}/>
                            &nbsp; Courses
                        </Menu.Item>
                        {/* <Menu.Item style={{color:"white"}} key={2}>
                            <a href="https://hseapps.org" style={{color:"white"}} target="_blank">
                                <img src={hseapps} style={{width:"20px", marginBottom:"4px", filter: "brightness(0) invert(1) drop-shadow(0 2px #b5daff)"}}/>
                                &nbsp; HSE Apps
                            </a>
                        </Menu.Item> */}
                        <Menu.Item style={{color:"white"}} key={2}>
                            <img src={hseclubs} style={{width:"20px", marginBottom:"4px"}}/>
                            &nbsp; Clubs
                        </Menu.Item>
                        <Menu.Item style={{color:"white"}} key={3}>
                            <img src={hseprojects} style={{width:"20px", marginBottom:"4px"}}/>
                            &nbsp; Projects
                        </Menu.Item>
                        <Menu.Item style={{color:"white"}} key={4}>
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


            {tab==1 && <Courses/>}
            {tab==2 && <Clubs/>}
            {tab==3 && <Projects/>}
            
        </div>
    )
}

export default Navbar
