//Effects
import { all, call, put, takeLatest, take } from 'redux-saga/effects';

//Service
// import { request } from 'modules/api';
// import { dashboard } from './dashboardApi';
import { organization, create_org, orgTypeApi, update_org, archiveendpoint } from './organizationApi'
import * as a from './organizationAction';
//Constants
import {
    GET_ORGANIZATION_LIST,
    GET_ORGANIZATION_LIST_SUCCESS,
    GET_ORGANIZATION_LIST_FAIL,

    CREATE_ORGANIZATION,
    CREATE_ORGANIZATION_SUCCESS,
    CREATE_ORGANIZATION_FAIL,

    ORGANIZATION_TYPES,
    ORGANIZATION_TYPES_FAIL,
    ORGANIZATION_TYPES_SUCCESS,

    UPDATE_ORGANIZATIONS,
    UPDATE_ORGANIZATIONS_SUCCESS,
    UPDATE_ORGANIZATIONS_FAIL,

    ARCHIVE,
    ARCHIVE_SUCCESS,
    ARCHIVE_FAIL

}
    from '../../modules/constants';

//Handle login request
export function* index() {
    try {
        const response = yield call(organization);
        if (response) {
            yield put(a.getOrganizationsSuccess(response.data));
        }
    }
    catch (err) {
        console.log(err.response.data)

    }
}
export function* create({ payload }) {
    try {
        const response = yield call(create_org, payload);
        if (response) {
            console.log(response)
            yield index();
        }
    }
    catch (err) {
        console.log(err)

    }
}
export function* org_types() {
    try {
        const response = yield call(orgTypeApi);
        console.log(response)
        if (response) {
            yield put(a.getOrgTypesSuccess(response.data));
        }
    }
    catch (err) {
        console.log(err)

    }
}
//update oganizations
export function* update({ payload }) {
    try {
        const response = yield call(update_org, payload);
        console.log(response)
        if (response) {
            yield index();
            console.log(response)
        }
    }
    catch (err) {
        console.log(err)
    }
}
export function* archive({ payload }) {
    try {
        const response = yield call(archiveendpoint, payload);
        console.log(response)
        if (response) {
            yield index();
            yield put(a.archiveOrgSuccess(response))
            console.log(response)
        }
    }
    catch (err) {
        console.log(err)
        yield put(a.archiveOrgFail(err));
    }
}


export default function* root() {
    yield all([
        takeLatest(GET_ORGANIZATION_LIST, index),
        takeLatest(CREATE_ORGANIZATION, create),
        takeLatest(ORGANIZATION_TYPES, org_types),
        takeLatest(UPDATE_ORGANIZATIONS, update),
        takeLatest(ARCHIVE, archive),
    ]);
}
