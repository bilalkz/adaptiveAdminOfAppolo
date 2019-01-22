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

export function sendInvite(url, method, details) {
    let inviteDetails = { ...reqData };
    inviteDetails.url = url
    inviteDetails.method = method;
    inviteDetails.data = details;
    return api(inviteDetails)
        .then(response => response)
}

