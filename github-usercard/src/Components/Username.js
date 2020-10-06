import React from "react";

const Username = props => {
    console.log("Props data: ", props);
    return(
        <div className = "User">
            <h1>User</h1>
            <h1>{props.users.login}</h1>
            <p>Link : {props.users.html_url}</p>
            <img src = {props.users.avatar_url} />
        </div>
    )
}

export default Username;