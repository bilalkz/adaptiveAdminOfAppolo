import {
    GET_PROJECT_LIST,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAILURE,
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_REQUEST_SUCCESS,
    ADD_PROJECT_REQUEST_FAILURE,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_REQUEST_SUCCESS,
    UPDATE_PROJECT_REQUEST_FAILURE,
    CHANGE_PROJECT_STATUS_REQUEST,
    CHANGE_PROJECT_STATUS_REQUEST_SUCCESS,
    CHANGE_PROJECT_STATUS_REQUEST_FAILURE
}
    from 'modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const projectListRequestHandler = (state, action) => {
    console.log(action, 'project list request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const projectListRequestSuccessHandler = (state, action) => {
    console.log(action, 'project list request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        state.list = data.data;
    }
    state.isLoading = false;
    state.callback = false
    return {
        ...state
    };
};

export const projectListRequestFailureHandler = (state, action) => {
    console.log(action, 'project list request failure');
    state.isLoading = false;
    state.callback = false;
    return {
        ...state
    };
};

export const projectAddRequestHandler = (state, action) => {
    console.log(action, 'project add request');
    return {
        ...state
    };
};

export const projectAddRequestSuccessHandler = (state, action) => {
    console.log(action, 'project add request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 201){
        createNotification('success', 'Project created successfully', 2000);
        state.callback = true;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const projectAddRequestFailureHandler = (state, action) => {
    console.log(action, 'project add request failure');
    const {payload:{
        data
    }} = action;
    if(data.status == 400){
        createNotification('error', 'Failed!! please try again', 2000);
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const projectUpdateRequestHandler = (state, action) => {
    console.log(action, 'project update request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const projectUpdateRequestSuccessHandler = (state, action) => {
    console.log(action, 'project update request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'Project details updated successfully', 2000);
        state.callback = true;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const projectUpdateRequestFailureHandler = (state, action) => {
    console.log(action, 'project update request failure');
    const {payload:{
        data
    }} = action;
    if(data.status == 400){
        createNotification('error', 'Failed!! please try again', 2000);
        state.callback = false;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const projectStatusRequestHandler = (state, action) => {
    console.log(action, 'project status change request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const projectStatusRequestSuccessHandler = (state, action) => {
    console.log(action, 'project status update request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 200){
        createNotification('success', 'Status updated successfully', 2000);
        state.callback = true;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const projectStatusRequestFailureHandler = (state, action) => {
    console.log(action, 'project ststaus update request failure');
    const {payload:{
        data
    }} = action;
    if(data.status == 400){
        createNotification('error', 'Failed!! please try again', 2000);
        state.callback = false;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

// Action Handlers
const ACTION_HANDLERS = {
    [GET_PROJECT_LIST]: projectListRequestHandler,
    [GET_PROJECT_LIST_SUCCESS]: projectListRequestSuccessHandler,
    [GET_PROJECT_LIST_FAILURE]: projectListRequestFailureHandler,
    [ADD_PROJECT_REQUEST]: projectAddRequestHandler,
    [ADD_PROJECT_REQUEST_SUCCESS]: projectAddRequestSuccessHandler,
    [ADD_PROJECT_REQUEST_FAILURE]: projectAddRequestFailureHandler,
    [UPDATE_PROJECT_REQUEST]: projectUpdateRequestHandler,
    [UPDATE_PROJECT_REQUEST_SUCCESS]: projectUpdateRequestSuccessHandler,
    [UPDATE_PROJECT_REQUEST_FAILURE]: projectUpdateRequestFailureHandler,
    [CHANGE_PROJECT_STATUS_REQUEST]: projectStatusRequestHandler,
    [CHANGE_PROJECT_STATUS_REQUEST_SUCCESS]:projectStatusRequestSuccessHandler,
    [CHANGE_PROJECT_STATUS_REQUEST_FAILURE]:projectStatusRequestFailureHandler,
}


// default initial state
const initialState = {
    isLoading: false,
    redirect: false,
    list:[],
    callback:false
}

export default function projectReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}