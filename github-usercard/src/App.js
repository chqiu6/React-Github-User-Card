import React from 'react';
import './App.css';
import axios from "axios";
import Username from "./Components/Username"

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    users: []
  };
  }
  componentDidMount () {
    axios
    .get("https://api.github.com/users/chqiu6")
    .then(res => {
      console.log("Res data from github api : ", res.data);
      console.log("Updated users' data array :", this.state.users);
      this.setState({
        ...this.state,
        users : res.data
      })
    })
    .catch(err => { 
      console.log("Error msg : ", err);
    });
  }
  render(){
  return (
    <div className="App">
    <Username users = {this.state.users}/>
    </div>
  );
}
}
export default App;
