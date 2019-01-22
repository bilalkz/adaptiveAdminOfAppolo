//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { verify } from './signupConfirmationApi';

//Constants
import {
  VERIFY_INVITATION_REQUEST,
  VERIFY_INVITATION_REQUEST_SUCCESS,
  VERIFY_INVITATION_REQUEST_FAILURE
}
  from 'modules/constants';

//Handle login request
export function* verifyRequest({ payload }) {
  console.log("verify", payload)
  try {
    let url = `invitation_signup/${payload.id}/`
    let details = {
    }
    const response = yield verify(url, 'POST', details)
    console.log(response, 'verify invite response');
    yield put({
      type: VERIFY_INVITATION_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: VERIFY_INVITATION_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(VERIFY_INVITATION_REQUEST, verifyRequest),
  ]);
}
