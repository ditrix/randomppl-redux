import React,{Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Person from './Person'
import {loadData} from './actions'


class App extends Component {
  
  componentDidMount(){
    this.props.loadData()
  }



  render(){
       return (
        <div className="App">
           <h1>randomppl redux only</h1>
           {(this.props.loading)?<span>loading...</span>
             :(this.props.error)?<span>error load data</span>
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
    loadData: () => loadData(dispatch)
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
