import { SEND_INVITE_REQUEST,
    SEND_INVITE_REQUEST_SUCCESS,
    SEND_INVITE_REQUEST_FAILURE } from '../../modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const handleInviteRequest = (state, action) => {
    console.log(action, 'invite request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const handleInviteRequestSuccess = (state, action) => {
    console.log(action, 'invite Success');
    state.isLoading = false;
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'Invite sent successfully', 2000);
        state.redirect = true;
    }
    return {
        ...state
    };
};

export const handleInviteRequestFailure = (state, action) => {
    console.log(action, 'invite Failed');
    state.isLoading = false;
    const {payload:{
        response
    }} = action;
    state.redirect = false;
    if(response.data){
        createNotification('error', response.data.failure, 2000);
    }
    return {
        ...state
    };
};


// Action Handlers
const ACTION_HANDLERS = {
    [SEND_INVITE_REQUEST]: handleInviteRequest,
    [SEND_INVITE_REQUEST_SUCCESS]: handleInviteRequestSuccess,
    [SEND_INVITE_REQUEST_FAILURE]: handleInviteRequestFailure,
}


// default initial state
const initialState = {
    redirect: false,
    isLoading: false
}

export default function resetPasswordReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}