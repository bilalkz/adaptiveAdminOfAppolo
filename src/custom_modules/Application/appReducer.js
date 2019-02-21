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

const initialState = {
    loading: false,
    errors: '',
    applications: [],
    done: false
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICATION_LIST:
            return {
                ...state,
                loading: true,
                done: false
            }
        case GET_APPLICATION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                applications: action.payload,
                done: true,
            }
        case GET_APPLICATION_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UPDATE_APPLICATION:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_APPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case UPDATE_APPLICATION_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CREATE_APPLICATION:
            return {
                ...state,
                loading: true,
            }
        case CREATE_APPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true,
            }
        case CREATE_APPLICATION_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case DELETE_APPLICATION:
            return {
                ...state,
                loading: true,
            }
        case DELETE_APPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true,
            }
        case DELETE_APPLICATION_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default applicationReducer;