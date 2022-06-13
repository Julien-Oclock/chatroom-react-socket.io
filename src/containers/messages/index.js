import { connect } from 'react-redux';
import Messages from 'src/components/Messages'

const mapSateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {};

export default connect(mapSateToProps, mapDispatchToProps)(Messages);
