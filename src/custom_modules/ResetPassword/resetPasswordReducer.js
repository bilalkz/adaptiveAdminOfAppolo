import { RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_STATE_RESET,
    CHANGE_PASSWORD_REQUEST_SUCCESS,
    CHANGE_PASSWORD_REQUEST_FAILURE } from '../../modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const handleResetRequest = (state, action) => {
    console.log(action, 'reset request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const handleResetRequestSuccess = (state, action) => {
    console.log(action, 'reset password Success');
    state.isLoading = false;
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'Password reset success', 2000);
        state.redirect = true;
    }
    return {
        ...state
    };
};

export const handleResetRequestFailure = (state, action) => {
    console.log(action, 'reset password Failed');
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

export const handleResetPasswordRedirectReset = (state, action) => {
    console.log(action, 'reset password redirect reset');
    state.isLoading = false;
    state.redirect = false;
    return {
        ...state
    };
};

export const handleChangePasswordRequestSuccess = (state, action) => {
    console.log(action, 'change password success');
    const {payload:{
        response, data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'Password changed successfully', 2000);
    }
    return {
        ...state
    };
};

export const handleChangePasswordRequestFailure = (state, action) => {
    console.log(action, 'change password failure');
    const {payload:{
        response
    }} = action;
    if(response.data){
        createNotification('error', 'Please try again', 2000);
    }
    return {
        ...state
    };
};


// Action Handlers
const ACTION_HANDLERS = {
    [RESET_PASSWORD]: handleResetRequest,
    [RESET_PASSWORD_SUCCESS]: handleResetRequestSuccess,
    [RESET_PASSWORD_FAILURE]: handleResetRequestFailure,
    [RESET_PASSWORD_STATE_RESET]: handleResetPasswordRedirectReset,
    [CHANGE_PASSWORD_REQUEST_SUCCESS]: handleChangePasswordRequestSuccess,
    [CHANGE_PASSWORD_REQUEST_FAILURE]: handleChangePasswordRequestFailure
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