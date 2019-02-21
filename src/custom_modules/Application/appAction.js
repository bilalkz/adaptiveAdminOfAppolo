import {
    GET_APPLICATION_LIST,
    GET_APPLICATION_LIST_SUCCESS,
    GET_APPLICATION_LIST_FAIL,
    CREATE_APPLICATION,
    CREATE_APPLICATION_SUCCESS,
    CREATE_APPLICATION_FAIL,
    UPDATE_APPLICATION,
    UPDATE_APPLICATION_SUCCESS,
    UPDATE_APPLICATION_FAIL,
    DELETE_APPLICATION,
    DELETE_APPLICATION_SUCCESS,
    DELETE_APPLICATION_FAIL,

} from '../../modules/constants';

//get APPLICATIONs
export const getList = (payload) => ({
    type: GET_APPLICATION_LIST,
    payload
})
export const getListSuccess = (payload) => ({
    type: GET_APPLICATION_LIST_SUCCESS,
    payload
})
export const getListFail = (payload) => ({
    type: GET_APPLICATION_LIST_FAIL,
    payload
})


//create APPLICATIONS
export const create = (payload) => ({
    type: CREATE_APPLICATION,
    payload,
})

export const createSuccess = (payload) => ({
    type: CREATE_APPLICATION_SUCCESS,
    payload,
})

export const createFail = (payload) => ({
    type: CREATE_APPLICATION_FAIL,
    payload,
})



//update APPLICATION
export const update = (payload) => ({
    type: UPDATE_APPLICATION,
    payload,
})

export const updateSuccess = (payload) => ({
    type: UPDATE_APPLICATION_SUCCESS,
    payload,
})

export const updateFail = (payload) => ({
    type: UPDATE_APPLICATION_FAIL,
    payload,
})


//delete APPLICATION
export const deleteAPPLICATION = (payload) => ({
    type: DELETE_APPLICATION,
    payload,
})

export const deleteSuccess = (payload) => ({
    type: DELETE_APPLICATION_SUCCESS,
    payload,
})

export const deleteFail = (payload) => ({
    type: DELETE_APPLICATION_FAIL,
    payload,
})

