import {
    GET_PROJECT_LIST,
    ADD_PROJECT_REQUEST,
    UPDATE_PROJECT_REQUEST,
    CHANGE_PROJECT_STATUS_REQUEST
}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function getList(value) {
    console.log(value);
    return {
        type: GET_PROJECT_LIST,
        payload:value
    };
}

export function addProject(value) {
    console.log(value);
    return {
        type: ADD_PROJECT_REQUEST,
        payload:value
    };
}

export function updateProject(value) {
    console.log(value);
    return {
        type: UPDATE_PROJECT_REQUEST,
        payload:value
    };
}

export function changeProjectStatus(value) {
    console.log('change project status', value);
    return {
        type: CHANGE_PROJECT_STATUS_REQUEST,
        payload:value
    };
}



export const actions = {
    getList,
    addProject,
    updateProject,
    changeProjectStatus
};