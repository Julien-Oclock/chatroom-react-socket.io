import React from 'react'
import Messages from 'src/containers/messages';
import Form from 'src/containers/form';

import './styles.scss';


function Chatroom() {
    return (
      <div className="chatroom">
      <Messages />
      <Form />
      </div>
    );
  }


export default Chatroom;
