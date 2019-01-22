import { connect } from 'react-redux';

// Component
// import TimesheetApprovals from '../../views/TimesheetApprovals';
import TimesheetApprovals from './TimesheetApprovals.jsx';
// Actions
import { sendInvite } from './timesheetApprovalsActions';

// Store props to map with current state
const mapStateToProps = state => ({ timesheetApprovals: state.timesheetApprovals });

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  sendInvitation: details => dispatch(sendInvite({ ...details })),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimesheetApprovals);
