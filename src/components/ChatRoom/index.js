/* eslint-disable max-len */
import React from 'react';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './styles.scss';

const ChatRoom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
    <Settings />
  </div>
);

export default ChatRoom;
