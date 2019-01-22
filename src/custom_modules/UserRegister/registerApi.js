import api from '../../utils/api';

const reqData = {
    method: 'GET',
    url: '',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
    data:{}
};

export function register(url, method, details) {
    let registerDetails = { ...reqData };
    registerDetails.url = url
    registerDetails.method = method;
    registerDetails.data = details;
    return api(registerDetails)
        .then(response =>response)
}

