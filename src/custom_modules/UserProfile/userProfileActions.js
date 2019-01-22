import {
    REQUEST_USER_PROFILE,
    CREATE_USER_PROFILE
    
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function profileOperation(value) {
    console.log('profile action',value);
    return {
        type: REQUEST_USER_PROFILE,
        payload: value
    };
}

export function profileCreate(value) {
    console.log(value);
    return {
        type: CREATE_USER_PROFILE,
        payload: value
    };
}


export const actions = {
    profileOperation,
    profileCreate
};