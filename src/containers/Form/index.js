import { connect } from 'react-redux';

import {
  setMessageValue,
  sendNewMessage,
} from 'src/actions';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  inputValue: state.currentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setMessageValue: (inputValue) => dispatch(setMessageValue(inputValue)),
  sendNewMessage: () => dispatch(sendNewMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
