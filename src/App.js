// Import Library
import React from 'react';

// Import Components
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

export default function App(props) {
  console.log(props);
  const {users} = this.props.users;
  const {events} = this.props.events;
  console.log('inside',users);
  console.log('inside', events);
  return (
    <main className='App'>
      <Participant users={users}/>
      <Stage users={users}/>
      <Chat events={events}/>
    </main>
  );
}
