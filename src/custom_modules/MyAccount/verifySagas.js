//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { verify } from './verifyApi';

//Constants
import {
  VERIFY_REQUEST,
  VERIFY_REQUEST_SUCCESS,
  VERIFY_REQUEST_FAILURE
}
  from 'modules/constants';

//Handle login request
export function* verifyRequest({ payload }) {
  console.log("verify", payload)
  try {
    let url = `verify_user/${payload.id}/`
    let details = {
    }
    const response = yield verify(url, 'POST', details)
    console.log(response, 'verify response');
    yield put({
      type: VERIFY_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: VERIFY_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(VERIFY_REQUEST, verifyRequest),
  ]);
}
