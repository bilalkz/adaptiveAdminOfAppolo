//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { profile } from './userProfileApi';

//Constants
import {
  REQUEST_USER_PROFILE,
  REQUEST_USER_PROFILE_SUCCESS,
  REQUEST_USER_PROFILE_FAILURE
}
  from 'modules/constants';

//Handle login request
export function* handleProfileRequest({ payload }) {
  console.log("user editr ", payload)
  console.log(localStorage.getItem('user_profile'));

  try {
    let url = `user_profile/${localStorage.getItem('user_profile')}/`
    let method = payload.method == 'GET' ? 'GET' : 'PATCH'
    let details = new FormData()
    Object.keys(payload).map((name) => {
      if(name == "method"){
      }
      else{
        details.append(name, payload[name]);
      }
    })
    // yield details.append('first_name', payload.first_name);
    // yield details.append('last_name', payload.last_name);
    // yield details.append('timezone', payload.timezone);
    // yield details.append('phone', payload.phone);
    // if(payload.image){
    //   yield details.append('image', payload.image);
    // }
    const response = yield profile(url, method, payload.method == 'GET' ? '' : details)
    console.log(response, 'profile response');
    yield put({
      type: REQUEST_USER_PROFILE_SUCCESS,
      payload: { data: response, notify:payload.method == 'GET' ? false : true  },
    });
  }
  catch (err) {
    yield put({
      type: REQUEST_USER_PROFILE_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(REQUEST_USER_PROFILE, handleProfileRequest),
  ]);
}
