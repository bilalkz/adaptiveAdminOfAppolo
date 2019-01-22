import { connect } from 'react-redux';

// Component
// import ForgotPassword from '../../views/pages/ForgotPassword';
import ForgotPassword from './ForgotPassword.jsx';
// Actions
import { forgotPassword } from './forgotPasswordActions';

// Store props to map with current state
const mapStateToProps = state => ({ forgot: state.forgot });

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  forgotPassword: details => dispatch(forgotPassword({ ...details })),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
