import { connect } from 'react-redux';

// Component
// import Register from '../../views/pages/Register';
import Register from './Register.jsx';
// Actions
import { register, resetRegister } from './registerActions'

// Store props to map with current state
const mapStateToProps = state => ({
  signup: state.register
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  register: details => dispatch(register({ ...details })),
  resetRegister: () => dispatch(resetRegister()),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
