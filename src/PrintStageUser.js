import React from 'react';

function PrintStageUser(props) {
    return (
        <li>
            <div>
                <h2>{props.name}</h2>
                <div className='redbar'>
                </div>
            </div>
            <img src={props.avatar} alt='avatar'/>
        </li>
    );
}

export default PrintStageUser;