import api from 'utils/api';

const reqData = {
    method: 'GET',
    apiPath: '',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
};

export function dashboard(url, details) {
    let dashboardDetails = { ...reqData };
    dashboardDetails.apiPath = url;
    return api
        .post(`dashboard`, dashboardDetails)
        .then(response => response)
    // .catch(error => error.response);
}

