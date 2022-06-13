import { connect } from 'react-redux';
import Form from 'src/components/Form'
import {setMessageValue, sendNewMessage} from 'src/actions'


const mapSateToProps = (state) => ({
  inputValue: state.currentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setMessageValue : (inputValue) =>{
    dispatch(setMessageValue(inputValue))
  },
  sendNewMessage : () => dispatch(sendNewMessage())
});

export default connect(mapSateToProps, mapDispatchToProps)(Form);
