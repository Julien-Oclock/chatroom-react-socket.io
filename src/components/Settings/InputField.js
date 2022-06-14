import React from 'react';
import PropTypes from 'prop-types';


import './styles.scss';



const  InputField = ({inputValue, setFieldValue, inputName,...props}) => {

 
  return (
    <input 
      {...props}
      name={inputName}
      value={inputValue}
      onChange = {(event) => setFieldValue(event.target.value)}
    />
  )
      
}

InputField.propTypes = {
  inputName : PropTypes.string.isRequired,
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
}
 InputField.defaultProps = {
  inputName : '',
  value: '',
  setFieldValue: () => {  }
 }
export default InputField;
