//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { forgotPassword } from './forgotPasswordApi';

//Constants
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST_SUCCESS, FORGOT_PASSWORD_REQUEST_FAILURE } from '../../modules/constants';

//Handle login request
export function* forgotPasswordRequest({ payload }) {
  console.log("demo", payload)
  try {   
    let url = 'forgot_password/'
    let details = {
      email:payload.email
    }
    const response = yield forgotPassword(url, 'POST', details)
    console.log(response, 'Forgot password response');
    yield put({
      type: FORGOT_PASSWORD_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: FORGOT_PASSWORD_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordRequest),
  ]);
}
