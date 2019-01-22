import { connect } from 'react-redux';

// Component
// import VerifyUser from '../../views/pages/VerifyUser';
import VerifyUser from './VerifyUser.jsx';
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
)(VerifyUser);
