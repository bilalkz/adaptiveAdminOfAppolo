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

export function forgotPassword(url, method, details) {
    let forgotDetails = { ...reqData };
    forgotDetails.url = url
    forgotDetails.method = method;
    forgotDetails.data = details;
    return api(forgotDetails)
        .then(response => response)
}

