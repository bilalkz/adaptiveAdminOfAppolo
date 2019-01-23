import { all, fork } from 'redux-saga/effects';
import loginSagas from './custom_modules/UserLogin/loginSagas';
import registerSagas from './custom_modules/UserRegister/registerSagas';
import dashboardSagas from './custom_modules/Dashboard/dashboardSagas';
import forgotPasswordSagas from './custom_modules/ForgotPassword/forgotPasswordSagas';
import resetPasswordSagas from './custom_modules/ResetPassword/resetPasswordSagas';
import verifySagas from './custom_modules/VerifyUser/verifySagas';
import timesheetApprovalsSagas from './custom_modules/TimesheetApproval/timesheetApprovalsSagas';
import signupConfirmationSagas from './custom_modules/SignUpConfirmation/signupConfirmationSagas';
import profileSagas from './custom_modules/UserProfile/userProfileSagas';
import projectSagas from './custom_modules/Projects/projectSagas';
import OrganizationSagas from './custom_modules/Organization/organizationSaga'

/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(loginSagas),
        fork(registerSagas),
        fork(forgotPasswordSagas),
        fork(dashboardSagas),
        fork(resetPasswordSagas),
        fork(verifySagas),
        fork(timesheetApprovalsSagas),
        fork(signupConfirmationSagas),
        fork(profileSagas),
        fork(projectSagas),
        fork(OrganizationSagas),
    ]);
}