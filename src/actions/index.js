export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setMessageValue = (inputValue) =>({
  type: 'SET_MESSAGE_VALUE',
  inputValue,
})

export const sendNewMessage = () =>({
  type: 'SEND_NEW_MESSAGE',
})

export const toggleSettings = () => ({
  type: 'TOGGLE_SETTINGS',
})

export const setFieldValue = (fieldName, value) => ({
  type: 'SET_FIELD_VALUE',
  value,
  fieldName
})

