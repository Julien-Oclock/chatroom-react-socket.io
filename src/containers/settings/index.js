import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {toggleSettings, sendLogin} from 'src/actions';

const mapSateToProps = (state) => ({
  open : state.settings.open,
});

const mapDispatchToProps = (dispatch) => ({
  openToggle: () => dispatch(toggleSettings()),
  onLogin : () => {dispatch(sendLogin())}
});

export default connect(mapSateToProps, mapDispatchToProps)(Settings);
