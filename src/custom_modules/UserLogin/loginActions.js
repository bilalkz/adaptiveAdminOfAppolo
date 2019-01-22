import {
    LOGIN_REQUEST,
    LOGIN_REDIRECT_RESET
}
    from '../../modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
// actions will call form index.js file
export function loginRequest(value) {
    //console.log('loginActions',value);
    return {
        type: LOGIN_REQUEST,
        payload: value
    };
}

export function loginRedirectReset() {
    return {
        type: LOGIN_REDIRECT_RESET,
    };
}

export const actions = {
    loginRequest,
    loginRedirectReset
};