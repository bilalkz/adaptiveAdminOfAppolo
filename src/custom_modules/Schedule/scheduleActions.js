import {
    REQUEST_SCHEDULE,
    REQUEST_SCHEDULE_FAILURE,
    REQUEST_SCHEDULE_SUCCESS
}from '../../modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
// actions will call from index.js file
export function scheduleRequest(value) {
    //console.log('loginActions',value);
    return {
        type: REQUEST_SCHEDULE,
        payload: value
    };
}

export function schedleRequestSuccess() {
    return {
        type: REQUEST_SCHEDULE_SUCCESS,
    };
}

export const actions = {
    scheduleRequest,
    schedleRequestSuccess
};