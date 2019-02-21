import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { index, createMedia, updateMedia, remove } from './mediaApi';

import * as a from './mediaAction';
//Constants
import {
    GET_MEDIA_LIST,
    GET_MEDIA_LIST_SUCCESS,
    GET_MEDIA_LIST_FAIL,
    CREATE_MEDIA,
    CREATE_MEDIA_SUCCESS,
    CREATE_MEDIA_FAIL,
    UPDATE_MEDIA,
    UPDATE_MEDIA_SUCCESS,
    UPDATE_MEDIA_FAIL,
    DELETE_MEDIA,
    DELETE_MEDIA_SUCCESS,
    DELETE_MEDIA_FAIL,
}
    from '../../modules/constants';

//Handle login request
export function* mediaIndex() {
    try {
        let response = yield call(index);
        console.log(response.data.data);
        yield put(a.getListSuccess(response.data.data))
    }
    catch (error) {
        console.log(error.response.data.message)
        yield put(a.getListFail(error.response.data.message));
    }
}

//create sagas
export function* create({ payload }) {
    try {
        const response = yield call(createMedia, payload);
        if (response) {
            console.log(response)
            yield call(delay, 2000)
            yield put(a.createSuccess());
            yield mediaIndex()
        }
    } catch (error) {
        console.log(error.response.data)
        yield put(a.createFail(error.response.data.message))
    }
}

//update sagas
export function* update({ payload }) {
    try {
        const response = yield call(updateMedia, payload);
        if (response) {
            yield call(delay, 2000)
            yield put(a.updateSuccess())
            yield mediaIndex()
        }
    } catch (error) {
        console.log(error.response.data)
        yield put(a.updateFail(error.response.data.message))
    }
}

//Delete Saga
export function* deleteMedia({ payload }) {
    try {
        const response = yield call(remove, payload)
        if (response) {
            yield call(delay, 2000)
            yield put(a.deleteSuccess())
            yield mediaIndex()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.deleteFail(error.response.data.message))
    }
}




export default function* root() {
    yield all([
        takeLatest(GET_MEDIA_LIST, mediaIndex),
        takeLatest(CREATE_MEDIA, create),
        takeLatest(UPDATE_MEDIA, update),
        takeLatest(DELETE_MEDIA, deleteMedia)
    ]);
}
