
import React from 'react';
import axios from "axios";
import User from "./components/User";
import Followers from "./components/Followers";
import "./App.css";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: []
    };
  }

  
  componentDidMount(){
    axios.get("https://api.github.com/users/mycaul")
         .then(res => {
           console.log(res.data);
           this.setState({
             user: res.data
           });
         });
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user) {
      console.log("User data has changed");
    }  
  }


  render(){
    return(
      <div className="App">
        <h1>My Github Profile</h1>
        <User data={this.state.user}/>
        <h2>DA GANG</h2>
        <Followers />
      </div>
    );
  }
}

export default App;