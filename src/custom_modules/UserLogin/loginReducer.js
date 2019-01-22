import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE, LOGIN_REDIRECT_RESET } from '../../modules/constants';
import { createNotification } from '../../modules/notificationManager';
import { push } from 'connected-react-router'
// ------------------------------------
// Action handler methods
// ------------------------------------
export const handleLoginRequest = (state, action) => {
    // console.log("handleLoginstate..", {...state});
    state.isLoading = true;
    return {
        ...state
    };
};
// handle the login request and redirect to the next page
// check in login component
export const handleLoginRequestSuccess = (state, action) => {
    // console.log(action, 'login Success');
    state.isLoading = false;
    const payload = action.payload;
        
    if(payload.status == 200){

        localStorage.setItem("access_token", payload.data.token)
        localStorage.setItem("user_id", payload.data.user_id)
        localStorage.setItem("user_profile", payload.data.user_profile.id)

        // sessionStorage.setItem("access_token", payload.data.token)
        // sessionStorage.setItem("user_id", payload.data.user_id)
        // sessionStorage.setItem("user_profile", payload.data.user_profile)
        state.auth = payload.data;
        createNotification('success', 'User logged in', 200);
        state.redirect = true;
    }
    return {
        ...state
    };
};

export const handleLoginRequestFailure = (state, action) => {
    // console.log(action, 'login Failed');
    state.isLoading = false;
    const {payload:{
        response
    }} = action;
    state.redirect = false;
    if(response == undefined){
        createNotification('error', 'No internet connection found', 2000);
    }else{
        createNotification('error', response.data.non_field_errors[0], 2000);
    }
    return {
        ...state
    };
};

export const handleLoginRedirectReset = (state, action) => {
    // console.log(action, 'login redirect reset');
    state.isLoading = false;
    state.redirect = false;
    return {
        ...state
    };
};

// Action Handlers
const ACTION_HANDLERS = {
    [LOGIN_REQUEST]: handleLoginRequest,
    [LOGIN_REQUEST_SUCCESS]: handleLoginRequestSuccess,
    [LOGIN_REQUEST_FAILURE]: handleLoginRequestFailure,
    [LOGIN_REDIRECT_RESET]: handleLoginRedirectReset
}


// default initial state
const initialState = {
    auth: {},
    redirect: false,
    isLoading: false
}

export default function authReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}