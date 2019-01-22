import {
    VERIFY_REQUEST,
    VERIFY_RESET
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function verify(value) {
    console.log(value);
    return {
        type: VERIFY_REQUEST,
        payload: value
    };
}

export function resetVerify() {
    return {
        type: VERIFY_RESET
    };
}

export const actions = {
    verify,
    resetVerify
};