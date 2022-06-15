import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, sendLogin } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.settings.open,
  loading : state.settings.loading,
});

const mapDispatchToProps = (dispatch) => ({
  openToggle: () => dispatch(toggleSettings()),
  onLogin: () => {dispatch(sendLogin())},
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
