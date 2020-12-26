import { Card } from 'antd'
import React from 'react'
import web from '../images/course_web.PNG'
import {List, Timeline, Descriptions} from 'antd'

const courses = [
    {
        name: "Intro to CSI",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "AP Computer Science Principles",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CSI: Programming",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "AP Computer Science A (Java)",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CSIII: Cybersecurity",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CSIII: Software Development",
        description: "this is a description of this course",
        url: "https://hsecourses.netlify.app/course/"
    }
]
const recommendations = {
    "CS": [
        {
            name: "Freshman",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Sophomore",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Junior",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Senior",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        }
    ],
    "IT Support": [
        {
            name: "Freshman",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Sophomore",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Junior",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        },
        {
            name: "Senior",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit"]
        }
],
}
const resources = [
    {
        name: "Udemy",
        description:"this is a description of Udemy's stuff",
        link: 'https://udemy.com'
    },
    {
        name: "CyberStart",
        description:"this is a description of CyberStarts' stuff",
        link: 'https://cyberstartidk.com'
    },
    {
        name: "Udemy",
        description:"this is a description of Udemy's stuff",
        link: 'https://udemy.com'
    },
    {
        name: "CyberStart",
        description:"this is a description of CyberStarts' stuff",
        link: 'https://cyberstartidk.com'
    },
    {
        name: "Udemy",
        description:"this is a description of Udemy's stuff",
        link: 'https://udemy.com'
    },
    {
        name: "CyberStart",
        description:"this is a description of CyberStarts' stuff",
        link: 'https://cyberstartidk.com'
    }
]

const section = {
    display:"flex", justifyContent:"space-between", alignItems:"center", margin:"50px 0 100px 0", width:"100%"
}
const title = {
    fontWeight:"500", fontSize:"20px", color:"#595959"
}



const Courses = () => {
    return (
        <div className="body">

            <div style={title}>CS Courses At HSE</div>
            <div style={section}>
                <div style={{width:"30%", margin:"auto"}}>
                    <Timeline mode="right">
                        <Timeline.Item color="gray" label={courses[0].name}>&nbsp;</Timeline.Item>
                        <Timeline.Item color="#88b5ed">{courses[1].name}</Timeline.Item>
                        <Timeline.Item color="#88b5ed" label={courses[2].name}>&nbsp;</Timeline.Item>
                        <Timeline.Item label={courses[4].name}>{courses[3].name}</Timeline.Item>
                        <Timeline.Item>{courses[5].name}</Timeline.Item>
                    </Timeline>
                </div>
                <List
                    style={{width:"65%", borderRadius:"15px"}}
                    dataSource={courses}
                    bordered={true}
                    renderItem={item => 
                        <List.Item >
                            <List.Item.Meta
                                title={item.name}
                                description={item.description}
                            />
                            <a href={item.url} target="_blank">More Info</a>
                        </List.Item>
                    }
                ></List>
            </div>
            {/* <img src={web} style={{width:"40%"}}></img> */}

            <div style={title}>Sample Schedule</div>
            <div style={section}>
                {["CS", "IT Support"].map((cat) => 
                    <div style={{width:"47.5%"}}>
                        <Descriptions bordered column={1}>
                            <Descriptions.Item style={{textAlign:"center", padding:"10px 150px 10px 0", fontWeight:"500"}}>{cat} Students</Descriptions.Item>
                            {recommendations[cat].map((item) => 
                                <Descriptions.Item label={item.name}>
                                    <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                                        {[0,1].map((evenOdd) => 
                                            <div style={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                {item.courses.map((courseName, index) =>
                                                    <div>
                                                        {index%2==evenOdd &&
                                                            <div>{courseName}</div>
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </div>
                )}
            </div>

            <div style={title}>Other Learning Resources</div>
            <div style={{...section, border:"1px solid #d9d9d9", borderRadius:"15px", padding:"10px", display:"block"}}>
                {[0,1].map((evenOdd) => 
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        {resources.map((item, index) => {
                            if (index%2==evenOdd) {
                                return(
                                    <div style={{backgroundColor:"#f5f5f5", padding:"10px 20px 10px 20px", margin:"10px", borderRadius:"10px", minWidth:"30%"}}>
                                        <div>{item.name}</div>
                                        <div style={{color:"gray", fontSize:"13px"}}>{item.description}</div>
                                        <a style={{fontSize:"13px"}} href={item.link} target="_blank">Learn More</a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Courses
