import {
    CHANGE_PASSWORD_REQUEST
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function changePassword(value) {
    console.log(value);
    return {
        type: CHANGE_PASSWORD_REQUEST,
        payload: value
    };
}

export const actions = {
    changePassword
};