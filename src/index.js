// Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import Component/Modules
import App from './App';
import './index.css';

// Import Data
import {users} from './users';
import {events} from './events';

// Get root ID and insert the App elements into the container
ReactDOM.render(
    <App users={users} events={events} />,
    document.getElementById('root')
);