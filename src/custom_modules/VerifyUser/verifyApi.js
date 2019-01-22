import api from 'utils/api';

const reqData = {
    method: 'GET',
    url: '',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
    data:{}
};

export function verify(url, method, details) {
    let verifyDetails = { ...reqData };
    verifyDetails.url = url
    verifyDetails.method = method;
    verifyDetails.data = details;
    return api(verifyDetails)
        .then(response => response)
}

