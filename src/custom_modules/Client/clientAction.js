import {
    GET_CLIENT_LIST,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    CREATE_CLIENT,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAIL,
    UPDATE_CLIENT,
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_FAIL,
    SEARCH_CLIENT,
    SEARCH_CLIENT_SUCCESS,
    SEARCH_CLIENT_FAIL,
    UNARCHIVE_CLIENT,
    UNARCHIVE_CLIENT_SUCCESS,
    UNARCHIVE_CLIENT_FAIL,
} from '../../modules/constants';

//get client
export const getClient = (payload) => ({
    type: GET_CLIENT_LIST,
    payload
})
export const getClientListSuccess = (payload) => ({
    type: GET_CLIENT_LIST_SUCCESS,
    payload
})
export const getClientListFail = (payload) => ({
    type: GET_CLIENT_LIST_FAIL,
    payload
})


//create client
export const create = (payload) => ({
    type: CREATE_CLIENT,
    payload,
})

export const createSuccess = (payload) => ({
    type: CREATE_CLIENT_SUCCESS,
    payload,
})

export const createFail = (payload) => ({
    type: CREATE_CLIENT_FAIL,
    payload,
})



//update client
export const update = (payload) => ({
    type: UPDATE_CLIENT,
    payload,
})

export const updateSuccess = (payload) => ({
    type: UPDATE_CLIENT_SUCCESS,
    payload,
})

export const updateFail = (payload) => ({
    type: UPDATE_CLIENT_FAIL,
    payload,
})


//Search client
export const search = (payload) => ({
    type: SEARCH_CLIENT,
    payload,
})

export const searchSuccess = (payload) => ({
    type: SEARCH_CLIENT_SUCCESS,
    payload,
})

export const searchFail = (payload) => ({
    type: SEARCH_CLIENT_FAIL,
    payload,
})


//UNarchive client
export const unArchived = (payload) => ({
    type: UNARCHIVE_CLIENT,
    payload,
})

export const unArchivedSuccess = (payload) => ({
    type: UNARCHIVE_CLIENT_SUCCESS,
    payload,
})

export const unArchivedFail = (payload) => ({
    type: UNARCHIVE_CLIENT_FAIL,
    payload,
})