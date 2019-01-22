import { connect } from 'react-redux';

// Component
// import ResetPassword from '../../views/pages/ResetPassword';
import ResetPassword from './ResetPassword.jsx';

// Actions
import { reset, resetRedirectReset } from './resetPasswordActions';

// Store props to map with current state
const mapStateToProps = state => ({ resetPasword: state.resetPassword });

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  reset: details => dispatch(reset({ ...details })),
  resetRedirectReset: () => dispatch(resetRedirectReset())
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
