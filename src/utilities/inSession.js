import React from 'react';

export function inSession(session) {
    if(session) {
        return (<p>In Session</p>);
    }
    return (<p>Offline</p>);
}
