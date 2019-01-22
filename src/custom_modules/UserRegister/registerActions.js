import {
    REGISTER_REQUEST,
    REGISTER_RESET
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function register(value) {
    console.log(value);
    return {
        type: REGISTER_REQUEST,
        payload: value
    };
}

export function resetRegister() {
    return {
        type: REGISTER_RESET
    };
}

export const actions = {
    register,
    resetRegister
};