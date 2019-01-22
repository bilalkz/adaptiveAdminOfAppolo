//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { reset, changePassword } from './resetPasswordApi';

//Constants
import { 
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST_SUCCESS,
  CHANGE_PASSWORD_REQUEST_FAILURE
} from '../../modules/constants';

//Handle reset password request
export function* resetRequest({ payload }) {
  console.log("reset", payload)
  try {
    // const response = yield call(login('url'));
    let url = 'reset_password/'
    let details = {
      confirmation_key:payload.confirmation_key,
      password:payload.password
    }
    const response = yield reset(url, 'POST', details)
    console.log(response, 'reset response');
    yield put({
      type: RESET_PASSWORD_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: RESET_PASSWORD_FAILURE,
      payload: err,
    });
  }
}

//Handle password change request
export function* changePasswordRequest({ payload }) {
  console.log("change password", payload)
  try {
    // const response = yield call(login('url'));
    let url = 'change_password/'
    let details = {
      old_password:payload.old_password,
      new_password:payload.new_password
    }
    const response = yield changePassword(url, 'POST', details)
    console.log(response, 'change password response');
    yield put({
      type: CHANGE_PASSWORD_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: CHANGE_PASSWORD_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(RESET_PASSWORD, resetRequest),
    takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordRequest )
  ]);
}
