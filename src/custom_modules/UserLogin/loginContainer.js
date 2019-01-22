import { connect } from 'react-redux';

// Component
// import Login from '../../views/pages/Login';
import Login from './Login.jsx';
// Actions
import { loginRequest, loginRedirectReset } from './loginActions';

// Store props to map with current state
const mapStateToProps = (state) => ({ 
  auth: state.auth 
});

// Actions prop to dispatch
const mapDispatchToProps = (dispatch) => ({
  //while clicking component componet will send props to this function 
  //get the data form componet and put as a parameter in details
  // dispatch the action the reducer and via middleware redux saga to reducers
  login: (details) => dispatch(loginRequest({ ...details })),
  loginRedirectReset: () => dispatch(loginRedirectReset())
});

// connect states and dispatchers with components
// Login componet going to get the props
// We can retun all the props in the Login component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
