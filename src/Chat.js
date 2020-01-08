import React from 'react';

import PrintChat from './PrintChat';

export default function Chat(props) {
    // Order events from earliest to later
    const events = props.events.sort(function(a,b){return a.timestamp-b.timestamp});
    return (
        <section className='chat' id='chat'>
            <ul>
                {events.map((event,index) =>
                    <PrintChat
                    key={event.participantId + '-'+ index}
                    event={event}
                    user={props.users.find(user => user.id === event.participantId)}
                    />
                    )}
            </ul>
        </section>
    );
}