import {
    VERIFY_INVITATION_REQUEST,
    VERIFY_INVITATION_REQUEST_SUCCESS,
    VERIFY_INVITATION_REQUEST_FAILURE,
    INVITATION_RESET
}
    from 'modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const verifyRequestHandler = (state, action) => {
    console.log(action, 'verify request');
    return {
        ...state
    };
};

export const verifyRequestSuccessHandler = (state, action) => {
    console.log(action, 'verify request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'User added to organisation', 3000);
        state.redirect = true;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const verifyRequestFailureHandler = (state, action) => {
    console.log(action, 'verify request failure');
    const {payload : {
        response:{
            data
        }
    }} = action;
    if(data.failure){
        createNotification('error', data.failure, 3000);
    }
    state.redirect = false;
    state.isLoading = false;
    return {
        ...state
    };
};

export const verifyResetHandler = (state, action) => {
    console.log(action, 'verify reset');
    state.isLoading = false;
    state.redirect = false;
    return {
        ...state
    };
};


// Action Handlers
const ACTION_HANDLERS = {
    [VERIFY_INVITATION_REQUEST]: verifyRequestHandler,
    [VERIFY_INVITATION_REQUEST_SUCCESS]: verifyRequestSuccessHandler,
    [VERIFY_INVITATION_REQUEST_FAILURE]: verifyRequestFailureHandler,
    [INVITATION_RESET]: verifyResetHandler,
}


// default initial state
const initialState = {
    isLoading: false,
    redirect: false
}

export default function verifyReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}