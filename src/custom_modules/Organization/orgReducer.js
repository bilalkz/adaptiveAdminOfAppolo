import {
    GET_ORGANIZATION_LIST,
    GET_ORGANIZATION_LIST_SUCCESS,
    GET_ORGANIZATION_LIST_FAIL,
    ORGANIZATION_TYPES,
    ORGANIZATION_TYPES_SUCCESS,
    ORGANIZATION_TYPES_FAIL,
    ARCHIVE_FAIL,
    ARCHIVE_SUCCESS
} from '../../modules/constants';

// default initial state
const initialState = {
    organizatins: [],
    orgTypes: [],
    isLoading: false,
    errors: null,
    archived: null,
}

// ------------------------------------
// Action handler methods
// ------------------------------------
const orgainzationReducer = (state = initialState, action) => {
    console.log(action, 'dashboard data request');
    switch (action.type) {
        case GET_ORGANIZATION_LIST:
            return {
                ...state, isLoading: true
            }
        case GET_ORGANIZATION_LIST_SUCCESS:
            return {
                ...state, isLoading: false, organizatins: action.payload
            }
        case GET_ORGANIZATION_LIST_FAIL:
            return {
                ...state, isLoading: false, errors: action.payload
            }
        case ORGANIZATION_TYPES_SUCCESS:
            return {
                ...state, orgTypes: action.payload
            }
        case ARCHIVE_SUCCESS:
            return {
                ...state, archived: action.payload
            }
        case ARCHIVE_FAIL:
            return {
                ...state, errors: action.payload,
            }
        default:
            return state
    };
}
export default orgainzationReducer;

