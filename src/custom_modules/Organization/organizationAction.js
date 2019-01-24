
import {
    GET_ORGANIZATION_LIST,
    GET_ORGANIZATION_LIST_SUCCESS,
    GET_ORGANIZATION_LIST_FAIL,

    CREATE_ORGANIZATION,
    CREATE_ORGANIZATION_SUCCESS,
    CREATE_ORGANIZATION_FAIL,

    ORGANIZATION_TYPES,
    ORGANIZATION_TYPES_SUCCESS,
    ORGANIZATION_TYPES_FAIL,

    UPDATE_ORGANIZATIONS,
    UPDATE_ORGANIZATIONS_FAIL,
    UPDATE_ORGANIZATIONS_SUCCESS,

    //archive
    ARCHIVE,
    ARCHIVE_FAIL,
    ARCHIVE_SUCCESS



} from '../../modules/constants';

// get organizations
export const getOrganizations = (payload) => ({
    type: GET_ORGANIZATION_LIST,
    payload
})
export const getOrganizationsSuccess = (payload) => ({
    type: GET_ORGANIZATION_LIST_SUCCESS,
    payload
})
export const getOrganizationsFail = (payload) => ({
    type: GET_ORGANIZATION_LIST_FAIL,
    payload
})
//create organizations
export const create = (payload) => ({
    type: CREATE_ORGANIZATION,
    payload
})
export const createSuccess = (payload) => ({
    type: CREATE_ORGANIZATION_SUCCESS,
    payload
})
export const createFail = (payload) => ({
    type: CREATE_ORGANIZATION_FAIL,
    payload
})

// get org_types

export const getOrgTypes = (payload) => ({
    type: ORGANIZATION_TYPES,
    payload
})
export const getOrgTypesSuccess = (payload) => ({
    type: ORGANIZATION_TYPES_SUCCESS,
    payload
})
export const getOrgTypesFail = (payload) => ({
    type: ORGANIZATION_TYPES_FAIL,
    payload
})
//update organizations

export const updateOrg = (payload) => ({
    type: UPDATE_ORGANIZATIONS,
    payload
})
export const updateOrgSuccess = (payload) => ({
    type: UPDATE_ORGANIZATIONS_SUCCESS,
    payload
})
export const updateOrgFail = (payload) => ({
    type: UPDATE_ORGANIZATIONS_FAIL,
    payload
})
// archive

export const archiveOrg = (payload) => ({
    type: ARCHIVE,
    payload
})
export const archiveOrgSuccess = (payload) => ({
    type: ARCHIVE_SUCCESS,
    payload
})
export const archiveOrgFail = (payload) => ({
    type: ARCHIVE_FAIL,
    payload
})

