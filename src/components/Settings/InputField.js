import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputField = ({
  inputName, inputValue, setFieldValue, ...restProps
}) => (
  <input
    {...restProps}
    name={inputName}
    value={inputValue}
    onChange={(event) => setFieldValue(event.target.value)}
  />
);

InputField.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  setFieldValue: PropTypes.func,
};

InputField.defaultProps = {
  inputValue: '',
  setFieldValue: () => { },
};

export default InputField;
