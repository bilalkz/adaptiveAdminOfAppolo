//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';//axios
// import axios from 'axios';
//Service
import { request } from 'modules/api';
import { loginByApi } from './loginApi';

//Constants
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE
}
from '../../modules/constants';

//Handle login request
export function* loginRequest({ payload }) {
 
  //console.log("loginRequest Saga", payload)
  try {
    // const response = yield call(login('url'));
    let url = 'auth/login/'
    let details = {
      username_or_email:payload.username,
      password:payload.password
    }
    const response = yield loginByApi(url, 'POST', details)
    // console.log('saga login response',response);
    yield put({
      type: LOGIN_REQUEST_SUCCESS,
      payload: response,
    });
  }
  catch (err) {
    yield put({
      type: LOGIN_REQUEST_FAILURE,
      payload: err,
    });
  }
}


// Watches for the LOGIN_REQUEST action type
// WITH the action we dispatched
function* loginRequestWatcher () {  
  // takeLatest() takes the LATEST call of that action and runs it
  // if we we're to use takeEvery, it would take every single
  // one of the actions and kick off a new task to handle it
  // CONCURRENTLY!!!
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export default loginRequestWatcher;  
