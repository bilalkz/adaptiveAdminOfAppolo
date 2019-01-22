import { connect } from 'react-redux';

// Component
// import Dashboard from '../../views/Dashboard';
import Dashboard from './Dashboard.jsx';

// Actions
import { } from './dashboardActions';

// Store props to map with current state
const mapStateToProps = state => ({
  dashboard: state.dashboard,
  auth: state.auth
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({

});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
