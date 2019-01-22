//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { sendInvite } from './timesheetApprovalsApi';

//Constants
import { 
  SEND_INVITE_REQUEST,
  SEND_INVITE_REQUEST_SUCCESS,
  SEND_INVITE_REQUEST_FAILURE,
} from '../../modules/constants';

//Handle reset password request
export function* inviteRequest({ payload }) {
  console.log("reset", payload)
  try {
    let url = 'invite_user/'
    let details = {
      email:payload.email
    }
    const response = yield sendInvite(url, 'POST', details)
    console.log(response, 'invite response');
    yield put({
      type: SEND_INVITE_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: SEND_INVITE_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(SEND_INVITE_REQUEST, inviteRequest),
  ]);
}
