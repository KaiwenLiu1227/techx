import React from 'react'
import { Tab, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './../App.css'

var data = [{
    name: "梗1",
    picture: 'https://www.theanfieldwrap.com/uploads/2019/06/20190601-015-UEFA_Champions_League_Final.jpg'
}, {
    name: "梗2",
    picture: 'https://picsum.photos/400/300/?blur'
},{
    name: "梗3",
    picture: 'https://picsum.photos/600/300/?blur'
}]

const fd = data.map(d=> {
    return {
        menuItem: d.name,
        render: () => (
        <Tab.Pane className = 'video-pane'>
            <img src={d.picture} alt='pics'/>
        </Tab.Pane>)
    }
})

class Visualization extends React.Component{
    render(){
        return(
            <div>
                <Container text>
                    <p>
                        click the following tabs to know the trend of the development of the memes.
                    </p>
                </Container>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={fd} />
            </div>
        )
    }
}
    
export default Visualization