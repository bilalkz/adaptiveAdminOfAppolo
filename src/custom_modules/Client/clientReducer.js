import {
    GET_CLIENT_LIST,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    CREATE_CLIENT,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAIL,
    SEARCH_CLIENT,
    SEARCH_CLIENT_SUCCESS,
    SEARCH_CLIENT_FAIL,
    UNARCHIVE_CLIENT,
    UNARCHIVE_CLIENT_SUCCESS,
    UNARCHIVE_CLIENT_FAIL,
    UPDATE_CLIENT_SUCCESS
} from '../../modules/constants';

const initialState = {
    loading: false,
    errors: [],
    clients: [],
    unArchived: [],
    done: false
}

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENT_LIST:
            return {
                ...state,
                loading: true,
                done: false
            }
        case GET_CLIENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                clients: action.payload,
            }
        case GET_CLIENT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UPDATE_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case CREATE_CLIENT:
            return {
                ...state,
                loading: true,
            }
        case CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true
            }
        case CREATE_CLIENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case SEARCH_CLIENT:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                clients: action.payload,
            }
        case SEARCH_CLIENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UNARCHIVE_CLIENT:
            return {
                ...state,
                loading: true,
            }
        case UNARCHIVE_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                unArchived: action.payload,
            }
        case UNARCHIVE_CLIENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default clientsReducer;