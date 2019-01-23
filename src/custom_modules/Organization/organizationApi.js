

import api from '../../utils/api';
import axios from 'axios';
const reqData = {
    method: 'GET',
    apiPath: 'organization_list',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
};
const token = localStorage.getItem('access_token');
const baseURLOrganization = 'http://104.248.151.204:81000/api';
// const response = yield call(organization(`/organization_list/`));
const headers = {
    'Authorization': `${"Bearer" + " "}${token}`,
    'Content-Type': 'application/json',
};
export function organization(url, details) {
    debugger
    console.log(url)
    let dashboardDetails = { ...reqData };
    dashboardDetails.apiPath = url;
    return axios
        .get('http://104.248.151.204:8100/api/organization_list/', { headers: { Authorization: `${"Bearer" + " "}${token}` } })
        .then(response => response)
        .catch(error => error.response);
}

