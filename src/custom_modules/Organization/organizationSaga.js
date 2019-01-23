//Effects
import { all, call, put, takeLatest } from 'redux-saga/effects';

//Service
// import { request } from 'modules/api';
// import { dashboard } from './dashboardApi';
import { organization, create_org } from './organizationApi'

//Constants
import {
    GET_ORGANIZATION_LIST,
    GET_ORGANIZATION_LIST_SUCCESS,
    GET_ORGANIZATION_LIST_FAIL
}
    from '../../modules/constants';

//Handle login request
export function* organizations({ payload }) {
    console.log("demo", payload)
    try {
        // const baseURLOrganization = 'http://104.248.151.204:81000/api';
        const response = yield call(organization(`/organization_list/`));
        // const response = { status: true }
        if (response) {
            yield put({
                type: GET_ORGANIZATION_LIST_SUCCESS,
                payload: { data: response },
            });
        }
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_ORGANIZATION_LIST_FAIL,
            payload: err,
        });
    }
}
export function* create({ payload }) {
    console.log("demo", payload)
    try {
        // const baseURLOrganization = 'http://104.248.151.204:81000/api';
        const response = yield call(create_org(`/organization_list/`));
        // const response = { status: true }
        if (response) {
            yield put({
                type: GET_ORGANIZATION_LIST_SUCCESS,
                payload: { data: response },
            });
        }
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_ORGANIZATION_LIST_FAIL,
            payload: err,
        });
    }
}


export default function* root() {
    yield all([
        takeLatest(GET_ORGANIZATION_LIST, organizations),
    ]);
}
