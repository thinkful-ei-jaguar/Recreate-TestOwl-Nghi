// Import Library
import React from 'react';

// Import Components
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

// Import Styling
import './App.css';

export default function App(props) {
  // If chat is hidden, show
  console.log(document.getElementById('chat').classList.contains('chat hide'));
  function showChat() {
    if (document.getElementById('chat').classList.contains('hide')){
      document.getElementsByClassName('chat').classList.remove('hide');
      document.getElementsByClassName('participant').classList.add('hide');
    }
  }
  // If participant is hidden, show
  function showParticipant() {
    if (document.getElementsByClassName('participant').classList.contains('hide')){
      document.getElementsByClassName('chat').classList.add('hide');
      document.getElementsByClassName('participant').classList.remove('hide');
    }
  }

  return (
    <main className='App'>
      <div className='left'>
          <button className='showChat' onClick={e => showChat()}>Chat</button>
          <button className='showParticipant' onClick={e => showParticipant()}>Participants</button>
          <Participant users={props.users}/>
          <Chat events={props.events} users={props.users}/>
      </div>
      <Stage users={props.users}/>
    </main>
  );
}
