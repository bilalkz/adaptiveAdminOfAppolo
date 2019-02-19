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

const initialState = {
    loading: false,
    errors: [],
    items: [],
    done: false
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_LIST:
            return {
                ...state,
                loading: true,
                done: false
            }
        case GET_ITEMS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            }
        case GET_ITEMS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UPDATE_ITEM:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case UPDATE_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CREATE_ITEM:
            return {
                ...state,
                loading: true,
            }
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case CREATE_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case DELETE_ITEM:
            return {
                ...state,
                loading: true,
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_ITEM_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default itemsReducer;