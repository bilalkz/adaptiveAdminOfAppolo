import {
    GET_ITEMS_LIST,
    GET_ITEMS_LIST_SUCCESS,
    GET_ITEMS_LIST_FAIL,
    CREATE_ITEM,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAIL,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,

} from '../../modules/constants';

//get Items
export const getItems = (payload) => ({
    type: GET_ITEMS_LIST,
    payload
})
export const getItemsListSuccess = (payload) => ({
    type: GET_ITEMS_LIST_SUCCESS,
    payload
})
export const getItemsListFail = (payload) => ({
    type: GET_ITEMS_LIST_FAIL,
    payload
})


//create ITEMS
export const create = (payload) => ({
    type: CREATE_ITEM,
    payload,
})

export const createSuccess = (payload) => ({
    type: CREATE_ITEM_SUCCESS,
    payload,
})

export const createFail = (payload) => ({
    type: CREATE_ITEM_FAIL,
    payload,
})



//update ITEM
export const update = (payload) => ({
    type: UPDATE_ITEM,
    payload,
})

export const updateSuccess = (payload) => ({
    type: UPDATE_ITEM_SUCCESS,
    payload,
})

export const updateFail = (payload) => ({
    type: UPDATE_ITEM_FAIL,
    payload,
})


//delete ITEM
export const deleteItem = (payload) => ({
    type: DELETE_ITEM,
    payload,
})

export const deleteSuccess = (payload) => ({
    type: DELETE_ITEM_SUCCESS,
    payload,
})

export const deleteFail = (payload) => ({
    type: DELETE_ITEM_FAIL,
    payload,
})

