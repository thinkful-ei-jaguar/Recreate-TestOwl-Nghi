import React from 'react';

import PrintStageUser from './PrintStageUser';

export default function Stage(props) {
    return (
    <section className='stage'>
        <ul> {props.users.map(user => user.onStage? 
            <PrintStageUser 
            name={user.name} 
            avatar={user.avatar} 
            key={'onStage'+user.id}
            />: null)}
            
        </ul>
    </section>);
}