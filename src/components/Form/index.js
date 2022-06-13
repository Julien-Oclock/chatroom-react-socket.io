import React, {useEffect, useRef} from 'react'
import {Send} from 'react-feather'
import PropTypes from 'prop-types'
import './styles.scss';


function Form({ inputValue, setMessageValue, sendNewMessage }) {

  const inputRef = useRef(null)

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setMessageValue(e.target.value);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    sendNewMessage()

  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmitForm}>
    <input 
      className="form__input" 
      type="text" 
      placeholder="your message..."
      onChange={ handleOnChange }
      value={ inputValue }
      ref={ inputRef }
    />
    <button className="form__button" type="submit">
      <Send size={32} className='form__send'/>
    </button>
    </form>
  );
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setMessageValue : PropTypes.func,
  sendNewMessage : PropTypes.func,
}
Form.defaultProps = {
  inputValue: '',
  setMessageValue: () =>{},
  sendNewMessage: () =>{}
}


export default Form;
