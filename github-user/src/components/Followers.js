
import React from "react";
import axios from "axios";
import User from "./User";

class Followers extends React.Component {
    
    constructor(){
        super();
        this.state = {
            followers: []
        };
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/mycaul/followers")
         .then(res => {
           console.log(res.data);
           this.setState({
             followers: res.data
             });
           });
    }

    componentDidUpdate(prevState, prevProps){
        if(this.state.followers !== prevState.followers) {
            console.log("Followers data has changed")
        }
    }

    render(){
        return(
            this.state.followers.map(follower =>{
                return(
                    <User key={follower.id} data={follower}/>
                )
            })
        )
        
    }
}

export default Followers;