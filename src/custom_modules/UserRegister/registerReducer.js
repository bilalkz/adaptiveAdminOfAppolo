import {
    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILURE,
    REGISTER_RESET
}
    from 'modules/constants';
import { createNotification } from '../../modules/notificationManager';


// ------------------------------------
// Action handler methods
// ------------------------------------
export const registerRequestHandler = (state, action) => {
    console.log(action, 'Register request');
    return {
        ...state
    };
};

export const registerRequestSuccessHandler = (state, action) => {
    console.log(action, 'Register request success');
    const {payload:{
        data
    }} = action;
    if(data.status == 201){
        createNotification('success', 'User successfully registered', 3000);
        state.redirect = true;
    }
    state.isLoading = false;
    return {
        ...state
    };
};

export const registerRequestFailureHandler = (state, action) => {
    console.log(action, 'Register request failure');
    const {payload : {
        response:{
            data
        }
    }} = action;
 
    // console.log(data.email[0].length)
    //console.log(data.username[0].length)

    if( data.email !== undefined){
        console.log('error show',data.email[0]);
        createNotification('error', data.email[0], 3000);
    }
    
    else if(data.username!== undefined)
    {
        console.log('error show',data.username[0]);
        createNotification('error', data.username[0], 3000);

    }

    else { 
        state.redirect = false;
        state.isLoading = false;
        return {
            ...state
        };


    }
    
        
  
};

export const registerResetHandler = (state, action) => {
    console.log(action, 'Register reset');
    state.isLoading = false;
    state.redirect = false;
    return {
        ...state
    };
};


// Action Handlers
const ACTION_HANDLERS = {
    [REGISTER_REQUEST]: registerRequestHandler,
    [REGISTER_REQUEST_SUCCESS]: registerRequestSuccessHandler,
    [REGISTER_REQUEST_FAILURE]: registerRequestFailureHandler,
    [REGISTER_RESET]: registerResetHandler,
}


// default initial state
const initialState = {
    isLoading: false,
    redirect: false
}

export default function registerReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}