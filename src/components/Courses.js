import { Card } from 'antd'
import React from 'react'
import web from '../images/course_web.PNG'
import {List, Timeline} from 'antd'

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



const Courses = () => {
    return (
        <div className="body">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"calc(5vw + 500px)"}}>
                <div style={{width:"30%"}}>
                    <Timeline mode="right">
                        <Timeline.Item color="gray" label={courses[0].name}>&nbsp;</Timeline.Item>
                        <Timeline.Item color="#88b5ed">{courses[1].name}</Timeline.Item>
                        <Timeline.Item color="#88b5ed" label={courses[2].name}>&nbsp;</Timeline.Item>
                        <Timeline.Item label={courses[4].name}>{courses[3].name}</Timeline.Item>
                        <Timeline.Item>{courses[5].name}</Timeline.Item>
                    </Timeline>
                </div>
                <List
                    style={{width:"60%", borderRadius:"15px"}}
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
        </div>
    )
}

export default Courses
