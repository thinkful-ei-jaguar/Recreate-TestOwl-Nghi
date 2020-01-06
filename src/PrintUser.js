// Import Library
import React from 'react';

// Return status of user's session
function inSession(session) {
    if(session) {
        return (<p>In Session</p>);
    }
    return (<p>Offline</p>);
}

// Props
// id={user.id}
// name={user.name}
// avatar={user.avatar} => img url
// session={user.session}
export default function PrintUser(props) {
    return (
        <ul id={props.id}>
            <img src={props.avatar} alt='user'/>
            <div>
                <p>{props.name}</p>
                {inSession()}
            </div>
        </ul>
    );
}