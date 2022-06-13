import React from 'react'
import Messages from 'src/containers/messages';
import Form from 'src/containers/form';
import Settings from 'src/containers/settings';

import './styles.scss';


function Chatroom() {
    return (
      <div className="chatroom">
      <Messages />
      <Form />
      <Settings />
      </div>
    );
  }


export default Chatroom;
