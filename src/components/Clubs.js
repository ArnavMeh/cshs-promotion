import React from 'react'
import {Calendar, Badge, Card, Collapse} from 'antd'
const {Panel} = Collapse

const clubs = [
    {
        name: "CS Honors Society (CSHS)",
        description: "this is a description of club 1",
        url: "https://hseclubs.com",
        type: 'success'
    },
    {
        name: "Girls Who Code",
        description: "this is a description of club 2",
        url: "https://hseclubs.com",
        type: 'warning'
    },
    {
        name: "HSE Hacks",
        description: "this is a description of club 3",
        url: "https://hseclubs.com",
        type: 'error'
    },
    {
        name: "HSE Apps",
        description: "this is a description of club 4",
        url: "https://hseclubs.com",
        type: 'error'
    },
]
const meetings = [
    {
        day: 25,
        month: 12,
        club: clubs[0],
        time: "2:00pm"
    },
    {
        day: 8,
        month: 12,
        club: clubs[2],
        time: "2:00pm"
    }
]
const events = [
    {
        name: "EasyCTF",
        description: "High School Capture The Flag Hacking Contest - New contests available often",
        link: 'https://www.easyctf.com/'
    },
    {
        name: "Google Code-In",
        description: "Open Source programming activities with prizes - usually in Dec-Jan",
        link: 'https://developers.google.com/open-source/gci/'
    },
    {
        name: "EasyCTF",
        description: "High School Capture The Flag Hacking Contest - New contests available often",
        link: 'https://www.easyctf.com/'
    },
    {
        name: "EasyCTF",
        description: "High School Capture The Flag Hacking Contest - New contests available often",
        link: 'https://www.easyctf.com/'
    },
    {
        name: "Google Code-In",
        description: "Open Source programming activities with prizes - usually in Dec-Jan",
        link: 'https://developers.google.com/open-source/gci/'
    },
    {
        name: "Google Code-In",
        description: "Open Source programming activities with prizes - usually in Dec-Jan",
        link: 'https://developers.google.com/open-source/gci/'
    },
]

const section = {
    display:"flex", justifyContent:"space-between", alignItems:"center", margin:"50px 0 100px 0", width:"100%"
}
const title = {
    fontWeight:"500", fontSize:"20px", color:"#595959"
}



const Clubs = () => {

    const getListData = (value) => {
        const date = {day: value.date(), month: value.month()+1}
        const meetingsFound = meetings.filter((meeting) => {
            return meeting.day == date.day && meeting.month == date.month
        })

        const formattedMeetings = []
        meetingsFound.map((meeting) => {
            var newName = meeting.club.name
            if (newName.indexOf("(") != -1) {
                newName = newName.slice(0, newName.indexOf("(")-1)
            }
            
            formattedMeetings.push({
                type: meeting.club.type,
                content: newName + " @ " + meeting.time
            })
        })

        return formattedMeetings
    }
    
    return (
        <div className="body">
            <div style={title}>CS Clubs At HSE</div>
            <div style={section}>
                <Card style={{borderRadius:"15px", width:"70%", border:"1px solid #d9d9d9"}}>
                    <Calendar dateCellRender={(value) =>
                        <div>
                            {getListData(value).map(item => 
                                <Badge status={item.type} text={item.content} />
                            )}
                        </div>
                    }/>
                </Card>
                <div style={{width:"25%"}}>
                    <Collapse style={{backgroundColor:"transparent", borderRadius:"15px"}}>
                        {clubs.map((item, index) => 
                            <Panel
                                header={
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <div>{item.name}</div>
                                        <a style={{color:"gray", fontWeight:"400"}} href={item.url} target="_blank">Sign Up</a>
                                    </div>
                                }
                                key={index+1}
                            >
                                {item.description}
                            </Panel>
                        )}
                    </Collapse>
                </div>
            </div>

            <div style={title}>Other CS Events</div>
            <div style={{...section, border:"1px solid #d9d9d9", borderRadius:"15px", padding:"10px", display:"block"}}>
                {[0,1].map((evenOdd) => 
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        {events.map((item, index) => {
                            if (index%2==evenOdd) {
                                return(
                                    <div style={{backgroundColor:"#fafafa", padding:"10px 20px 10px 20px", margin:"10px", borderRadius:"10px", width: 95/(events.length/2) + "%"}}>
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

export default Clubs
