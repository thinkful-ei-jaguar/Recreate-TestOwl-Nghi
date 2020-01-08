// Import Library
import React from 'react';

import {inSession} from './utilities/inSession';
// Props
// id={user.id}
// name={user.name}
// avatar={user.avatar} => img url
// session={user.session}
export default function PrintUser(props) {
    return (
        <li id={props.id}>
            <img src={props.avatar} alt='user'/>
            <div>
                <p>{props.name}</p>
                {inSession(props.session)}
            </div>
        </li>
    );
}