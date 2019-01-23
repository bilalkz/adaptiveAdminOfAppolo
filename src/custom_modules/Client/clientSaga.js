import { all, call, put, takeLatest } from 'redux-saga/effects';


//Constants
import {
    GET_CLIENT_LIST,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL
}
    from '../../modules/constants';

//Handle login request
export function* client({ payload }) {
    console.log("demo", payload)
    try {
        const response = yield call(client('url'));
        const response = { status: true }
        yield put({
            type: GET_CLIENT_LIST_SUCCESS,
            payload: { data: response },
        });
    }
    catch (err) {
        yield put({
            type: GET_CLIENT_LIST_FAIL,
            payload: err,
        });
    }
}


export default function* root() {
    yield all([
        takeLatest(GET_CLIENT_LIST, organizations),
    ]);
}
