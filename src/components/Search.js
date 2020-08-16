import React from 'react'
import { Input, Menu} from 'semantic-ui-react'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'


class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tag: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

  handleChange(ev){                            
    console.log(ev.target.value)   
    this.setState({tag: ev.target.value})     
  }

  handleSubmit(ev){
    ev.preventDefault()
    const state = this.state
    const tag = state.tag
    // axios
    axios.get('http://localhost:5000/',{
      params: {
        tag: tag
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    console.log('submitted')
}

  render(){
    return(
      <div>
        <Input action={{ icon: 'search' }} placeholder='Search...' onChange={this.handleChange}/>
        <Menu.Item name='Search' onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default Search