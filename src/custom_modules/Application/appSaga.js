import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { applications, createApp, updateApp, remove } from './appApi';

import * as a from './appAction';
//Constants
import {
    GET_APPLICATION_LIST,
    GET_APPLICATION_LIST_SUCCESS,
    GET_APPLICATION_LIST_FAIL,
    CREATE_APPLICATION,
    CREATE_APPLICATION_SUCCESS,
    CREATE_APPLICATION_FAIL,
    UPDATE_APPLICATION,
    UPDATE_APPLICATION_SUCCESS,
    UPDATE_APPLICATION_FAIL,
    DELETE_APPLICATION,
    DELETE_APPLICATION_SUCCESS,
    DELETE_APPLICATION_FAIL,
}
    from '../../modules/constants';

//Handle login request
export function* index() {
    try {
        const response = yield call(applications);

        if (response) {
            console.log(response, `this is from client saga`);
            yield put(a.getListSuccess(response.data.data))
        }

    }
    catch (error) {
        console.log(error.response.data.message);
        yield put(a.getListFail(error.response.data.message));
    }
}

//create sagas
export function* create({ payload }) {
    try {
        const response = yield call(createApp, payload);
        if (response) {
            console.log(response)
            yield call(delay, 2000)
            yield put(a.createSuccess());
            yield index()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.createFail(error.response.data.message))
    }
}

//update sagas
export function* update({ payload }) {
    try {
        const response = yield call(updateApp, payload);
        if (response) {
            yield call(delay, 2000)
            yield put(a.updateSuccess())
            yield index()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.updateFail(error.response.data.message))
    }
}

//Delete Saga
export function* deleteCategory({ payload }) {
    try {
        const response = yield call(remove, payload)
        if (response) {
            yield call(delay, 2000)
            yield put(a.deleteSuccess())
            yield index()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.deleteFail(error.response.data.message))

    }
}


export default function* root() {
    yield all([
        takeLatest(GET_APPLICATION_LIST, index),
        takeLatest(CREATE_APPLICATION, create),
        takeLatest(UPDATE_APPLICATION, update),
        takeLatest(DELETE_APPLICATION, deleteCategory)
    ]);
}
