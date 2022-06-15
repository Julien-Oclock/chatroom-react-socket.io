import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ author, message, isOther , color}) => (
  <div className={classNames('message', { 'message--other': isOther })}>
    <div
      style={
        isOther ? 
        {color : null} :
        {color : color}
      } 
      className="message__author">
      {author}
    </div>
    <div className="message__body">
      {message}
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOther: PropTypes.bool,
  color : PropTypes.string
};

Message.defaultProps = {
  isOther: false,
  color:null
};

export default Message;
