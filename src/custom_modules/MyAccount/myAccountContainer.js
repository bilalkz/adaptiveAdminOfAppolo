import { connect } from 'react-redux';

// Component
// import MyAccount from '../../views/MyAccount'
import MyAccount from './MyAccount.jsx';

// Actions
import { verify, resetVerify } from './verifyActions';

// Store props to map with current state
const mapStateToProps = state => ({
  verify: state.verifyUser
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  verify: details => dispatch(verify({ ...details })),
  resetVerify: () => dispatch(resetVerify()),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccount);
