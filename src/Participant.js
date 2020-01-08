import React from 'react';

import PrintUser from './PrintUser';

// Prints out users in session first
export default function Participant(props) {
    return (
        <section className='participant hide'>
            <ul>{/*Conditional Rendering: Logical & Operator*/}
                {props.users.map(user => user.inSession &&
                        (<PrintUser
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        session={user.inSession}
                        />))}
                {props.users.map(user => !user.inSession &&
                        (<PrintUser
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        session={user.inSession}
                        />))}
            </ul>
        </section>);
}