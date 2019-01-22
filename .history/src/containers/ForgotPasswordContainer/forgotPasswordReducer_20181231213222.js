import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST_SUCCESS, FORGOT_PASSWORD_REQUEST_FAILURE } from '../../modules/constants';
import { createNotification } from '../../modules/notificationManager';
import { reset } from '../ResetPasswordContainer/resetPasswordApi';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const handleForgotPasswordRequest = (state, action) => {
    console.log(action, 'check');
    state.isLoading = true;
    return {
        ...state
    };
};

export const handleForgotPasswordRequestSuccess = (state, action) => {
    state.isLoading = false;
    console.log(action, 'forgot password Success');
    console.log('reset password', state);
    const {payload:{
        data
    }} = action;
    if (data.status == 200){
        state.redirect = true;
        createNotification('success', 'Reset password link has been sent to your email', 3000);
    }
    return {
        ...state
    };
};

export const handleForgotPasswordRequestFailure = (state, action) => {
    state.isLoading = false;
    console.log(action, 'forgot password Failed');
    const {payload:{
        response:{
            data, status
        }
    }} = action;
    if (status == 400){
        createNotification('error', data.failure, 3000);
    }
    return {
        ...state
    };
};

// Action Handlers
const ACTION_HANDLERS = {
    [FORGOT_PASSWORD_REQUEST]: handleForgotPasswordRequest,
    [FORGOT_PASSWORD_REQUEST_SUCCESS]: handleForgotPasswordRequestSuccess,
    [FORGOT_PASSWORD_REQUEST_FAILURE]: handleForgotPasswordRequestFailure
}


// default initial state
const initialState = {
    redirect: false,
    isLoading: false
}

export default function forgotPasswordReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}