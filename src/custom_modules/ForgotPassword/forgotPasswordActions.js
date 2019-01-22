import {
    FORGOT_PASSWORD_REQUEST
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function forgotPassword(value) {
    console.log(value);
    return {
        type: FORGOT_PASSWORD_REQUEST,
        payload: value
    };
}

export const actions = {
    forgotPassword
};