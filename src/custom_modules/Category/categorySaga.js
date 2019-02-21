import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { categories, createCategory, updateCategory, remove } from './categoryApi';

import * as a from './categoryAction';
//Constants
import {
    GET_CATEGORIES_LIST,
    GET_CATEGORIES_LIST_SUCCESS,
    GET_CATEGORIES_LIST_FAIL,
    CREATE_CATEGORY,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
}
    from '../../modules/constants';

//Handle login request
export function* index() {
    try {
        const response = yield call(categories);

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
        const response = yield call(createCategory, payload);
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
        const response = yield call(updateCategory, payload);
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
        takeLatest(GET_CATEGORIES_LIST, index),
        takeLatest(CREATE_CATEGORY, create),
        takeLatest(UPDATE_CATEGORY, update),
        takeLatest(DELETE_CATEGORY, deleteCategory)
    ]);
}
