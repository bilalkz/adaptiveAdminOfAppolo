import { connect } from 'react-redux';

// Component
// import UserProfile from '../../views/UserProfile';
import AdminNavbar from './AdminNavbar.jsx';

// Actions
import { profileOperation} from '../UserProfile/userProfileActions';

// Store props to map with current state
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  profileOperation: details => dispatch(profileOperation({ ...details })),

});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminNavbar);
