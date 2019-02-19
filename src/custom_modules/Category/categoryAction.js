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

} from '../../modules/constants';

//get CATEGORYs
export const getList = (payload) => ({
    type: GET_CATEGORIES_LIST,
    payload
})
export const getListSuccess = (payload) => ({
    type: GET_CATEGORIES_LIST_SUCCESS,
    payload
})
export const getListFail = (payload) => ({
    type: GET_CATEGORIES_LIST_FAIL,
    payload
})


//create CATEGORYS
export const create = (payload) => ({
    type: CREATE_CATEGORY,
    payload,
})

export const createSuccess = (payload) => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload,
})

export const createFail = (payload) => ({
    type: CREATE_CATEGORY_FAIL,
    payload,
})



//update CATEGORY
export const update = (payload) => ({
    type: UPDATE_CATEGORY,
    payload,
})

export const updateSuccess = (payload) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload,
})

export const updateFail = (payload) => ({
    type: UPDATE_CATEGORY_FAIL,
    payload,
})


//delete CATEGORY
export const deleteCategory = (payload) => ({
    type: DELETE_CATEGORY,
    payload,
})

export const deleteSuccess = (payload) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload,
})

export const deleteFail = (payload) => ({
    type: DELETE_CATEGORY_FAIL,
    payload,
})

