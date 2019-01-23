
import { GET_ORGANIZATION_LIST, GET_ORGANIZATION_LIST_SUCCESS, GET_ORGANIZATION_LIST_FAIL } from '../../modules/constants';

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