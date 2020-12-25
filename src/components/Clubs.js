import React from 'react'
import {Calendar, Badge, Card, Collapse} from 'antd'
const {Panel} = Collapse

const clubs = [
    {
        name: "CS Honors Society (CSHS)",
        description: "this is a description of club 1",
        url: "https://hseclubs.com"
    },
    {
        name: "Girls Who Code",
        description: "this is a description of club 2",
        url: "https://hseclubs.com"
    },
    {
        name: "HSE Hacks",
        description: "this is a description of club 3",
        url: "https://hseclubs.com"
    },
    {
        name: "HSE Apps",
        description: "this is a description of club 4",
        url: "https://hseclubs.com"
    },
]








const Clubs = () => {



    const getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'success', content: 'CSHS' },
                    { type: 'warning', content: 'HSE Apps' }
                ];
                break;
            case 15:
                listData = [
                    { type: 'error', content: 'CSHS' }
                ];
                break;
            case 22:
                listData = [
                    { type: 'success', content: 'HSE Hacks' }
                ];
                break;
            case 29:
                listData = [
                    { type: 'error', content: 'Some Event' }
                ];
                break;
            default:
        }
        return listData || [];
    }
      
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <div>
                {listData.map(item => 
                    <Badge status={item.type} text={item.content} />
                )}
            </div>
        );
    }
    
    
    return (
        <div className="body">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"calc(5vw + 800px)"}}>
                <Card style={{borderRadius:"15px", width:"70%", border:"1px solid #d9d9d9"}}>
                    <Calendar dateCellRender={dateCellRender}/>
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
        </div>
    )
}

export default Clubs
