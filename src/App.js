import React,{Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Person from './Person'

class App extends Component {
  
  componentDidMount(){

    axios('https://api.randomuser.me/?results=10')
      .then(response => this.props.setData(response.data.results)) 
      .catch(error => console.error(error))
  }

  render(){
       return (
        <div className="App">
           <h1>randomppl redux</h1>
           {(this.props.data === [])?<span>loading...</span>
             :<ul>{this.props.data.map((item,index) => <li key={index}>{Person(item)}</li> )}</ul>
           }

      
        </div>
        )
  }
}

const mapStateToProps = store => {
  return {
    data: store.data
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setData: (data) => dispatch({type: 'LOAD_PEOPLES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
