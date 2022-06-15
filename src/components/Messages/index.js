/* eslint-disable arrow-body-style */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Messages/Message';

import './styles.scss';

const Messages = ({ messages }) => {
  const messagesContainer = useRef(null);
  useEffect(() => {
    messagesContainer.current.scrollTo(0, messagesContainer.current.scrollHeight);
  }, [messages]);

  return (
    <div className="messages" ref={messagesContainer}>
      {messages.map((message) => (
        <Message {...message} key={message.id} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Messages.defaultProps = {
  messages: [],
};

export default Messages;
