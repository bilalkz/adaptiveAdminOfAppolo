import {
    RESET_PASSWORD,
    RESET_PASSWORD_STATE_RESET
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function reset(value) {
    console.log(value);
    return {
        type: RESET_PASSWORD,
        payload: value
    };
}

export function resetRedirectReset() {
    return {
        type: RESET_PASSWORD_STATE_RESET,
    };
}

export const actions = {
    reset,
    resetRedirectReset
};