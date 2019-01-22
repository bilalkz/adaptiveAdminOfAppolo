import {
    REQUEST_USER_PROFILE,
    REQUEST_USER_PROFILE_SUCCESS,
    REQUEST_USER_PROFILE_FAILURE,
}
    from 'modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const profileRequestHandler = (state, action) => {
    console.log(action, 'profile request');
    return {
        ...state
    };
};

export const profileRequestSuccessHandler = (state, action) => {
    console.log(action, 'profile request success');
    state.isLoading = false;
    const {payload:{
        data, notify
    }} = action;
    if(data.status == 200){
        state.profileData = data.data
        if(notify == true){
            createNotification('success', 'Profile update success', 3000);
        }
    }
    return {
        ...state
    };
};

export const profileRequestFailureHandler = (state, action) => {
    console.log(action, 'profile request failure');
    const {payload : {
        response:{
            data, status
        }
    }} = action;
    if(status == 400){
        if(data.phone){
            createNotification('error', data.phone[0], 3000);
        }
    }
    state.isLoading = false;
    return {
        ...state
    };
};



// Action Handlers
const ACTION_HANDLERS = {
    [REQUEST_USER_PROFILE]: profileRequestHandler,
    [REQUEST_USER_PROFILE_SUCCESS]: profileRequestSuccessHandler,
    [REQUEST_USER_PROFILE_FAILURE]: profileRequestFailureHandler,
}


// default initial state
const initialState = {
    isLoading: false,
    failure:false,
    profileData:{

    }
}

export default function verifyReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}