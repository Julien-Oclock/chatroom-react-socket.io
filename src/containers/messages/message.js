import { connect } from 'react-redux';
import Message from 'src/components/Message'

const mapSateToProps = (state, ownProps) => ({
  isOther : state.pseudo !== ownProps.author,
});

const mapDispatchToProps = {};

export default connect(mapSateToProps, mapDispatchToProps)(Message);
