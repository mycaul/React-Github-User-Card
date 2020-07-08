
import React from "react";
import "./User.css";

const User = props => {

    const { data } = props;

    return (
        <div className="card">
            <div className="avatar">
                <img src={data.avatar_url} alt="avatar"/>
            </div>

            <div className="cardInfo">
                <h3>{data.name}</h3>
                <p>Location: {data.location}</p>
                <p>Profile: <a href={data.html_url}> {data.login}</a></p>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
                <p>Bio: {data.bio}</p>
            </div>
        </div>
    )
}

export default User;