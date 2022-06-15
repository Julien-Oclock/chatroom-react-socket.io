import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => ({
  isOther: state.pseudo !== ownProps.author,
  color : state.color
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
