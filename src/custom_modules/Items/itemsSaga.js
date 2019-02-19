import { all, call, put, takeLatest } from 'redux-saga/effects';

import { } from './itemsApi';

import * as a from './itemsAction';
//Constants
import {
    GET_ITEMS_LIST,
    GET_ITEMS_LIST_SUCCESS,
    GET_ITEMS_LIST_FAIL,
    CREATE_ITEM,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAIL,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
}
    from '../../modules/constants';

//Handle login request
export function* index() {
    try {
        const response = yield call(clients);

        if (response) {
            console.log(response, `this is from client saga`);
            yield put(a.getItemsListSuccess(response.data))
        }

    }
    catch (err) {
        yield put(a.getItemsListFail(err));
    }
}

//create sagas
export function* create({ payload }) {
    try {
        const response = yield call(createClient, payload);
        if (response) {
            console.log(response)
            yield index()
            yield put(a.createSuccess());
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
            yield put(a.updateSuccess())
            yield index()
        }
    } catch (error) {
        yield put(a.updateFail(error))
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_ITEMS_LIST, index),
        takeLatest(CREATE_ITEM, create),
        takeLatest(UPDATE_ITEM, update),
        takeLatest(DELETE_ITEM, remove)
    ]);
}
