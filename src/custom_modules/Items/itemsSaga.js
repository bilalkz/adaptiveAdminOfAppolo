import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { items, createItem, updateItem, remove } from './itemsApi';

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
        const response = yield call(items);

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
        console.log(payload);
        const response = yield call(createItem, payload);
        if (response) {
            console.log(response)
            yield call(delay, 2000)
            yield put(a.createSuccess());
            yield index()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.createFail(error.response.data))
    }
}

//update sagas
export function* update({ payload }) {
    try {
        const response = yield call(updateItem, payload);
        if (response) {
            yield call(delay, 2000)
            yield put(a.updateSuccess())
            yield index()
        }
    } catch (error) {
        console.log(error.response.data.message);
        yield put(a.updateFail(error.response.data))
    }
}

//Delete Saga
export function* deleteItem({ payload }) {
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
        takeLatest(GET_ITEMS_LIST, index),
        takeLatest(CREATE_ITEM, create),
        takeLatest(UPDATE_ITEM, update),
        takeLatest(DELETE_ITEM, deleteItem)
    ]);
}
