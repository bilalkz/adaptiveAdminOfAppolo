import { connect } from 'react-redux';

// Component
// import ChangePassword from '../../views/pages/ChangePassword';
import ChangePassword from './ChangePassword.jsx';
// Actions
import { changePassword } from './changePasswordActions';

// Store props to map with current state
const mapStateToProps = state => ({
  changePassword:state.resetPassword
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
    changePasswordRequest : (details) => dispatch((changePassword({...details})))
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassword);
