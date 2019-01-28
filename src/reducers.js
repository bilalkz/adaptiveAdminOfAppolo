import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import authReducer from './custom_modules/UserLogin/loginReducer';
import registerReducer from './custom_modules/UserRegister/registerReducer';
import dashboardReducer from './custom_modules/Dashboard/dashboardReducer';
import forgotPasswordReducer from './custom_modules/ForgotPassword/forgotPasswordReducer';
import resetPasswordReducer from './custom_modules/ResetPassword/resetPasswordReducer';
import verifyReducer from './custom_modules/VerifyUser/verifyReducer';
import timesheetApprovalsReducer from './custom_modules/TimesheetApproval/timesheetApprovalsReducer';
import signupConfirmationReducer from './custom_modules/SignUpConfirmation/signupConfirmationReducer';
import profileReducer from './custom_modules/UserProfile/userProfileReducer';
import projectReducer from './custom_modules/Projects/projectReducer';
import orgainzationReducer from './custom_modules/Organization/orgReducer';
import clientReducer from './custom_modules/Client/clientReducer'
import { reducer as formReducer } from 'redux-form'

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['auth']
}

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: persistReducer(authPersistConfig, authReducer),
    form: formReducer,
    // auth: authReducer,
    register: registerReducer,
    dashboard: dashboardReducer,
    forgot: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    verify: verifyReducer,
    timesheetApprovals: timesheetApprovalsReducer,
    signupConfirmation: signupConfirmationReducer,
    profile: profileReducer,
    project: projectReducer,
    organizations: orgainzationReducer,
    clientReducer: clientReducer,

});