import { all, call, put, takeLatest } from 'redux-saga/effects';

import { clients, createClient, updateClient, searchClient, unArchivedClient } from './clientApi';

import * as a from './clientAction';
//Constants
import {
    GET_CLIENT_LIST,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    CREATE_CLIENT,
    SEARCH_CLIENT,
    UPDATE_CLIENT,
    UNARCHIVE_CLIENT
}
    from '../../modules/constants';

//Handle login request
export function* index() {
    try {
        const response = yield call(clients);
        console.log(response, `this is from client saga`);
        if (response) {
            yield put(a.getClientListSuccess(response))
        }

    }
    catch (err) {
        yield put(a.getClientListFail(err));
    }
}

//create sagas
export function* create({ payload }) {
    try {
        const response = yield call(createClient, payload);
        if (response) {
            yield put(a.createSuccess(response));
        }
    } catch (error) {
        yield put(a.createFail(error))
    }
}

//update sagas
export function* update({ payload }) {
    try {
        const response = yield call(updateClient, payload);
        if (response) {
            yield put(a.updateSuccess(response))
        }
    } catch (error) {
        yield put(a.updateFail(error))
    }
}

//search sagas
export function* search({ payload }) {
    try {
        const response = yield call(searchClient, payload)
        if (response) {
            yield put(a.searchSuccess(response))
        }
    } catch (error) {
        yield put(a.searchFail(error))
    }
}

//unArchived sagas
export function* unArchived({ payload }) {
    try {
        const response = yield call(unArchivedClient, payload);
        if (response) {
            yield put(a.unArchivedSuccess(response));
        }
    } catch (error) {
        yield put(a.unArchivedFail(error));
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_CLIENT_LIST, index),
        takeLatest(CREATE_CLIENT, create),
        takeLatest(UPDATE_CLIENT, update),
        takeLatest(SEARCH_CLIENT, search),
        takeLatest(UNARCHIVE_CLIENT, unArchived),
    ]);
}
