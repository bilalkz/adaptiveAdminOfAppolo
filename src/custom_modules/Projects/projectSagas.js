//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
import { request } from 'modules/api';
import { getList, addProject, updateProject, updateProjectStatus } from './projectApi';

//Constants
import {
    GET_PROJECT_LIST,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAILURE,
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_REQUEST_SUCCESS,
    ADD_PROJECT_REQUEST_FAILURE,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_REQUEST_SUCCESS,
    UPDATE_PROJECT_REQUEST_FAILURE,
    CHANGE_PROJECT_STATUS_REQUEST,
    CHANGE_PROJECT_STATUS_REQUEST_SUCCESS,
    CHANGE_PROJECT_STATUS_REQUEST_FAILURE
}
  from 'modules/constants';


export function* getProjectList({ payload }) {
  console.log("list", payload)
  try {
    let url = `project_list/${payload.id}/`
    let details = {
    }
    const response = yield getList(url, 'GET', details)
    console.log(response, 'list response');
    yield put({
      type: GET_PROJECT_LIST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: GET_PROJECT_LIST_FAILURE,
      payload: err,
    });
  }
}

export function* addProjectRequest({ payload }) {
  console.log("Add project", payload)
  try {
    let url = `project_create/`
    let details = {
      ...payload
    }
    const response = yield addProject(url, 'POST', details)
    console.log(response, 'add project response');
    yield put({
      type: ADD_PROJECT_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: ADD_PROJECT_REQUEST_FAILURE,
      payload: err,
    });
  }
}

export function* updateProjectRequest({ payload }) {
  console.log("update project", payload)
  try {
    let url = `project_update/${payload.id}/`
    let details = {}
    Object.keys(payload).map((key, index) => {
      if(payload[key] ==  null){

      }else{
        details = {...details, [key]:payload[key]}
      }
    });
    // console.log(details, 'check details');
    const response = yield updateProject(url, 'PATCH', details)
    console.log(response, 'update project response');
    yield put({
      type: UPDATE_PROJECT_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: UPDATE_PROJECT_REQUEST_FAILURE,
      payload: err,
    });
  }
}

export function* changeProjectStatusRequest({ payload }) {
  console.log("change project status", payload)
  try {
    let url = `project_update_status/${payload.id}/`
    let details = {}
    const response = yield updateProjectStatus(url, 'PATCH', details)
    console.log(response, 'update project status response');
    yield put({
      type: CHANGE_PROJECT_STATUS_REQUEST_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    yield put({
      type: CHANGE_PROJECT_STATUS_REQUEST_FAILURE,
      payload: err,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(GET_PROJECT_LIST, getProjectList),
    takeLatest(ADD_PROJECT_REQUEST, addProjectRequest),
    takeLatest(UPDATE_PROJECT_REQUEST, updateProjectRequest),
    takeLatest(CHANGE_PROJECT_STATUS_REQUEST, changeProjectStatusRequest),
  ]);
}
