
import { GET_CLIENT_LIST, GET_CLIENT_LIST_SUCCESS, GET_CLIENT_LIST_FAIL } from '../../modules/constants';

const initialState = {
    loading: false,
    errors: [],
    clients: [],
}

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENT_LIST:
            return {
                ...state,
                loading: true,
            }
        case GET_CLIENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                organization: action.payload,
            }
        case GET_CLIENT_LIST_FAIL:
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