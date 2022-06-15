import { connect } from 'react-redux';
import { setFieldValue } from 'src/actions';

import InputField from 'src/components/Settings/InputField';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.settings[ownProps.inputName],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFieldValue: (value) => dispatch(setFieldValue(ownProps.inputName, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
