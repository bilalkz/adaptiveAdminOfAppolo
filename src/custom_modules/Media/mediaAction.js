import {
    GET_MEDIA_LIST,
    GET_MEDIA_LIST_SUCCESS,
    GET_MEDIA_LIST_FAIL,
    CREATE_MEDIA,
    CREATE_MEDIA_SUCCESS,
    CREATE_MEDIA_FAIL,
    UPDATE_MEDIA,
    UPDATE_MEDIA_SUCCESS,
    UPDATE_MEDIA_FAIL,
    DELETE_MEDIA,
    DELETE_MEDIA_SUCCESS,
    DELETE_MEDIA_FAIL,

} from '../../modules/constants';

//get MEDIAs
export const getList = (payload) => ({
    type: GET_MEDIA_LIST,
    payload
})
export const getListSuccess = (payload) => ({
    type: GET_MEDIA_LIST_SUCCESS,
    payload
})
export const getListFail = (payload) => ({
    type: GET_MEDIA_LIST_FAIL,
    payload
})


//create MEDIAS
export const create = (payload) => ({
    type: CREATE_MEDIA,
    payload,
})

export const createSuccess = (payload) => ({
    type: CREATE_MEDIA_SUCCESS,
    payload,
})

export const createFail = (payload) => ({
    type: CREATE_MEDIA_FAIL,
    payload,
})



//update MEDIA
export const update = (payload) => ({
    type: UPDATE_MEDIA,
    payload,
})

export const updateSuccess = (payload) => ({
    type: UPDATE_MEDIA_SUCCESS,
    payload,
})

export const updateFail = (payload) => ({
    type: UPDATE_MEDIA_FAIL,
    payload,
})


//delete MEDIA
export const deleteMEDIA = (payload) => ({
    type: DELETE_MEDIA,
    payload,
})

export const deleteSuccess = (payload) => ({
    type: DELETE_MEDIA_SUCCESS,
    payload,
})

export const deleteFail = (payload) => ({
    type: DELETE_MEDIA_FAIL,
    payload,
})

