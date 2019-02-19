import { all, call, put, takeLatest } from 'redux-saga/effects';

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
            yield put(a.getListSuccess(response.data))
        }

    }
    catch (err) {
        yield put(a.getListFail(err));
    }
}

//create sagas
export function* create({ payload }) {
    try {
        const response = yield call(createCategory, payload);
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
        const response = yield call(updateCategory, payload);
        if (response) {
            yield put(a.updateSuccess())
            yield index()
        }
    } catch (error) {
        yield put(a.updateFail(error))
    }
}

//Delete Saga
export function* deleteCategory({ payload }) {
    try {
        const response = yield call(remove, payload)
        if (response) {
            yield put(a.deleteSuccess())
            yield index()
        }
    } catch (error) {
        console.log(error);
        yield put(a.deleteFail(error))
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
