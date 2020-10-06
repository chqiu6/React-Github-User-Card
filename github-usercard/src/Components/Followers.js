import React from "react";

const Followers = props => {
    console.log("Props data of followers", props);
    return(
        <div className = "followers-list">
            <h1>Followers</h1>
            {props.follower.map(follow => (
                <div className = "test">
                <h2>{follow.login}</h2>
                <p>Link : {follow.html_url}</p>
                <img src = {follow.avatar_url} alt = {follow.login} />
                </div>
            ))}
        </div>
    )
}

export default Followers;