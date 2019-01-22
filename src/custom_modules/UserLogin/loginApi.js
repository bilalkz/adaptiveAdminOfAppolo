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

export function loginByApi(url, method, details) {
    let loginDetails = { ...reqData };
    loginDetails.url = url
    loginDetails.method = method;
    loginDetails.data = details;
    return api(loginDetails)
        .then(response => response)
       
}

