

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
console.log(token)
const baseURLOrganization = 'http://104.248.151.204:8100/api';

const headers = {
    'Authorization': `${"Bearer" + " "}${token}`,
    'Content-Type': 'application/json',
};

export function organization(url, details) {
    let dashboardDetails = { ...reqData };
    dashboardDetails.apiPath = 'organization_list/';
    return api('organization_list/', dashboardDetails)
    // return axios
    //     .get('http://104.248.151.204:8100/api/organization_list/', { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}



// export function loginByApi(url, method, details) {
//     let loginDetails = { ...reqData };
//     loginDetails.url = url
//     loginDetails.method = method;
//     loginDetails.data = details;
//     return api(url, loginDetails)
//         .then(response => response)

// }
export function create_org(payload) {
    console.log(payload)
    console.log(token)
    // let dashboardDetails = { ...reqData };
    // dashboardDetails.apiPath = url;
    // return api()
    return axios
        .post('http://104.248.151.204:8100/api/organization/', payload, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}

export function update_org(payload) {
    console.log(payload);
    return axios
        .put(`http://104.248.151.204:8100/api/organization/${payload.id}/`, payload.obj, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}

// get organization types

export function orgTypeApi(payload) {
    return axios
        .get('http://104.248.151.204:8100/api/organization_types/', { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}

//archive  
export const archiveendpoint = (payload) => {
    console.log(payload)
    return axios
        .patch(`http://104.248.151.204:8100/api/organization/${payload.id}/`, { "is_active": payload.is_active }, { headers: { Authorization: `${"Bearer" + " "}${token}` } })
}
