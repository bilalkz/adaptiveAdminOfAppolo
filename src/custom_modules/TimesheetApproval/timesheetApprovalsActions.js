import {
    SEND_INVITE_REQUEST,
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function sendInvite(value) {
    console.log(value);
    return {
        type: SEND_INVITE_REQUEST,
        payload: value
    };
}



export const actions = {
    sendInvite
};