import { connect } from 'react-redux';

// Component
// import SignUpConfirmation from '../../views/pages/SignUpConfirmation';
import SignUpConfirmation from './SignUpConfirmation.jsx';
// Actions
import { verify,
  resetInvitation} from './signupConfirmationActions';

// Store props to map with current state
const mapStateToProps = state => ({
  signupConfirmation: state.signupConfirmation
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  verify: details => dispatch(verify({ ...details })),
  resetInvitation: () => dispatch(resetInvitation()),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpConfirmation);
