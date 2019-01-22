// import api from '../utils/api';
import api from '../../utils/api'

const reqData = {
    method: 'GET',
    url: '',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
    data:{}
};

export function reset(url, method, details) {
    let resetDetails = { ...reqData };
    resetDetails.url = url
    resetDetails.method = method;
    resetDetails.data = details;
    return api(resetDetails)
        .then(response => response)
}

export function changePassword(url, method, details) {
    let changePasswordDetails = { ...reqData };
    changePasswordDetails.url = url
    changePasswordDetails.method = method;
    changePasswordDetails.data = details;
    return api(changePasswordDetails)
        .then(response => response)
}

