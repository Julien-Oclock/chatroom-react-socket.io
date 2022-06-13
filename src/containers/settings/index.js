import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {toggleSettings} from 'src/actions';

const mapSateToProps = (state) => ({
  open : state.settings.open,
});

const mapDispatchToProps = (dispatch) => ({
  openToggle: () => dispatch(toggleSettings()),
});

export default connect(mapSateToProps, mapDispatchToProps)(Settings);
