import { connect } from 'react-redux';

// Component
// import Schedule from './Schedules.jsx';
import Schedule from './Schedules.jsx'
// Actions
import { scheduleRequest, scheduleRequestSuccess } from './scheduleActions';

// Store props to map with current state
const mapStateToProps = (state) => ({ 
  data: state.data 
});

// Actions prop to dispatch
const mapDispatchToProps = (dispatch) => ({
 
  scheduleRequest: (details) => dispatch(scheduleRequest({ ...details })),
  scheduleRequestSuccess: () => dispatch(scheduleRequestSuccess())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);
