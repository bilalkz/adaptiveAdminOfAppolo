//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { register } from './registerApi';

//Constants
import {
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAILURE
}
  from 'modules/constants';


// The url derived from our .env file
// const signupUrl = `${process.env.REACT_APP_API_URL}/api/auth/signup`


//Handle login request
// This will be run when the REGISTER_REQUESTING
// Action is found by the watcher
export function* registerRequest({ payload }) {
  console.log("register", payload)
  try {
    let url = 'auth/signup/'
    let details = {
      email:payload.email,
      username:payload.username,
      password:payload.password,
      first_name:payload.first_name,
      last_name:payload.last_name,
      timezone:payload.timezone
    };
    // pulls "calls" to our registerApi with our email and password
    // from our dispatched register action, and will PAUSE
    // here until the API async function, is complete!
    // const response = yield call(signupApi, email, password)

    const response = yield register(url, 'POST', details);
    // console.log(response, 'Login response');
    // when the above api call has completed it will "put",
    // or dispatch, an action of type SIGNUP_SUCCESS with
    // the successful response.
    yield put({
      type: REGISTER_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    // if the api call fails, it will "put" the REGISTER_ERROR
    // into the dispatch along with the error.
    yield put({
      type: REGISTER_REQUEST_FAILURE,
      payload: err,
    });
  }
}

// Watches for the REGISTER_REQUESTING action type
// When it gets it, it will call signupFlow()
// WITH the action we dispatched
function* registerWatcher () {  
  // takeLatest() takes the LATEST call of that action and runs it
  // if we we're to use takeEvery, it would take every single
  // one of the actions and kick off a new task to handle it
  // CONCURRENTLY!!!
  yield takeLatest(REGISTER_REQUEST, registerRequest);
}

export default registerWatcher;  
