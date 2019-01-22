//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { dashboard } from './dashboardApi';

//Constants
import {
  REQUEST_DASHBOARD_DATA,
  REQUEST_DASHBOARD_DATA_SUCCESS,
  REQUEST_DASHBOARD_DATA_FAILURE
}
  from 'modules/constants';

//Handle login request
export function* dashboardDataRequest({ payload }) {
  console.log("demo", payload)
  try {
    // const response = yield call(dashboard('url'));
    const response = { status: true }
    yield put({
      type: REQUEST_DASHBOARD_DATA_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: REQUEST_DASHBOARD_DATA_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(REQUEST_DASHBOARD_DATA, dashboardDataRequest),
  ]);
}
