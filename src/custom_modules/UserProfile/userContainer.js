import { connect } from 'react-redux';

// Component
// import UserProfile from '../../views/UserProfile';
import UserProfile from './UserProfile.jsx';

// Actions
import { profileOperation, profileCreate } from './userProfileActions';

// Store props to map with current state
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  profileOperation: details => dispatch(profileOperation({ ...details })),
  profileCreate: details =>  dispatch(profileCreate({ ...details }))
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
