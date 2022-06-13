// import npm
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types';

// import components
import Message from './Message';

// import styles
import './styles.scss';




function Messages({messages}) {
  const messageContainer = useRef(null);

  useEffect(() => {
    messageContainer.current.scrollTo(0, messageContainer.current.scrollHeight);
  },[messages]);

  useRef

  return (
    <div className="messages" ref={messageContainer}>
    {messages.map((message)=> (
      <Message {...message} key={message.id}/>
    ))}
    </div>
  );
}

Messages.propTypes = {
  messages : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired
    })
  )
}

Messages.defaultProps = {
  messages: []
}

  
export default Messages;
