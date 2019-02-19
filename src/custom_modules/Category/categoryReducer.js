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

const initialState = {
    loading: false,
    errors: [],
    categories: [],
    done: false
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_LIST:
            return {
                ...state,
                loading: true,
                done: false
            }
        case GET_CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            }
        case GET_CATEGORIES_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                loading: true,
            }
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case CREATE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                loading: true,
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default categoryReducer;