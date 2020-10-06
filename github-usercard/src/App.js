import React from 'react';
import './App.css';
import axios from "axios";
import Username from "./Components/Username";
import Followers from "./Components/Followers";

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    users: [],
    followers: []
  };
  }
  //user
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

  //followers
  axios
  .get("https://api.github.com/users/chqiu6/followers")
  .then(res => {
    console.log("Res data for followers : ", res.data);
    this.setState({
      ...this.state, 
      followers : res.data
    })
  })
  .catch(err => {
    console.log("Err data of followers : ", err);
  });
  }

  render(){
  return (
    <div className="App">
    <Username users = {this.state.users}/>
    <Followers follower = {this.state.followers} />
    </div>
  );
}
}
export default App;
