import {
    VERIFY_INVITATION_REQUEST,
    INVITATION_RESET
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function verify(value) {
    console.log(value);
    return {
        type: VERIFY_INVITATION_REQUEST,
        payload: value
    };
}

export function resetInvitation() {
    return {
        type: INVITATION_RESET
    };
}

export const actions = {
    verify,
    resetInvitation
};