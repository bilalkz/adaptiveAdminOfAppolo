import { GET_CLIENT_LIST, GET_CLIENT_LIST_SUCCESS, GET_CLIENT_LIST_FAIL } from '../../modules/constants';

export const getClient = (payload) => ({
    type: GET_CLIENT_LIST,
    payload
})
export const getClientListSuccess = (payload) => ({
    type: GET_CLIENT_LIST_SUCCESS,
    payload
})
export const getClientListFail = (payload) => ({
    type: GET_CLIENT_LIST_SUCCESS,
    payload
})