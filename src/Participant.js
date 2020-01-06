import React from 'react';

import PrintUser from './PrintUser';

// Prints out users in session first
export default function Participant(props) {
    const {users} = this.props.users;
    return (
        <section className='participant'>
            <ul>
                {users.map(user => user.session?
                        (<PrintUser
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        session={user.session}
                        />) : null)}
                {users.map(user => !user.session?
                        (<PrintUser
                        id={user.id}
                        key={user.id}
                        name={user.name}
                        avatar={user.avatar}
                        session={user.session}
                        />) : null)}
            </ul>
        </section>);
}