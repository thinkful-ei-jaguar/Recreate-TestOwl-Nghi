import React from 'react';

export default function PrintChat(props) {
    // Checks for message type and prints chat accordingly
    switch(props.event.type) {
        case 'message':
            return (
                <li>
                    <img src={props.user.avatar} alt='avatar'/>
                    <span>{props.user.name}</span>
                    <span> {props.event.time}</span>
                    <p>{props.event.message}</p>
                </li>
            );
        // eslint-disable-next-line no-fallthrough
        case 'thumbs-up':
        case 'thumbs-down':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> gave a </span>
                    <span>{props.event.type}</span>
                </li>
            );
        case 'raise-hand':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> raised their hand </span>
                </li>
            );
        case 'clap':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> clapped </span>
                </li>
            );
        case 'join':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> joined </span>
                </li>
            );
        case 'leave':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> left </span>
                </li>
            );
        case 'join-stage':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> joined the stage </span>
                </li>
            );
        case 'leave-stage':
            return (
                <li>
                    <span>{props.user.name}</span>
                    <span> left the stage </span>
                </li>
            );
        default:
            break;
    }

}   