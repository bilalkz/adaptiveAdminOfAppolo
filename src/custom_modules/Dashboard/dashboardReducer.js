import { REQUEST_DASHBOARD_DATA, REQUEST_DASHBOARD_DATA_SUCCESS, REQUEST_DASHBOARD_DATA_FAILURE } from '../../modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const handleDashboardDataRequest = (state, action) => {
    console.log(action, 'dashboard data request');
    state.isLoading = true;
    return {
        ...state
    };
};

export const handleDashboardDataRequestSuccess = (state, action) => {
    console.log(action, 'dashboard data request Success');
    state.isLoading = false;
    return {
        ...state
    };
};

export const handleDashboardDataRequestFailure = (state, action) => {
    console.log(action, 'dashboard data request Failed');
    state.isLoading = false;
    // createNotification('error', 'Dashboard data request failure', 2000);
    return {
        ...state
    };
};


// Action Handlers
const ACTION_HANDLERS = {
    [REQUEST_DASHBOARD_DATA]: handleDashboardDataRequest,
    [REQUEST_DASHBOARD_DATA_SUCCESS]: handleDashboardDataRequestSuccess,
    [REQUEST_DASHBOARD_DATA_FAILURE]: handleDashboardDataRequestFailure,
}


// default initial state
const initialState = {
    dashboard: {},
    isLoading: false
}

export default function authReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}