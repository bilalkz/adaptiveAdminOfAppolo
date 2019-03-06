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
    GET_AUDIO_LIST,
    GET_AUDIO_LIST_FAIL,
    GET_AUDIO_LIST_SUCCESS,
    GET_IMAGE_LIST,
    GET_IMAGE_LIST_FAIL,
    GET_IMAGE_LIST_SUCCESS,
} from '../../modules/constants';

const initialState = {
    loading: false,
    errors: {},
    media: [],
    audioList: [],
    imageList: [],
    done: false,
    deleted: false,
    updated: false,
    created: false,
}

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MEDIA_LIST:
            return {
                ...state,
                loading: true,
                done: false,
                deleted: false,
                updated: false,
                created: false,
            }
        case GET_MEDIA_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                media: action.payload,
                done: false,
            }
        case GET_MEDIA_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case GET_AUDIO_LIST:
            return {
                ...state,
                loading: true,
                done: false,
            }
        case GET_AUDIO_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                audioList: action.payload,
                done: false,
            }
        case GET_AUDIO_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case GET_IMAGE_LIST:
            return {
                ...state,
                loading: true,
                done: false
            }
        case GET_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                imageList: action.payload,
                done: false,
            }
        case GET_IMAGE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case UPDATE_MEDIA:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true,
                updated: true,
            }
        case UPDATE_MEDIA_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CREATE_MEDIA:
            return {
                ...state,
                loading: true,
            }
        case CREATE_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true,
                created: true,
            }
        case CREATE_MEDIA_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case DELETE_MEDIA:
            return {
                ...state,
                loading: true,

            }
        case DELETE_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                done: true,
                deleted: true,
            }
        case DELETE_MEDIA_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default mediaReducer;