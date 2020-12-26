import React from 'react'
import {Card} from 'antd'
import hseappsProjects from '../images/hseapps_projects.PNG'

const section = {
    display:"flex", justifyContent:"space-between", alignItems:"center", margin:"50px 0 100px 0", width:"100%"
}
const title = {
    fontWeight:"500", fontSize:"20px", color:"#595959"
}

const clubProjects = [
    {
        name: "HSE Apps",
        description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
        image: hseappsProjects,
        link: "https://hseapps.org/products"
    },
    {
        name: "HSE Apps",
        description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
        image: hseappsProjects,
        link: "https://hseapps.org/products"
    },
    {
        name: "HSE Apps",
        description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
        image: hseappsProjects,
        link: "https://hseapps.org/products"
    },
]


const Projects = () => {
    return (
        <div className="body">
            <div style={title}>Club Apps</div>
            <div style={section}>
                {clubProjects.map((item) => 
                    <Card 
                        style={{
                            borderColor:"#d9d9d9", 
                            borderRadius:"15px", 
                            width: 95/clubProjects.length + "%"
                        }}
                        title={item.name}
                    >
                        <div>{item.description}</div>
                        <img src={item.image} style={{width:"100%", margin:"15px 0 15px 0", border:"1px solid #f0f0f0", borderRadius:"10px"}}></img>
                        <a href={item.link}>Learn More</a>
                    </Card>
                )}
            </div>

            <div style={title}>Individual Entries</div>
            <div style={section}>
                {clubProjects.map((item) => 
                    <Card 
                        style={{
                            borderColor:"#d9d9d9", 
                            borderRadius:"15px", 
                            width: 95/clubProjects.length + "%"
                        }}
                        title={item.name}
                    >
                        <div>{item.description}</div>
                        <img src={item.image} style={{width:"100%", margin:"15px 0 15px 0", border:"1px solid #f0f0f0", borderRadius:"10px"}}></img>
                        <a href={item.link}>Learn More</a>
                    </Card>
                )}
            </div>

            <div style={title}>Competition Entries</div>
            <div style={section}>
                {clubProjects.map((item) => 
                    <Card 
                        style={{
                            borderColor:"#d9d9d9", 
                            borderRadius:"15px", 
                            width: 95/clubProjects.length + "%"
                        }}
                        title={item.name}
                    >
                        <div>{item.description}</div>
                        <img src={item.image} style={{width:"100%", margin:"15px 0 15px 0", border:"1px solid #f0f0f0", borderRadius:"10px"}}></img>
                        <a href={item.link}>Learn More</a>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Projects
