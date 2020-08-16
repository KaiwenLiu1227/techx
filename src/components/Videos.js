import React from 'react'
import {Tab} from 'semantic-ui-react'
import './../App.css'
import 'semantic-ui-css/semantic.min.css'
import Search from './Search'

// axios 
var data = [{
    name: "赵本山",
    url: "//player.bilibili.com/player.html?aid=19390801&bvid=BV1bW411n7fY&cid=31621681&page=1&start=30"
}, {
    name: "新宝岛",
    url: "//player.bilibili.com/player.html?aid=53851218&bvid=BV1j4411W7F7&cid=94198756&page=1"
    
},{
    name: "卢本伟",
    url: "//player.bilibili.com/player.html?aid=18193325&bvid=BV1FW411q7Js&cid=29702838&page=1"
}]


const fd = data.map(d=> {
    return {
        menuItem: d.name,
        render: () => (
        <Tab.Pane className = "video-pane">
            <iframe src= {d.url}
            scrolling="yes" border="0" frameBorder="no" frameSpacing="0" allowFullScreen="true" className="iframe" id='O6Xo21L0ybE'>
                Your browser cannot support this video
            </iframe>  
        </Tab.Pane> )
    }
})

class Video extends React.Component{
    render(){
        return(
            <div>
                <Search />
                <br></br>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={fd} />
            </div>
        )
    }
}
    
export default Video
